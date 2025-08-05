import { Button } from '../ui/button';
import Link from 'next/link';
import img from "@/app/_assets/emmanuel-serratrice-black-guy-disney-03.jpg"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { getSignInUser } from '@/helpers/getSignInUser';
import LogoutButton from './LogoutButton';
const AuthAreaHeader = async () => {
    const user = await getSignInUser();
    return (
        <>
            {!user ?
                <Button variant={"secondary"} >
                    <Link href="/login">
                        Login
                    </Link>
                </Button>
                :
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className='min-w-12 min-h-12 ' title={user?.name}>
                            <AvatarImage src={img.src!} />
                            <AvatarFallback> {user?.name} </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='mt-5 space-y-2' align='start'>
                        <DropdownMenuItem asChild>
                            <Link href={`/account`}>
                                ملفي الشخصي
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <LogoutButton />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        </>
    )
}

export default AuthAreaHeader