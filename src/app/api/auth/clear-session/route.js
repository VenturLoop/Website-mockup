// src/app/api/auth/clear-session/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) { // Changed to POST for consistency, though GET could also work
  try {
    const cookieStore = cookies();
    cookieStore.delete('sessionToken');
    cookieStore.delete('userId');
    // Delete any other related session cookies

    return NextResponse.json({ message: 'Session cleared successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error clearing session:', error);
    return NextResponse.json({ message: 'Error clearing session', error: error.message }, { status: 500 });
  }
}
