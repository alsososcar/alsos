import { Link } from "@tanstack/react-router";

import { ModeToggle } from "./theme/ModeToggle";

export default function Navigation() {
  return (
    <header className='border-border bg-background sticky top-0 z-50 flex h-14 items-center justify-between border-b px-6 backdrop-blur-sm'>
      <Link
        to='/'
        className='font-heading text-sm font-semibold tracking-widest uppercase'
      >
        Oscar Krokeide Alsos
      </Link>

      <div className='flex items-center gap-6'>
        <nav className='flex items-center gap-6'>
          <Link
            to='.'
            hash='prosjekter'
            className='text-muted-foreground hover:text-foreground text-xs font-semibold tracking-widest uppercase transition-colors'
          >
            Prosjekter
          </Link>
          <Link
            to='.'
            hash='kontakt'
            className='text-muted-foreground hover:text-foreground text-xs font-semibold tracking-widest uppercase transition-colors'
          >
            Kontakt
          </Link>
        </nav>
        <div className='flex items-center gap-2'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
