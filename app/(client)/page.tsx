import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from "@/components/ui/button";
import { Combobox } from '@/components/ui/combobox';
import { ComboboxReactHookForm } from '@/components/combobox-form';

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },{
    value: "angular",
    label: "Angular",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center gap-2 p-24">
        <h1>Halal Chicken</h1>
      {/*<Button>Default</Button>*/}
      {/*<Button > Secondary</Button>*/}
      {/*<Button variant={'destructive'}> Destructive</Button>*/}
      {/*<Link href={'/'} className={buttonVariants({ variant: "outline" })}>Click here</Link>*/}
      {/*<Button asChild>*/}
      {/*  <Link href="/login">Login</Link>*/}
      {/*</Button>*/}
      {/*<Combobox options={frameworks} defaultLabel='Select framework' buttonVariant='outline' searchLabel='Search Framworks'/>*/}
      {/*<ComboboxReactHookForm/>*/}
    </main>
  )
}
