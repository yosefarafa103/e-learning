import { IGroup } from "@/types/groups";
import { Schema, model, models } from "mongoose";

const groupSchema = new Schema<IGroup>(
  {
    name: {
      type: String,
      required: [true, "Group name is required"],
    },
    description: {
      type: String,
    },
    teacher: {
      type: String,
      ref: "User",
      required: [true, "Teacher ID is required"],
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // References to student users
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Group = models.Group || model<IGroup>("Group", groupSchema);

export default Group;
