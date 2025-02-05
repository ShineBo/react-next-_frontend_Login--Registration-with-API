'use client';

import { useSearchParams } from 'next/navigation'; 

export default function Greeting() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name'); 

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 text-gray-600 text-center">
      <h1 className="text-2xl font-bold mb-6">Hello, {name}!</h1>
      <p>Welcome to the app. We're glad to have you here!</p>
    </div>
  );
}