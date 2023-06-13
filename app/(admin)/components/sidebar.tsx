'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { sidebarNavigationItems } from '@/constants/sidebar-data'
import { Button } from '@/components/ui/button'
import { Icons, GenericIcon } from '@/components/icons'
import { LucideGenericIcon } from '@/components/lucide-generic-icon'

const Sidebar = () => {
    const [path, setPath] = useState(usePathname())

    const changePath = (itemPath: string) => {
        if (path !== itemPath) {
            setPath(itemPath)
        }
    }

    return (
        <aside className="dark w-80 max-h-screen overflow-hidden bg-background text-foreground">
            <div className="p-4">
                <Image src={'/logo.webp'} alt='Halal Chicken Logo' className='object-contain' width={200} height={50} />
            </div>
            <nav className="mt-4">
                <ul className="space-y-2">
                    {
                        sidebarNavigationItems.map((item, index) => (
                            <li key={index} className='px-4'>
                                <Button className='w-full' asChild variant={path === item.path ? 'default' : 'ghost'} onClick={() => changePath(item.path)}>
                                    <Link href={item.path} className='flex !justify-start gap-4'>
                                        <GenericIcon name={item.icon} />
                                        {item.title}
                                    </Link>
                                </Button>

                            </li>
                        ))
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar