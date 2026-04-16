"use client";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { File, UploadCloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import { transformNumberToAR } from "@/helpers";
import { useDirection } from "@/hooks/useDirection";
import { toast } from "sonner";
import { useParams } from "next/navigation";

export default function AssignmentDetails() {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const assignment = {
        title: "Assignment 2: Web Development Basics",
        course: "Frontend Engineering",
        dueDate: "Nov 10, 2025",
        instructions: [
            "Build a responsive landing page using HTML and CSS.",
            "Use Flexbox or Grid for layout.",
            "Add basic JavaScript interaction.",
            "Ensure the design is mobile-friendly.",
            "Submit your project as a ZIP file.",
        ],
        grade: null,
        feedback: "",
        progress: 60,
    };
    return (
        <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">
            <h3 className="text-2xl font-bold"> {t("assignments.layouts.studentLayout")} </h3>
            <AssignmentHeader assignment={assignment} t={t} />
            <InstructionsSection instructions={assignment.instructions} t={t} />
            <SubmissionSection submitted={submitted} setSubmitted={setSubmitted} t={t} />
            <FeedbackSection grade={assignment.grade} feedback={assignment.feedback} t={t} />
        </div>
    );
}

function AssignmentHeader({ assignment, t }: any) {
    return (
        <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="sm:text-2xl text-lg font-semibold text-primary">
                            {assignment.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {assignment.course}
                        </p>
                    </div>
                    <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 whitespace-nowrap">
                        {t("dashboard.assignments_status.inProgress")}
                    </span>
                </div>
                <div className="text-sm text-muted-foreground">
                    {t("duration.title")}:
                    <span className="font-medium text-foreground ml-1">
                        {assignment.dueDate}
                    </span>
                </div>
                <Progress value={assignment.progress} className="h-2" />
            </CardContent>
        </Card>
    );
}
function InstructionsSection({ instructions, t }: any) {
    const { dir } = useDirection();
    return (
        <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">{t("content")}</h2>
                <div className="space-y-3">
                    {instructions.length >= 5 ? instructions.slice(0, 3).map((step: string, index: number) => (
                        <>
                            <div
                                key={index}
                                className="flex items-start gap-3 p-3 rounded-xl dark:bg-accent bg-blue-900/10 dark:text-white text-background border-2 border-accent-foreground/10"
                            >
                                <div className="min-w-[32px] h-8 flex items-center justify-center rounded-full bg-blue-900 text-white text-sm font-semibold">
                                    {transformNumberToAR(index + 1 + "", dir)}
                                </div>
                                <p className="text-sm max-sm:text-xs text-foreground leading-relaxed">
                                    {step}
                                </p>
                            </div>
                        </>
                    )) : instructions.map((step: string, index: number) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-xl dark:bg-accent bg-blue-900/40 dark:text-white text-background border-2 border-accent-foreground/10"
                        >
                            <div className="min-w-[32px] h-8 flex items-center justify-center rounded-full bg-blue-900 text-white text-sm font-semibold">
                                {transformNumberToAR(index + 1 + "", dir)}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {step}
                            </p>
                        </div>
                    ))}
                    <Button variant="outline">{t("showMore")} </Button>

                </div>
            </CardContent>
        </Card>
    );
}

function SubmissionSection({ submitted, setSubmitted, t }: any) {
    const { assignmentId } = useParams<{ assignmentId: string }>()
    let [files, setFiles] = useState<FileList[]>([])
    const handelFileExts = useCallback((f: FileList[]) => {
        return Object.keys(f?.[0] || {}).map(item => {
            return files?.[0][+item]
        }).map(el => {
            let fileName = el.name
            let ext = el.name.split("").findLastIndex(el => el === ".");
            return {
                name: fileName,
                ext: fileName.slice(ext + 1)
            }
        })
    }, [files]);
    const handelSaveAsDraft = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        let draftValue = localStorage.getItem(`assignment${assignmentId}_input_${assignmentId}_value`);
        if (e.target.value === draftValue) return;
        localStorage.setItem(`assignment${assignmentId}_input_${e.target.id}_value`, e.target.value)
        toast.custom(() => (
            <div> تم الحفظ كمسودة </div>
        ))
    }, [assignmentId])
    return (
        <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-semibold">
                    {t("assignments.submission")}
                </h2>
                {!submitted ? (
                    <>
                        <div className="border-2 border-dashed rounded-xl p-6 flex flex-col relative items-center justify-center text-center">
                            <input type="file" onChange={(e) => setFiles([...files, e.target.files!])
                            } multiple name="file" className="w-full absolute left-0 top-0 h-full opacity-0" id="" />
                            <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                                {t("forms.type_your_message")}
                            </p>
                        </div>
                        {handelFileExts(files).map(file => (
                            <div className="p-3 rounded-md bg-sidebar-accent"> <File /> {file.name} </div>
                        ))}
                        {files.length ? <Button onClick={() => setFiles([])} variant="outline">Clear Files</Button> : null}
                        <Textarea defaultValue={localStorage.getItem(`assignment${assignmentId}_input_${assignmentId}_value`)} id={assignmentId} onBlur={handelSaveAsDraft} placeholder={t("forms.type_your_message")} />
                        <Button
                            disabled={!files.length}
                            className="w-full"
                            variant="blue"
                            onClick={() => setSubmitted(true)}
                        >
                            {t("assignments.submission")}
                        </Button>
                    </>
                ) : (
                    <div className="space-y-3">
                        <p className="text-sm text-green-600">
                            {t("assignments.submitted")}
                        </p>
                        <Button variant="outline" className="w-full">
                            {t("forms.update")}
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

function FeedbackSection({ grade, feedback, t }: any) {
    return (
        <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-3">
                <h2 className="text-lg font-semibold">
                    {t("reviews")}
                </h2>
                {grade ? (
                    <>
                        <p className="text-xl font-bold">{grade}/100</p>
                        <p className="text-sm text-muted-foreground">
                            {feedback}
                        </p>
                    </>
                ) : (
                    <p className="text-sm text-muted-foreground">
                        {t("doesntHave")}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}