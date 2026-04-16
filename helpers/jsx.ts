
import { Assignment, AssignmentStatus } from "@/types/dashboard";
type status = Exclude<AssignmentStatus, "all">
interface DomUtilsAttrs {
    getStatusColor: (status: status) => string
}
class DomUtils implements DomUtilsAttrs {
    getStatusColor(status: status) {
        switch (status) {
            case "completed":
                return "text-green-600 bg-green-100";
            case "in_progress":
                return "text-blue-600 bg-blue-100";
            case "pending":
                return "text-yellow-600 bg-yellow-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    }
}
export { DomUtils }