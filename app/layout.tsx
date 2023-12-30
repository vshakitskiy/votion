import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Votion",
    description: "The connected workspace where better faster work happens.",
    // TODO: change logos
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/logo.svg",
                href: "/logo.svg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/logo-dark.svg",
                href: "/logo-dark.svg",
            }
        ]
    }
}

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} dark:bg-[#1F1F1F]`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                    storageKey="votion-theme"
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout