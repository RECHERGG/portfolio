'use client';

import { useTranslations } from "next-intl";

export default function ImprintPage() {
    const t = useTranslations("imprint");

    return (
        <div className="w-full max-w-3xl p-6 mx-auto">
            <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>

            <section className="space-y-2 text-base">
                <p><strong>{t("name")}</strong></p>
                <p>{t("emailLabel")}:{" "}
                    <a
                        className="text-blue-500 hover:underline"
                        href="mailto:contact@jtobaben.me"
                    >
                        contact@jtobaben.me
                    </a>
                </p>
            </section>

            <hr className="my-6" />

            <section className="text-sm text-gray-600 space-y-3">
                <p>{t("disclaimer")}</p>
                <p>{t("additionalInfo")}</p>
            </section>
        </div>
    );
}