'use client'
import { Lock, LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { signOut, useSession } from "next-auth/react";
import SignOutButton from "./SignOutButton";



export default  function UserButton() {
    const{data:session} = useSession();
  return (
   <div className="px-10 flex items-center gap-2">
     <DropdownMenu >
        
        <DropdownMenuTrigger className="relative " asChild>
            
          <Button size="icon" className="flex-none rounded-full">
            <Image
              src={session?.user?.image || "/logo.png"}
              alt="User profile picture"
              width={50}
              height={50}
              priority
              className="aspect-square rounded-full bg-background object-cover"
            />
           
          </Button>
          
        </DropdownMenuTrigger>
       
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{session?.user?.name || "User"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            {/* TODO: Show this only for admins */}
  
           
  
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          
          
          <SignOutButton />
           
          
        </DropdownMenuContent>
      </DropdownMenu>
   </div>
  );
}
