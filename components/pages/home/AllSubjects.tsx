"use client";
import GridWrapper from "@/components/atoms/GridWrapper";
import Heading from "@/components/atoms/Heading";
import SubjectCard from "@/components/atoms/SubjectCard";
import { Separator } from "@/components/ui/separator";
import { fakeSubjects } from "@/constants/general";
import getSubjects from "@/helpers/getSubjects";
import { ISubject } from "@/models/subjects.model";
import { useQuery } from "@tanstack/react-query";
import { t } from "i18next";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AllSubjects = () => {
  const { data, } = useQuery<ISubject[]>({
    queryFn: getSubjects,
    queryKey: ["subjects"],
    staleTime: 60_000,
  });
  const searchParams = useSearchParams();
  const [filterSubjects, setFilterSubjects] = useState<ISubject[] | []>(data!);
  useEffect(() => {
    setFilterSubjects(
      data!?.filter((el) =>
        el.title.match(new RegExp(`${searchParams.get("subject") || ""}`))
      )
    );
  }, [searchParams.get("subject.title"), data]);
  return (
    <>
      <Heading title={t("subjects.title")} />
      <Separator />
      <GridWrapper>
        {fakeSubjects?.map((item) => <SubjectCard {...item} />)}
      </GridWrapper>
    </>
  );
};

export default AllSubjects;
