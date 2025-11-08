"use client";
import React, { RefObject, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Radio, UserPlus } from "lucide-react";
import { useParams } from "next/navigation";
import { useGroup } from "@/hooks/useGroup";
import Loader from "../Loader";
interface Props {
  video: RefObject<HTMLVideoElement | null>;
  setVideoLink: React.Dispatch<React.SetStateAction<string>>;
}
const GroupPageHead = ({ setVideoLink, video }: Props) => {
  const { id } = useParams<{ id: string }>();
  const [recorder, setRecorder] = useState<MediaRecorder>();
  const handelOpenCamira = async () => {
    try {
      const liveStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "browser",
          width: 500,
          height: 500,
        },
        audio: true,
      });

      let localChunks: Blob[] = [];
      const rec = new MediaRecorder(liveStream, {
        mimeType: "video/webm; codecs=vp9",
      });

      rec.ondataavailable = (e) => {
        if (e.data.size > 0) localChunks.push(e.data);
      };

      rec.onstop = () => {
        const recordedBlob = new Blob(localChunks, { type: "video/webm" });
        const videoUrl = URL.createObjectURL(recordedBlob);
        setVideoLink(videoUrl);
        if (video.current) {
          video.current.srcObject = null;
          video.current.src = videoUrl;
          video.current.controls = true;
          video.current.play();
        }
        liveStream.getTracks().forEach((t) => t.stop());
      };
      rec.start();
      setRecorder(rec);
      if (video.current) {
        video.current.srcObject = liveStream;
        await video.current.play();
      }
    } catch (err) {
      console.error("حدث خطأ أثناء فتح الكاميرا أو تسجيل الشاشة:", err);
    }
  };
  const { data, isLoading } = useGroup(id);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Card className="mb-6 shadow-lg border-primary-foreground bg-background backdrop-blur-md rounded-2xl">
          <CardContent className="p-6 flex flex-col md:flex-row justify-between ">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-1">
                📘 {data?.name}
              </h1>
              <p className="text-gray-500">إدارة: {data?.teacher.name}</p>
              <p className="text-sm text-gray-500 mt-1">
                عدد الطلاب: {data?.students?.length}
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button className="flex gap-2 border-0 bg-indigo-600 hover:bg-indigo-700 text-white">
                <UserPlus size={18} /> إضافة طالب
              </Button>
              <Button
                variant="outline"
                className="flex gap-2 border-0 border-indigo-300 text-primary"
              >
                <Bell size={18} /> إرسال إشعار
              </Button>
              {recorder?.state !== "recording" ? (
                <Button
                  onClick={handelOpenCamira}
                  variant="outline"
                  className="flex gap-2 !border-destructive hover:text-destructive text-destructive hover:bg-red-50"
                >
                  Live Stream
                  <Radio size={18} />
                </Button>
              ) : recorder?.state === "recording" ? (
                <Button onClick={() => recorder.stop()}>Stop Recording</Button>
              ) : (
                ""
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default GroupPageHead;
