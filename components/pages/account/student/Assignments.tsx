"use client";
import { useCallback, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTranslation } from "react-i18next";
import { toCamelCase } from "@/helpers/camelCase";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { assignmentsStatus, fakeAssignmentsStudentDashboard as fakeAssignments } from "@/constants/general";
import { useSearchFilter } from "@/hooks/useSearchFilter";
import NotFoundState from "@/components/EmptyState";
import Link from "next/link";
import { Assignment } from "@/types/dashboard";
import { TFunction } from "i18next";
import { DomUtils } from "@/helpers/jsx";
import { Badge } from "@/components/ui/badge";

export default function Assignments() {
  const [assignments] = useState(() => fakeAssignments);
  const {
    search,
    setSearch,
    setFilter,
    result: filteredAssignments,
    filter
  } = useSearchFilter(assignments, ["title", "course"], (item, filter) =>
    item.status.toLowerCase() === filter
  );

  const { t } = useTranslation();

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-2xl font-semibold mb-6 text-primary">
          {t("dashboard.tabs.assignments")}
        </h2>
        <section className="flex gap-2 items-center">
          <Select value={filter} onValueChange={(val) => setFilter(val)}>
            <SelectTrigger>
              <h3 className="max-sm:hidden">
                {t("assignments.filter.filter_by_status")}
              </h3>
              <h3 className="sm:hidden"> <Filter /> </h3>
            </SelectTrigger>
            <SelectContent>
              {assignmentsStatus.map((el) => (
                <SelectItem key={el} value={el}>{t("assignments.filter." + el)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <>
            <Input
              placeholder={t("assignments.searchAnAssignment")}
              className="w-full grow max-sm:text-xs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </>
        </section>
      </div>
      {!!filteredAssignments.length ?
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredAssignments.map((item) => (
            <Assignments.Card item={item} t={t} />
          ))}
        </div>
        : <NotFoundState
          title={t("assignments.notFoundAssignment")}
          description={t("assignments.notFoundAssignmentDesc")}
        />
      }
    </div>
  );
};


Assignments.Card = ({ item, t }: { item: Assignment, t: TFunction }) => {
  const getStatusColor = useCallback(
    new DomUtils().getStatusColor,
    [item]
  );
  return <Card
  >
    <CardContent>
      <div className="flex justify-between items-start mb-3">
        <>
          <h3 className="font-semibold text-lg text-primary">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500">{item.course}</p>
        </>
        <Badge
          className={`text-xs  font-medium px-2 py-1 whitespace-nowrap rounded-full ${getStatusColor(
            item.status
          )}`}
        >
          {t(
            "dashboard.assignments_status." +
            toCamelCase(item.status)
          )}
        </Badge>
      </div>
      <div className="text-sm text-gray-600 mb-3">
        <p>
          {t("assignments.type")}  : <span className="font-medium">{t("assignments." + item.type)}</span>
        </p>
        <p>
          {t("assignments.due")}: <span className="font-medium">{item.dueDate}</span>
        </p>
      </div>
      <Progress value={item.progress} className="h-2 mb-4" />
      <Button
        className="w-full mt-auto"
        variant={
          item.status === "completed" ? "secondary" : "outline"
        }
        asChild
      >
        <Link href={`/assignment/${item.id}`}>
          {item.status === "completed"
            ? t('assignments.showSubmission')
            : t('assignments.start_now')}
        </Link>
      </Button>
    </CardContent>
  </Card>
}