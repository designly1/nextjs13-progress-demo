import Spotify from '@/components/Spotify';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Slow Page',
	description: 'This page should have loaded slowly.',
};

export const dynamic = 'force-dynamic';

export default async function SlowPage() {
	// Generate a 2 second delay
	await new Promise(resolve => setTimeout(resolve, 2000));

	return (
		<div className="flex flex-col items-center gap-6 mx-auto py-20 max-w-4xl">
			<h1 className="font-bold text-6xl">Slow Page</h1>
			<h2 className="font-bold text-4xl">This page should have loaded slowly.</h2>
			<Spotify url="https://open.spotify.com/embed/track/5oe7a9DhgK7383jLIfTPYo?utm_source=generator" />
		</div>
	);
}
