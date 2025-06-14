// src/app/api/auth/get-session/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic'; // Explicitly mark as dynamic

export async function GET(request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('sessionToken')?.value;
    const userId = cookieStore.get('userId')?.value;

    if (!token || !userId) {
      return NextResponse.json({ message: 'No active session found' }, { status: 401 });
    }

    // Here, you might want to re-validate the token with auth.venturloop.com
    // or assume if the cookie exists and hasn't expired, it's valid.
    // For this example, we'll assume it's valid if present.
    // In a production app, re-validation (perhaps less frequently) is a good idea.
    // const validationResponse = await fetch('https://auth.venturloop.com/api/verify-token', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ token, userId }),
    // });
    // if (!validationResponse.ok) {
    //   // Clear cookies if validation fails
    //   cookieStore.delete('sessionToken');
    //   cookieStore.delete('userId');
    //   return NextResponse.json({ message: 'Session validation failed' }, { status: 401 });
    // }
    // const userData = await validationResponse.json();

    // For now, let's just return the userId and a placeholder for userData.
    // Ideally, you'd fetch full user data or have it stored/retrievable.
    // If you stored essential non-sensitive userData in another cookie, retrieve it here.
    // Or, make a call to your own backend to get user details based on userId.
    const userData = { id: userId, name: `User ${userId}` }; // Placeholder

    return NextResponse.json({ isLoggedIn: true, currentUser: userData, token, userId }, { status: 200 });
  } catch (error) {
    console.error('Error getting session:', error);
    return NextResponse.json({ message: 'Error getting session', error: error.message }, { status: 500 });
  }
}
