import { MailIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@alsos/ui/components/button";

function ContactCta() {
  return (
    <section id="kontakt" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Kontakt
        </p>
        <h2 className="mt-2 max-w-xl font-heading text-2xl font-semibold tracking-wider uppercase">
          Ta kontakt
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Lyst til å snakke om et prosjekt, lærlingplass eller samarbeid? Send
          meg en e-post.
        </p>
        <div className="mt-8">
          <Button render={<Link href="mailto:oscar@alsos.no" />}>
            <MailIcon data-icon="inline-start" />
            oscar@alsos.no
          </Button>
        </div>
      </div>
    </section>
  );
}

export { ContactCta };
