import { Button } from "@alsos/ui/components/button";
import { ArrowDownIcon } from "lucide-react";

export default function Header() {
  return (
    <section className='mx-auto w-full max-w-6xl px-6 py-24 sm:py-32'>
      <div className='grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_18rem]'>
        <div>
          <p className='text-muted-foreground font-mono text-xs tracking-widest uppercase'>
            IT Utvikler
          </p>
          <h1 className='font-heading mt-4 max-w-3xl text-3xl font-semibold tracking-wider uppercase sm:text-5xl'>
            Oscar Krokeide Alsos
          </h1>
          <p className='text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed'>
            Jeg er utdannet IT-utvikler med to års erfaring som lærling og
            bestått fagprøve. På denne siden presenterer jeg prosjekter innen
            webutvikling, API-integrasjoner, prosjekter med Safe Exam Browser,
            utvikling av egne databasesystemer og andre prosjekter jeg vil vise
            frem.
          </p>
          <div className='mt-10'>
            <Button render={<a href='/#prosjekter' />} nativeButton={false}>
              Se prosjekter
              <ArrowDownIcon data-icon='inline-end' />
            </Button>
          </div>
        </div>

        <div className='border-border bg-muted aspect-square w-full max-w-sm justify-self-center overflow-hidden rounded-none border md:max-w-none'>
          <img
            src='/meg.jpg'
            alt='Oscar Krokeide Alsos'
            className='size-full object-cover object-[center_15%]'
          />
        </div>
      </div>
    </section>
  );
}
