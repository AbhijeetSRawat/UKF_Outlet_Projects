import React from 'react'

export default function Container({ className, children }) {
    return (
        <div className={`lg:w-[1250px] w-full mx-auto ${className}`}>{children}</div>
    )
}
