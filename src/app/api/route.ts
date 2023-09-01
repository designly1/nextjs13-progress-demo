import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	// Create a 2 second delay
	await new Promise(resolve => setTimeout(resolve, 2000));

	return NextResponse.json({
		message: 'Hello from the API!',
	});
}
