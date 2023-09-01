import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Next13NProgress, Link } from 'nextjs13-progress';
import GitHubButton from '@/components/GitHubButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next.js 13 Progress Bar Demo',
	description: 'This demo app shows how to use nextjs13-progress with Next.js 13 app router.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<GitHubButton />
				<main className="min-h-screen flex flex-col">
					<header className="flex items-center gap-6 justify-center text-2xl text-white bg-slate-800 py-4">
						<Link href="/">Home</Link>
						<Link href="/page2">Page2</Link>
						<Link href="/slow-page">Slow Page</Link>
					</header>
					{children}
					<footer className="mt-auto py-4 flex items-center justify-center text-white bg-slate-800">
						<p className="text-sm">
							<span className="font-bold">&copy; {new Date().getFullYear()} </span> by{' '}
							<Link href="https://jay.designly.biz" target="_blank" className="underline">
								Jay Simons
							</Link>
						</p>
					</footer>
				</main>
				<Next13NProgress color="red" height={5} />
			</body>
		</html>
	);
}
