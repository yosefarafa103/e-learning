import React from 'react'
type Roles = "student" | "teacher" | "parent"
const layout = ({ student, teacher, parent, }: LayoutProps<"/assignment/[assignmentId]">) => {

    let role: Roles = "student"
    let currentRole = {
        teacher,
        parent,
        student
    }
    return (
        <>{currentRole[role]}</>
    )
}

export default layout