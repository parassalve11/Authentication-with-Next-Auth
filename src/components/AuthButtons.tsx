'use client'

import { Button, buttonVariants } from "./ui/button"; 
import { signIn, useSession } from "next-auth/react"
import Link from "next/link";
import UserButton from "./UserInterface";

export default function AuthButton() {
const {data: session} = useSession();

  return (
    <div className="flex items-center   sm:gap-x-16  lg:gap-x-28  gap-x-5 capitalize font-semibold">
        {session && session.user? (
        <>
       <UserButton />
        </>
        ):(
            <>
            <Button onClick={() => signIn()}>Sign In</Button>
            <Link className={buttonVariants()} href={'/auth/signup'}>Sign Up</Link>
            </>
        )
    }
    </div>
  )
}
