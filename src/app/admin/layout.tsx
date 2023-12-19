export const metadata = {
  title: 'H & S Energy',
  description: 'hnsenergyproducts.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
