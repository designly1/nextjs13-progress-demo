import Spotify from '@/components/Spotify';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Page 2',
	description: 'This is page 2.',
};

export const dynamic = 'force-dynamic';

export default function Page2() {
	return (
		<div className="flex flex-col items-center gap-6 mx-auto py-20 max-w-4xl">
			<h1 className="font-bold text-6xl">Page 2</h1>
			<Spotify url="https://open.spotify.com/embed/album/3ka1aCSiRjKDql9OBQqqub?utm_source=generator" />
		</div>
	);
}
