'use client';

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations("privacy-policy");

    const deleteAllCookies = () => {
        document.cookie.split(";").forEach((cookie) => {
            const name = cookie.split("=")[0].trim();
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
        });

        localStorage.clear();
        sessionStorage.clear();
    };

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
                            href="mailto:contact@tobaben.dev"
                        >
                            contact@tobaben.dev
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
                    <Button
                        onClick={() => {
                            deleteAllCookies();
                            setTimeout(() => {
                                window.location.reload();
                            }, 100);
                        }}
                    >
                        Reject
                    </Button>
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