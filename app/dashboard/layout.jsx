import React from 'react'

function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

export default DashboardLayout