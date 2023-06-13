import React from 'react'
import * as icons from 'lucide-react';

interface LucideGenericIconProps {
    name: string;
    color?: string;
    size?: number;
}

const LucideGenericIcon = ({ name, color, size }: LucideGenericIconProps) => {
    // @ts-ignore
    const LucideIcon = icons[name];
    return (
        <LucideIcon color={color} size={size} />
    )
}

export {
    LucideGenericIcon
}