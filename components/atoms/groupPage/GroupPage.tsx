"use client";
import React, { Suspense, useMemo, useRef, useState } from "react";
const GroupSearch = dynamic(() => import("./GroupSearch"));
const GroupChat = dynamic(() => import("./GroupChat"));
const GroupPageHead = dynamic(() => import("./GroupPageHead"));
import dynamic from "next/dynamic";
import Loader from "@/components/atoms/Loader";
import { cn } from "@/lib/utils";
import { useGroup } from "@/hooks/useGroup";
import { useParams } from "next/navigation";
export default function GroupPage() {
  const [videoLink, setVideoLink] = useState<string>("");
  const video = useRef<HTMLVideoElement | null>(null);
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGroup(id);
  return (
    <Suspense fallback={<Loader />}>
      <div className="p-6 bg-gradient-to-br min-h-screen font-[sans-serif]">
        <GroupPageHead setVideoLink={setVideoLink} video={video} />
        <video
          ref={video}
          autoPlay
          className={`${cn(videoLink ? "" : "hidden")}`}
        />
        <GroupSearch isLoading={isLoading} students={data?.students!} />
        {/* <GroupChat /> */}
      </div>
    </Suspense>
  );
}
