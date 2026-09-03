import { Button } from "@alsos/ui/components/button";
import { MailIcon } from "lucide-react";

export default function ContactCta() {
  return (
    <section id='kontakt' className='scroll-mt-20'>
      <div className='px-0 py-20'>
        <p className='text-muted-foreground font-mono text-xs tracking-widest uppercase'>
          Kontakt
        </p>
        <h2 className='font-heading mt-2 max-w-xl text-2xl font-semibold tracking-wider uppercase'>
          Ta kontakt
        </h2>
        <p className='text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed'>
          Lyst til å snakke om et prosjekt, arbeidsplass eller samarbeid? Send
          meg en e-post.
        </p>
        <div className='mt-8'>
          <Button render={<a href='mailto:oscar@alsos.dev' />}>
            <MailIcon data-icon='inline-start' />
            oscar@alsos.dev
          </Button>
        </div>
      </div>
    </section>
  );
}
