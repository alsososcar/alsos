"use client";

import { setUserLocale } from "@/i18n/action";
import { Button } from "@alsos/ui/components/button";
import { getNextLocale } from "@alsos/utils/locales";
import { useExtracted, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function LocaleSwitcher() {
  const t = useExtracted();
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const nextLocale = getNextLocale(locale);

  function onToggle() {
    startTransition(async () => {
      await setUserLocale(nextLocale);
      router.refresh();
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      disabled={isPending}
      onClick={onToggle}
      aria-label={t("Switch language")}
      title={nextLocale.toUpperCase()}
    >
      <span className="text-xs font-semibold uppercase">
        {locale.toUpperCase()}
      </span>
    </Button>
  );
}
