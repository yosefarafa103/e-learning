"use client"
import React from 'react'
import Heading from './Heading'
import { useTranslation } from 'react-i18next'
import { Separator } from '../ui/separator'

const TranslatedHeading = ({ title }: { title: string }) => {
    const { t } = useTranslation()
    return (
        <>
            <Heading title={`${t(title)}`} />
            <Separator className="my-4" />
        </>
    )
}

export default TranslatedHeading