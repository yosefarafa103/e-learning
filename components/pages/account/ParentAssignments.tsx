"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useParentAssignments } from "@/hooks/useParentAssignments";
import { fakeAssignmentsParent } from "@/constants/general";
import { useTranslation } from "react-i18next";
import { transformNumberToAR } from "@/helpers";

export default function ParentAssignments() {
    const {
        search,
        setSearch,
        status,
        setStatus,
        filtered,
        selectedChild,
        setSelectedChild,
    } = useParentAssignments(fakeAssignmentsParent);
    const { t } = useTranslation()
    return (
        <div className="max-w-6xl mx-auto p-6 ">
            <h3 className="text-2xl font-bold mb-10"> {t("assignments.layouts.parentLayout")} </h3>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <Header
                        search={search}
                        setSearch={setSearch}
                        status={status}
                        setStatus={setStatus}
                    />
                    <div className="grid gap-4">
                        {filtered.map((item) => (
                            <AssignmentCard
                                key={item.id}
                                item={item}
                                onClick={() => setSelectedChild(item)}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <DetailsPanel data={selectedChild} />
                </div>
            </section>
        </div>
    );
} function Header({ search, setSearch, status, setStatus }: any) {
    const { t } = useTranslation()

    return (
        <div className="flex gap-3 items-center">
            <Input
                placeholder={t("assignments.searchAnAssignment")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Select onValueChange={(val) => setStatus(val)}>
                <SelectTrigger>
                    {t("assignments.filter.title")}
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={"all"}> {t("assignments.filter.all")} </SelectItem>
                    <SelectItem value={("graded")}>{t("assignments.filter.graded")}</SelectItem>
                    <SelectItem value={("submitted")}>{t("assignments.filter.submitted")}</SelectItem>
                    <SelectItem value={("pending")}>{t("assignments.filter.pending")}</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
} function AssignmentCard({ item, onClick }: any) {
    const { t } = useTranslation()
    return (
        <Card
            onClick={onClick}
            className="cursor-pointer hover:shadow-md transition"
        >
            <CardContent className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            {item.student}
                        </p>
                    </div>
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${item.status === "Graded"
                            ? "bg-green-100 text-green-700"
                            : item.status === "Submitted"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                    >
                        {t("assignments.filter." + item.status.toLowerCase())}
                    </span>
                </div>
                <Progress value={item.progress} />
                {item.grade && (
                    <p className="text-sm font-medium">
                        {`${t("assignments.grade")}:\n ${transformNumberToAR(item.grade.toString())} / ${transformNumberToAR("100")}`}
                    </p>
                )}
            </CardContent>
        </Card>
    );
} function DetailsPanel({ data }: any) {
    const { t } = useTranslation()
    if (!data) {
        return (
            <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                    {t("assignments.selectTitle")}
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardContent className="p-5 space-y-3">
                <h2 className="font-semibold">{data.title}</h2>

                <p className="text-sm text-muted-foreground">
                    {t("dashboard.student")} : {data.student}
                </p>

                <p className="text-sm">
                    {t("assignments.assignmentStatus")}: <span className="font-medium">
                        {t("assignments.filter." + data.status.toLowerCase())}
                    </span>
                </p>

                <Progress value={data.progress} />

                {data.grade ? (
                    <p className="text-lg font-bold text-green-600">
                        {`${transformNumberToAR(data.grade.toString())} / ${transformNumberToAR("100")}`}
                    </p>
                ) : (
                    <p className="text-sm text-muted-foreground">
                        {t("assignments.noGrade")}
                    </p>
                )}
            </CardContent>
        </Card>
    );
}