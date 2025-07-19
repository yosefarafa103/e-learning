"use client"
import WrapperBody from "@/components/WrapperBody"
import { getCourseCheckoutSession } from "@/utils/geCoursetCheckoutSession";
import { useQuery } from "@tanstack/react-query";

const page = async () => {
    // useQuery({
    //     queryKey: [`${}`]
    // })
    return (
        <WrapperBody>
            {/* {session.payment_status === "paid" && "Paid Successful!"} */}
        </WrapperBody>
    )
}

export default page