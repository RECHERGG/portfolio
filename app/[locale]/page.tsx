'use client';

import LanguageSwitcher from '@/components/language-switcher';
import {useTranslations} from 'next-intl';

export default function HomePage() {
    const t = useTranslations();

    return (
        <div>
            <LanguageSwitcher />

            <h1>{t('title')}</h1>
            <p>{t('subTitle')}</p>
        </div>
    );
}