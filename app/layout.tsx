import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'John Doe',
	description: 'Minimalism Resume',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="antialiased ">{children}</body>
		</html>
	)
}
