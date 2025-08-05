import { signOutUser } from '@/helpers/signout'
import React from 'react'
import { Button } from '../ui/button'

const LogoutButton = () => {


    return (
        <form action={signOutUser}>
            <Button type='submit'
                className='w-full bg-red-600 hover:bg-red-700 text-white'
            >
                Logout
            </Button>
        </form>

    )
}

export default LogoutButton
