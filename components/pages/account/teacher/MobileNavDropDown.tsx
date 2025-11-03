import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import langugeStore from "@/_stores/langugeStore";

export function MobileNavDropdown({
  activeTab,
  setActiveTab,
}: {
  activeTab: "courses" | "charge" | "group" | "settings";
  setActiveTab: Dispatch<
    SetStateAction<"courses" | "charge" | "group" | "settings">
  >;
}) {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align={langugeStore().currentLanguge === "en" ? "end" : "start"}
          className="w-44"
        >
          <DropdownMenuItem
            onClick={() => setActiveTab("courses")}
            className={
              activeTab === "courses"
                ? "bg-blue-500 font-semibold text-primary"
                : ""
            }
          >
            My Courses
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setActiveTab("charge")}
            className={
              activeTab === "charge" ? "bg-blue-500 font-semibold" : ""
            }
          >
            My Charge
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setActiveTab("group")}
            className={activeTab === "group" ? "bg-blue-500 font-semibold" : ""}
          >
            Groups
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => setActiveTab("settings")}
            className={
              activeTab === "settings" ? "bg-blue-500 font-semibold" : ""
            }
          >
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
