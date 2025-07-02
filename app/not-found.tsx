import type { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Hengtong Trading",
};

export default function NotFound() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center max-w-lg">
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-primary">404</h1>
          
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page not found
          </h2>

          <p className="mt-6 text-lg leading-7 text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Go back home
            </Link>
            <Link
              href="/products"
              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}