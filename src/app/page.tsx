import { redirect } from 'next/navigation';

interface HomeProps {
  searchParams?: { callback?: string };
}

export default function Home({ searchParams }: HomeProps) {
  const callback = searchParams?.callback;

  if (callback) {
    redirect(callback);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl w-full shadow-xl border border-white/20 text-white">
        <div className="text-4xl text-center mb-6">🔁</div>

        <h1 className="text-2xl font-bold mb-2 text-center text-white">Mock Redirect Tool</h1>

        <p className="text-gray-300 text-sm mb-6 text-center">
          Instantly redirect to any URL by providing a <code className="bg-gray-700 px-1 rounded text-white">?callback=</code> param.
        </p>

        <div className="bg-gray-800 text-green-400 font-mono text-sm p-4 rounded-lg mb-4 overflow-auto">
          http://localhost:3000?callback=https://example.com
        </div>

        <p className="text-sm text-gray-300 text-center">
          Open the link above in your browser and you&apos;ll be redirected to{' '}
          <a
            href="https://example.com"
            className="underline text-blue-400 hover:text-blue-300 transition-colors"
          >
            https://example.com
          </a>.
        </p>
      </div>

      <footer className="mt-10 text-xs text-gray-500">
        Built with ❤️ using <span className="text-white">Next.js</span> + <span className="text-white">Tailwind CSS</span>
      </footer>
    </main>
  );
}
