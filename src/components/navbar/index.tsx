import Link  from 'next/link'
import Image from "next/image"
import React from 'react'
import { Avatar } from '@/components/ui/avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logo from "../../img/logo.svg"
import ThemeToggler from '../ui/theme-toggler'

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
        <Link href="/">
            <Image src={Logo} alt="RecoinLogo" height={40} width={40} />
        </Link>
        <div className="flex justify-center">
          <ThemeToggler/>
          <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback className='text-black'>BT</AvatarFallback>
          </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/auth"} >Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
    </div>
  )
}

export default Navbar