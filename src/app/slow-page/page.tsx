import React from 'react';
import Spotify from '@/components/Spotify';

const fetchData = async () => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
			cache: 'no-cache',
		});
		const data = await response.json();
		return data;
	} catch (e) {
		console.warn(e);
		return {};
	}
};

export default async function SlowPage() {
	const data = await fetchData();
	return (
		<div className="flex flex-col items-center gap-6 py-20 max-w-4xl mx-auto">
			<h1 className="text-6xl font-bold">Slow Page</h1>
			<h2 className="text-4xl font-bold">This page has data loaded from a sloooooow API.</h2>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			<Spotify url="https://open.spotify.com/embed/track/5oe7a9DhgK7383jLIfTPYo?utm_source=generator" />
		</div>
	);
}
