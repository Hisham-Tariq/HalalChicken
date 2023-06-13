import { IconName } from '@/components/icons'
interface SidebarNavigationItem {
    title: string;
    path: string;
    icon: IconName;
}

export const sidebarNavigationItems: SidebarNavigationItem[] = [
    {
        title: 'Dashboard',
        path: '/admin/dashboard',
        icon: 'dashboard',
    },
    {
        title: 'FoodItems',
        path: '/admin/food-items',
        icon: 'foodItems',
    },
    {
        title: 'Orders',
        path: '/admin/orders',
        icon: 'order',
    },
    {
        title: 'Settings',
        path: '/admin/settings',
        icon: 'settings',
    },

]