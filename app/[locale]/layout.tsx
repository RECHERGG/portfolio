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
//import { CookieConsentWrapper } from "@/components/cookie-consent-wrapper";
import { initBklit } from "@bklit/sdk";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteConfig.seoName,
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
        title: siteConfig.seoName,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: `opengraph-image.png`,
                width: 1200,
                height: 630,
                alt: siteConfig.seoName,
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.seoName,
        description: siteConfig.description,
        creator: "@rechergg",
        site: "@rechergg",
        images: [
            {
                url: `twitter-image.png`,
                width: 1200,
                height: 630,
                alt: siteConfig.seoName,
            }
        ],
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
    initBklit({
        projectId: process.env.PROJECT_ID as string,
        apiKey: process.env.NEXT_PUBLIC_BKLIT_API_KEY as string,
        debug: process.env.NODE_ENV === "development",
    });

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
            <body className={`${inter.className} antialiased [--header-height:calc(var(--spacing)*10)]`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextIntlClientProvider messages={messages} locale={locale}>
                        <div className="min-h-screen flex flex-col">
                            <SiteHeader />

                            <div className="pt-[var(--header-height)]">
                                <div className="container mx-auto px-4 min-h-screen flex flex-col max-w-4xl">
                                    <main className="flex-1 flex">{children}</main>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <SiteFooter />
                            </div>
                        </div>

                        {/*<CookieConsentWrapper />*/}
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}