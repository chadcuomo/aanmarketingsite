import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    gray: 'block w-full rounded-md border border-transparent bg-aanred px-5 py-3 text-base font-medium text-white shadow hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-aanred sm:px-10 sm:w-auto',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    red: 'bg-gray-200 text-gray-800 hover:bg-gray-100 active:bg-gray-200 active:text-gray-900',
  },
  outline: {
    // gray: 'rounded-md border-gray-700 text-gray-200 px-5 py-2 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 sm:px-6',
    gray: 'block w-full rounded-mdborder-gray-700 px-5 py-3 text-base font-medium text-gray-200 shadow hover:border-gray-400 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400 active:bg-gray-100 active:text-gray-700/80 sm:px-10 sm:w-auto'
  },
}

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'gray', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
