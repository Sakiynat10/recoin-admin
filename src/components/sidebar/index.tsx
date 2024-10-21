"use client";
import "./style.css"
import React from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import NavLink from '../navlink';

import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";


const Sidebar = () => {

  return (
    <Command className='bg-secondary rounded-none px-1'>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="max-h-[100vh]">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem className="py-0">
            <NavLink className="navlink" href="/">
            <LayoutDashboard className="z-50 mr-2 h-4 w-4" />
              Dashboard
            </NavLink>
          </CommandItem>
          <CommandItem className="py-0">
            <NavLink className="navlink" href="/posts" >
            <Newspaper className="z-50 mr-2 h-4 w-4" />
              Posts
            </NavLink>
          </CommandItem>
          <CommandItem className="py-0">
            <NavLink className="navlink" href="/categories">
              <Folders className="z-50 mr-2 h-4 w-4" />
              Categories
            </NavLink>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem className="py-0">
            <NavLink href="/profile"  className="navlink">
            <User className='z-50 mr-2 h-4 w-4'/>
              Profile
              <CommandShortcut className="z-50">⌘ P</CommandShortcut>
            </NavLink>
          </CommandItem>
          <CommandItem className="py-0">
            <NavLink href="/billing" className="navlink">
            <CreditCard className='z-50 mr-2 h-4 w-4'/>
              Billing
              <CommandShortcut className="z-50">⌘ B</CommandShortcut>
            </NavLink>
          </CommandItem>
          <CommandItem className="py-0">
            <NavLink href="/settings" className="navlink">
            <Settings className='z-50 mr-2 h-4 w-4'/>
              Settings
              <CommandShortcut className="z-50">⌘ S</CommandShortcut>
            </NavLink>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
