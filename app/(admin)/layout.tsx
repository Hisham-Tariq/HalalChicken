import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Sidebar from './components/sidebar'
import { ScrollArea } from '@/components/ui/scroll-area'
import TeamSwitcher from './admin/dashboard/components/team-switcher'
import { MainNav } from './admin/dashboard/components/main-nav'
import { Search } from './admin/dashboard/components/search'
import { UserNav } from './admin/dashboard/components/user-nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Halal Chicken Admin',
    description: 'Halal Chicken Admin Dashboard',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
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
                        {children}
                    </ScrollArea>
                </div>

            </body>
        </html>
    )
}
