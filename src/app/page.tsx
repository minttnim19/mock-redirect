'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function Home(props: { searchParams: SearchParams }) {
  const [callback, setCallback] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const params = await props.searchParams;
      const cb =
        typeof params?.callback === 'string' ? params.callback : undefined;
      setCallback(cb);
    })();
  }, [props.searchParams]);

  const handleRedirect = () => {
    if (callback) redirect(callback);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl w-full shadow-xl border border-white/20 text-white text-center space-y-6">
        <div className="text-4xl">🔁</div>

        {!callback ? (
          <>
            <h1 className="text-2xl font-bold">Mock Redirect Tool</h1>
            <p className="text-gray-300 text-sm">
              Instantly redirect to any URL by providing a{' '}
              <code className="bg-gray-700 px-1 rounded text-white">
                ?callback=
              </code>{' '}
              param in the query string.
            </p>

            <div className="bg-gray-800 text-green-400 font-mono text-sm p-4 rounded-lg overflow-auto">
              https://mock-redirect.vercel.app?callback=https://example.com
            </div>

            <p className="text-sm text-gray-400">
              Open the link above in your browser and you will be redirected to{' '}
              <span className="underline text-blue-400">https://example.com</span>.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold">Ready to Redirect</h1>
            <p className="text-gray-300 text-sm">
              We found a callback URL. Click below to continue.
            </p>
            <button
              onClick={handleRedirect}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition"
            >
              Redirect to {callback}
            </button>
          </>
        )}
      </div>

      <footer className="mt-10 text-xs text-gray-500">
        Built with ❤️ using <span className="text-white">Next.js</span> +{' '}
        <span className="text-white">Tailwind CSS</span>
      </footer>
    </main>
  );
}
