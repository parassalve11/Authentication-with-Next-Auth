import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { BookA } from 'lucide-react'
import AuthButton from './AuthButtons'

export default function Navbar() {
  return (
    <div className='fixed top-0 bg-zinc-200 py-2 border-b border-s-zinc-200 w-full z-10 '>
       <div className='container flex items-center justify-between'>
        <Link className='flex gap-2'  href={'/'}><BookA className='text-3xl ' /> Next-Auth</Link>
        <AuthButton />
       </div>
    </div>
  )
}
