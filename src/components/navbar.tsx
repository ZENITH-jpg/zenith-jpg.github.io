"use client"
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import React from "react";
import {usePathname} from "next/navigation";
function GetPathname(){
  return usePathname();
}
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <NextUINavbar maxWidth="xl" position="sticky">
            <NavbarContent className="sm:basis-full" justify="start">
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href} isActive={item.href === GetPathname()}>
                            <NextLink
                                className={clsx(
                                    linkStyles({ color: (item.href === GetPathname())? "secondary" :"foreground", size:"lg", }),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="hidden sm:flex gap-2">
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
};