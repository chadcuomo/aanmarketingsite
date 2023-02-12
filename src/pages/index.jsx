import { useState } from 'react'
import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero2 } from '@/components/Hero2'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { PricingTemp } from '@/components/PricingTemp'
import ThankYouModal from '@/components/ThankYouModal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Head>
        <title>AAN - All Ambassador Network</title>
        <meta
          name="description"
          content="Discover how  brands are utilizing AAN’s creator marketplace to reach their target audience more effectively, maximize their revenue and increase their engagement online."
        />
      </Head>
      <Header />
      <main>
        <Hero2 />
        <Hero />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <PricingTemp setOpen={setModalOpen} />
        <Faqs />
      </main>
      <Footer />
      <ThankYouModal open={modalOpen} setOpen={setModalOpen} />
    </>
  )
}
