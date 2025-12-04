import { Metadata } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { locales } from "@/i18n";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/config";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: ["portfolio", "developer", "java", "backend", "tobaben", "joel", "rechergg"],
    authors: [
        {
            name: "RECHERGG",
            url: "https://tobaben.dev",
        },
    ],
    creator: "RECHERGG",
    openGraph: {
        type: "website",
        locale: "de_DE",
        alternateLocale: "en_US",
        url: process.env.NEXT_PUBLIC_APP_URL!,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@rechergg",
        images: [`${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`],
    }
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
    } catch {
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
                        <div className="min-h-screen flex flex-col">
                            <SiteHeader />

                            <div className="container mx-auto px-4 min-h-screen flex flex-col md:max-w-[53%]">
                                <main className="flex-1 flex">{children}</main>
                            </div>

                            <div className="flex items-center justify-center">
                                <SiteFooter />
                            </div>
                        </div>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}