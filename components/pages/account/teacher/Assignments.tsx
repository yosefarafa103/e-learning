"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";
import { useInstructorAssignments } from "@/hooks/useInstructorAssignments";
import { fakeAssignmentsTeacher as data } from "@/constants/general";
import { FilterX, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function InstructorAssignments() {
  const {
    search,
    setSearch,
    status,
    setStatus,
    filtered,
    selectedStudent,
    setSelectedStudent,
  } = useInstructorAssignments(data);
  const { t } = useTranslation()
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h3 className="text-2xl font-bold mb-10"> {t("assignments.layouts.teacherLayout")} </h3>
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
              <StudentCard
                key={item.id}
                item={item}
                onClick={() => setSelectedStudent(item)}
              />
            ))}
          </div>
        </div>
        <div>
          <SubmissionPanel student={selectedStudent} />
        </div>
      </section>
    </div>
  );
}

function SubmissionPanel({ student }: any) {
  if (!student) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          Select a student to view submission
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <h2 className="font-semibold">{student.student}</h2>
        <p className="text-sm text-muted-foreground">{student.title}</p>
        <Input placeholder="Grade (0-100)" />
        <textarea
          className="w-full border rounded p-2 text-sm"
          placeholder="Feedback..."
        />
        <Button className="w-full">Submit Grade</Button>
      </CardContent>
    </Card>
  );
}

function StudentCard({ item, onClick }: any) {
  return (
    <Card onClick={onClick} className="cursor-pointer hover:shadow-md transition">
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{item.student}</h3>
          <p className="text-sm text-muted-foreground">{item.title}</p>
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${item.status === "Graded"
            ? "bg-green-100 text-green-700"
            : item.status === "Submitted"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
            }`}
        >
          {item.status}
        </span>
      </CardContent>
    </Card>
  );
}
function Header({ search, setSearch, status, setStatus }: any) {
  return (
    <div className="flex gap-3 items-center">
      <Input
        placeholder="Search student or assignment"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select onValueChange={(val) => setStatus(val)}>
        <div className="flex items-center gap-2">
          <SelectTrigger >
            Filter
            <FilterX />
          </SelectTrigger>
          {status !== "all" && <h5 onClick={() => setStatus("all")}>
            <Button variant="outline">
              Clear Filters
            </Button>
          </h5>}
        </div>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="submitted">Submitted</SelectItem>
          <SelectItem value="graded">Graded</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}