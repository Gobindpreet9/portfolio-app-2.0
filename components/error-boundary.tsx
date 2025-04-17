'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <button
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}