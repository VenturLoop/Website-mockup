// src/app/api/auth/set-session/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const { token, userId, userData } = await request.json();

    if (!token || !userId || !userData) {
      return NextResponse.json({ message: 'Missing token, userId, or userData' }, { status: 400 });
    }

    // Set cookies
    const cookieStore = cookies();
    cookieStore.set('sessionToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      sameSite: 'lax', // Or 'strict'
    });
    cookieStore.set('userId', userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      sameSite: 'lax',
    });
    // You might choose to store more userData in a cookie if it's not too large
    // and not too sensitive, or rely on re-fetching it using token/userId.
    // For now, we're primarily storing the identifiers for re-validation.

    return NextResponse.json({ message: 'Session created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error setting session:', error);
    return NextResponse.json({ message: 'Error setting session', error: error.message }, { status: 500 });
  }
}
