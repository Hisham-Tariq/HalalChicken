import React from 'react'

type FirestoreProviderProps = {
    children: React.ReactNode
}

export const FirestoreProvider = (props: FirestoreProviderProps) => {
    const { children } = props;
    return (
        <>
            {children}
        </>
    )
}
