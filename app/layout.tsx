import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Changelog Generator — Auto-generate human-readable migration changelogs',
  description: 'Analyze database migrations and generate user-friendly changelogs explaining what changed and why it matters. Built for engineering teams at B2B SaaS companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ba7752bf-74ce-4a79-8a2b-4b33685bb358"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
