import React from 'react';

const fetchData = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
        cache: 'no-cache',
	});
	const data = await response.json();
	return data;
};

export default async function SlowPage() {
	const data = await fetchData();
	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
