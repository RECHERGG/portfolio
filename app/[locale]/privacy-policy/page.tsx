'use client';

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations("privacy-policy");

    return (
        <div className="w-full max-w-3xl p-6 mx-auto">
            <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>

            <section className="space-y-6 text-base leading-relaxed">
                <p>{t("intro")}</p>

                <div>
                    <h2 className="font-semibold text-xl mt-6">{t("responsible.title")}</h2>
                    <p>Joel Tobaben</p>
                    <p>
                        {t("responsible.emailLabel")}:{" "}
                        <a
                            className="text-blue-500 hover:underline"
                            href="mailto:contact@jtobaben.me"
                        >
                            contact@jtobaben.me
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mt-6">{t("dataAccess.title")}</h2>
                    <p>{t("dataAccess.text")}</p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mt-6">{t("contact.title")}</h2>
                    <p>{t("contact.text")}</p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mt-6">{t("analytics.title")}</h2>
                    <p>{t("analytics.text")}</p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mt-6">{t("hosting.title")}</h2>
                    <p>{t("hosting.text")}</p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mt-6">{t("rights.title")}</h2>
                    <p>{t("rights.text")}</p>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mt-6">{t("legalBasis.title")}</h2>
                    <p>{t("legalBasis.text")}</p>
                </div>

                <p className="text-sm text-gray-500 mt-10">{t("lastUpdated")}</p>
            </section>
        </div>
    )
}