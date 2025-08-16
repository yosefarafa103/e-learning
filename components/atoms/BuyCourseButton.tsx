"use client"
import React from 'react'
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next'
import { useMutation, } from '@tanstack/react-query';
import axios from 'axios';
import Loader from './Loader';
interface Props {
    price: number | string;
    courseTitle: string;
    courseDescription: string;
    imgs: string[];
    courseId: string;
    variant?: string
    customerId: string
}
const BuyCourseButton = ({ courseDescription, courseTitle, price, imgs, courseId, variant = "blue", customerId }: Props) => {
    const handelBuyCourse = async (body: any) => {
        try {
            const session = await (await axios.post(`/api/checkout`, body)).data;
            console.log(session?.session);
            return session?.session
        } catch (err: any) {
            throw new Error(err)
        }
    }
    const { t } = useTranslation();
    const { mutate, data, isPending } = useMutation({
        mutationFn: handelBuyCourse
    })
    return (
        <Button disabled={isPending} onClick={() => mutate({ courseDescription, courseTitle, price, imgs, courseId, customerId }, {
            onSuccess(data) {
                location.assign(data,)
            },
            // @ts-ignore
        })} variant={"default"} className="fixed bottom-5 left-5 p-8"> {!isPending ? `${t("bookCourse")} ${price}$` : <>
            <Loader />
        </>} </Button>
    )
}

export default BuyCourseButton