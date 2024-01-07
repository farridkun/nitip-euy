import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import { ThemeToggler } from './ThemeToggler'

function Header() {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="px-5">
            <Image
                src="https://i.postimg.cc/xCrQCGGT/logo.png" alt="Nitip Euy"
                width={100}
                height={100}
            />
        </Link>

        <div className="px-5 flex space-x-2 items-center">
            <ThemeToggler />

            <UserButton afterSignOutUrl="/" />

            <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" mode="modal" />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header