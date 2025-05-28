"use client";

import { redirect } from "next/navigation";
import { use, useEffect, useState } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function Home(props: { searchParams: SearchParams }) {
  const params = use(props.searchParams);
  const callback =
    typeof params?.callback === "string" ? params.callback : undefined;

  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (callback) {
      setShouldRedirect(true);
    }
  }, [callback]);

  const handleRedirect = () => {
    if (callback) redirect(callback);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl w-full shadow-xl border border-white/20 text-white">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="text-5xl">🔁</div>

          <h1 className="text-2xl font-semibold text-gray-800">
            {shouldRedirect ? "Ready to Redirect" : "Mock Redirect Tool"}
          </h1>

          {shouldRedirect ? (
            <>
              <p className="text-gray-600 text-sm">
                Click the button below to proceed:
              </p>

              <p className="text-blue-600 text-sm break-words">{callback}</p>

              <button
                onClick={handleRedirect}
                className="mt-4 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition duration-200"
              >
                Redirect Now
              </button>
            </>
          ) : (
            <>
              <p className="text-gray-600 text-sm">
                Redirect to any URL by adding a{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-800 text-xs">
                  ?callback=
                </code>{" "}
                param in the URL.
              </p>

              <div className="bg-gray-100 text-gray-800 text-xs p-4 rounded-md w-full font-mono text-left">
                http://localhost:3000?callback=https://example.com
              </div>

              <p className="text-gray-500 text-xs">
                Try visiting that link to trigger a redirect.
              </p>
            </>
          )}
        </div>
      </div>

      <footer className="absolute bottom-6 text-xs text-gray-400 text-center w-full">
        Built with <span className="text-pink-500">♥</span> using{" "}
        <span className="font-semibold text-gray-700">Next.js</span> and{" "}
        <span className="font-semibold text-gray-700">Tailwind CSS</span>
      </footer>
    </main>
  );
}
