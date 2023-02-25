import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I contact support?',
      answer:
        'Email riz@tryaan.com',
    },
  ],
  [
    {
      question: 'Is this free?',
      answer:
        'AAN is 100% free for Ambassadors. For Businesses and Brands, we will have plans that will fit the needs of most',
    },
  ],
  [
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="bg-neutral-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-6xl font-bold tracking-tight text-white"
          >
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-aanred"
            >
              contact us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex} className="bg-white h-60 w-100 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold leading-6 text-gray-700">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
