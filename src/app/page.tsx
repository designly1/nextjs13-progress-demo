import Spotify from "@/components/Spotify";

export default function Home() {
	return (
		<div className="flex flex-col items-center gap-6 py-20 max-w-4xl mx-auto">
			<h1 className="text-6xl font-bold">Next.js 13</h1>
      <h2 className="text-4xl font-bold">Progress Bar Demo</h2>
      <p className="text-2xl text-center">This demo app shows how to use nextjs13-progress with Next.js 13 app router.<br /><br/>
      Click a link in the header above to iniate nProgress.
      </p>
      <h2 className="text-4xl font-bold">And also, here&apos;s some music!</h2>
      <Spotify url="https://open.spotify.com/embed/track/5OsLigvYos454XWaE5bCdO?utm_source=generator" />
		</div>
	);
}
