import Dashboard from "@/components/pages/account/teacher/Dashboard";

import WrapperBody from "@/components/WrapperBody";
import { getSignInUser } from "@/helpers/getSignInUser";
import { getTeacherCourses } from "@/helpers/getTeacherCourses";
const page = async () => {
  const user = await getSignInUser();
  const teacherCourses = await getTeacherCourses();
  return (
    <WrapperBody>
      <Dashboard />
    </WrapperBody>
  );
};

export default page;
