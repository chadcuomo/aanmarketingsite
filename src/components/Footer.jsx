import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { LogoFull } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-neutral-900">
      <Container>
        <div className='flex flex-wrap justify-center w-full'>
          <div className="w-full flex flex-col items-center justify-center gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div className="flex items-center justify-center text-gray-900 text-center">
                <LogoFull className="h-10 w-10 flex-none fill-cyan-500" />
              </div>
              <nav className="mt-11 flex gap-8">
                <NavLinks />
              </nav>
            </div>
          </div>
          <div className="flex flex-col items-center pt-2 pb-12 md:flex-row-reverse md:justify-between md:pt-2">
            {/* <form className="flex w-full justify-center md:w-auto">
              <TextField
                type="email"
                aria-label="Email address"
                placeholder="Email address"
                autoComplete="email"
                required
                className="w-60 min-w-0 shrink"
              />
              <Button type="submit" className="ml-4 flex-none">
                <span className="hidden lg:inline">Join our newsletter</span>
                <span className="lg:hidden">Join newsletter</span>
              </Button>
            </form> */}
            <p className="mt-6 text-sm text-gray-400 md:mt-0">
              &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
        
      </Container>
    </footer>
  )
}
