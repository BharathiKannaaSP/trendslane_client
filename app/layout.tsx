import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { getUserCountryAndLanguage } from '@/lib/cookies/getUserCountryAndLanguage'
import { LocationProvider } from '@/components/providers/LocationProvider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Trendslane',
	description:
		'Trendslane is your go-to online marketplace in India, offering a wide range of products across multiple categories with seamless shopping, tracking, and customer support.'
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const { country, language } = await getUserCountryAndLanguage()
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<LocationProvider country={country} language={language}>
						<main className='w-full'>
							<Navbar />
						</main>
						<div className='px-4'>{children}</div>
					</LocationProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
