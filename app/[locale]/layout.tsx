import { Metadata } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { locales } from "@/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/site";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    //metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    keywords: ["portfolio", "Developer", "Java", "Backend", "tobaben", "joel", "rechergg"],
    authors: [
        {
            name: "RECHERGG",
            url: "https://jtobaben.me",
        },
    ],
    creator: "RECHERGG",

};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocalLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    let messages;
    try {
        messages = await getMessages({ locale });
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} antialiased [--header-height:calc(var(--spacing)*14)]`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextIntlClientProvider messages={messages} locale={locale}>
                        <div className="bg-background relative z-10 flex min-h-svh flex-col">
                            <SiteHeader />
                            <main className="flex flex-1 flex-col">{children}</main>
                        </div>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}