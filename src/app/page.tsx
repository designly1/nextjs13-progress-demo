import Spotify from '@/components/Spotify';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home',
	description: 'This is the home page.',
};

export const dynamic = 'force-dynamic';

export default function Home() {
	return (
		<div className="flex flex-col items-center gap-6 mx-auto py-20 max-w-4xl">
			<h1 className="font-bold text-6xl">Next.js 13</h1>
			<h2 className="font-bold text-4xl">Progress Bar Demo</h2>
			<p className="text-2xl text-center">
				This demo app shows how to use nextjs13-progress with Next.js 13 app router.
				<br />
				<br />
				Click a link in the header above to iniate nProgress.
			</p>
			<h2 className="font-bold text-4xl">And also, here&apos;s some music!</h2>
			<Spotify url="https://open.spotify.com/embed/track/3QCnOB6gWeMdJdbZDqs6oG?utm_source=generator" />
		</div>
	);
}
