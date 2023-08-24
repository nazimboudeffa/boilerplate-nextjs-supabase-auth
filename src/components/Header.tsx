'use client'
import Link from "next/link"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Session } from '@supabase/auth-helpers-nextjs'
import { useRouter } from "next/navigation";

function Header ( { session }: { session: Session | null } ) {
    
    const router = useRouter()

    console.log(session)

    const [open, setOpen] = useState<boolean>(false);

    const supabase = createClientComponentClient();

    async function handleSignOut() {
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        // eslint-disable-next-line no-console
        console.error('ERROR:', error);
      }

      router.push('/')
    }

    return (
        <header>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
                <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                </a>
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/about"
                    >
                        About
                    </Link>
                    </li>

                    <li>
                    <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                    >
                        Services
                    </Link>
                    </li>

                    <li>
                    <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                    >
                        Pricing
                    </Link>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                {session ? (
                    <div className="flex items-center gap-4">
                        <button onClick={handleSignOut} className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                            Logout
                        </button>
                    </div>
                    ) : (
                <div className="sm:flex sm:gap-4">
                <Link href="/auth/sign-in" className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Login
                </Link>
                <Link href="/auth/sign-up" className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Register
                </Link>
                </div>
                )}
                <div className="block md:hidden">
                <button type="button" className="p-2 lg:hidden" onClick={()=>setOpen(!open)}>
                    { open ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                  
                    :
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>                 
                    }
                </button>
                </div>  
            </div>
            </div>
        </div>
        <MobileMenu open={open} />
        </header>
    )
}

export default Header