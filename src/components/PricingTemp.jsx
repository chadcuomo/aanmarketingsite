import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

import {subscribe} from '../pages/api/subscribe'

const plans = [
  {
    name: 'Small Business',
    featured: false,
    price: { Monthly: '$10', Annually: '$100' },
    description:
      'You’re new to investing but want to do it right. Get started for free.',
    button: {
      label: 'Get started for free',
      href: '/register',
    },
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
    ],
    logomarkClassName: 'fill-gray-300',
  },
  {
    name: 'Big Brand',
    featured: false,
    price: { Monthly: '$250', Annually: '$2500' },
    description:
      'You’ve been investing for a while. Invest more and grow your wealth faster.',
    button: {
      label: 'Subscribe',
      href: '/register',
    },
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5',
    ],
    logomarkClassName: 'fill-gray-500',
  },
  {
    name: 'Managed Service',
    featured: true,
    price: { Monthly: 'Contact for pricing', Annually: 'Contact for pricing' },
    description:
      `We get it, you're busy, so let us do all the work and handle your Ambassador program for you `,
    button: {
      label: 'Subscribe',
      href: '/register',
    },
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5',
      'Feature 6',
    ],
    logomarkClassName: 'fill-white',
  },
]

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  featured = false,
  activePeriod,
  logomarkClassName,
}) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-aanred lg:order-none' : 'bg-white'
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-700'
        )}
      >
        <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'relative mt-5 flex text-3xl tracking-tight',
          featured ? 'text-white' : 'text-gray-700'
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 select-none opacity-0'
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute left-0 top-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 select-none opacity-0'
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-white' : 'text-gray-700'
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-white text-white'
              : 'divide-gray-200 text-gray-700'
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-aanred'
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'white' : 'gray'}
        className="mt-6"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function PricingTemp({ setOpen }) {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  const [emailInput, setEmailInput] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!emailInput) {
      return toast({
        description: 'Email is required',
        status: 'error'
      });
    }
    
    setButtonLoading(true);
    try {
       const res = await fetch('../api/subscribe', { method: 'POST', body: JSON.stringify({ email: emailInput }) });
       const data = await res.json();

       setOpen(true)

       if (data.success) {
        alert('it works')
       } else {
          throw new Error(data?.error || 'Something went wrong, please try again later');
       }

    } catch(e) {
       console.log('error')
    }

    setEmailInput('');    
    setButtonLoading(false);
};

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-neutral-900 py-20 sm:py-48"
    >
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="pricing-title"
            className="text-6xl font-bold tracking-tight text-white"
          >
            Getting started is <span className="text-aanred">easy</span>.
          </h2>
          <p className="mt-10 text-lg text-gray-300">
            Whether you’re small businees trying to find your audience or a large brand trying
            to increase your reach and engagement, we’ve got a personalized plan for you
          </p>
        </div>
        <p className="mt-10 text-sm text-gray-300 text-center">
          Sign up for early access!
        </p>
        <form onSubmit={handleFormSubmit} className="mt-2 sm:mx-auto sm:flex sm:max-w-2xl">
        
          <div className="min-w-0 flex-1">
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-aanred"
              placeholder="Enter your email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full rounded-md border border-transparent bg-aanred px-5 py-3 text-base font-medium text-white shadow hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-aanred sm:px-10"
            >
              Get started
            </button>
          </div>
        </form>
      </Container>
    </section>
  )
}
