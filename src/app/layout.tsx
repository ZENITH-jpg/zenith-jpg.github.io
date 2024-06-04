import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "./assets/icon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head />
        <body
            className={clsx(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <Providers themeProps={{children:"", attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col dark:bg-gradient-to-t dark:from-gray-800 dark:via-gray-900 dark:to-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400" >
                <Navbar />
                <main className="container mx-auto max-w-7xl px-6 flex-grow">
                    {children}
                </main>
                <footer className="w-full flex items-center justify-center py-3">
                    <Link
                        isExternal
                        className="flex items-center gap-1 text-current"
                        href="https://drive.google.com/file/d/1KWoYhr2wS2frbbj5ZP8HH68vmlgXfp-Y/view?usp=sharing"
                        title="png.jpeg.webp.ico.svg"
                    >
                        <span className="text-default-600">Powered by </span>
                        <p className="text-primary">Emotional Support</p>
                    </Link>
                </footer>
            </div>
        </Providers>
        </body>
        </html>
    );
}