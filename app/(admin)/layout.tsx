import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import TeamSwitcher from './admin/dashboard/components/team-switcher'
import { MainNav } from './admin/dashboard/components/main-nav'
import { Search } from './admin/dashboard/components/search'
import { UserNav } from './admin/dashboard/components/user-nav'
import { FirestoreProvider } from './providers/firebase-provider'
import { Toaster } from "@/components/ui/toaster"
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Halal Chicken Admin',
    description: 'Halal Chicken Admin Dashboard',
}

type RootLayoutProps = {
    children: React.ReactNode
}


export default function RootLayout(props: RootLayoutProps) {
    const children = props.children;
    return (
        <html lang="en">
        <body className={`flex ${inter.className}`}>
        <Sidebar />
        <div className='w-full h-screen max-h-screen flex flex-col'>
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <TeamSwitcher />
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        <UserNav />
                    </div>
                </div>
            </div>
            <ScrollArea className='flex-1 w-full flex flex-col'>
                <FirestoreProvider>
                    {children}
                </FirestoreProvider>

            </ScrollArea>
        </div>
        <Toaster />
        </body>
        </html>
    )
}
