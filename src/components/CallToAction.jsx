import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto mt-16 max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Improve your <span className="text-aanred">marketing</span> strategy today!
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Signing up is easy. Select one of the plans below to start connecting with brand ambassadors, and see just how easy it is to improve your customer interactions.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              {/* <PlayIcon className="h-6 w-6 flex-none" /> */}
              <span className="">Start now</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
