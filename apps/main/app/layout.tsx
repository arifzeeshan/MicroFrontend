import { PrefetchCrossZoneLinks } from '@acme/components/prefetch'
import { Layout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Layout path="solutions/microfrontends">{children}</Layout>
        <PrefetchCrossZoneLinks hrefs={['/docs', '/docs/about']} />
      </body>
    </html>
  )
}
