import React from 'react';
import Spotify from '@/components/Spotify';

export default function Page2() {
	return (
		<div className="flex flex-col items-center gap-6 py-20 max-w-4xl mx-auto">
			<h1 className="text-6xl font-bold">Page 2</h1>
            <Spotify url="https://open.spotify.com/embed/track/0szLEuo0bwvUXUivzDiip9?utm_source=generator" />
		</div>
	);
}
