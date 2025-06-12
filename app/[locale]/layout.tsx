import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

export const metadata: Metadata = {
    title: "jtobaben.me",
    description: "My personal portfolio website",
};

const inter = Inter({ subsets: ['latin'] });

export default async function LocalLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string }
}) {

    let messages;
    try {
        messages = await getMessages({ locale });
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body className={`${inter.className} antialiased`}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}