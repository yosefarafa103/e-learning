import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { IGroup } from "@/types/groups";
import Loader from "../Loader";
type Props = Pick<IGroup, "students"> & { isLoading: boolean };
const GroupSearch = ({ students, isLoading }: Props) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      students?.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );
  console.log(filtered);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex items-center gap-2 mb-4 bg-background border-primary backdrop-blur-md p-3 rounded-xl shadow-sm ">
            <Search className="text-indigo-500" />
            <Input
              placeholder="ابحث عن طالب..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border-none focus-visible:ring-0 text-right"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered?.map((student) => (
              <motion.div
                key={student._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-primary-foreground bg-background rounded-2xl overflow-hidden">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <img
                      src={student.imgProfile}
                      alt={student.name}
                      className="w-20 h-20 rounded-full object-cover mb-3 shadow-md"
                    />
                    <h3 className="text-lg font-semibold text-primary">
                      {student.name}
                    </h3>
                    <p className="text-muted text-sm">{student.email}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {filtered?.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-10 text-primary"
            >
              <Users className="mx-auto mb-2 opacity-50" size={36} />
              لا يوجد طلاب مطابقين للبحث
            </motion.div>
          )}
        </>
      )}
    </>
  );
};

export default GroupSearch;
