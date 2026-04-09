"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const LoginButton = () => {
    const { t } = useTranslation()
    return (
        <Button variant={"secondary"}>
            <Link href="/login">{t('login')}</Link>
        </Button>
    )
}

export default LoginButton
