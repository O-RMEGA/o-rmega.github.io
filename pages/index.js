import Head from 'next/head';

export default function Home() {
  return (
    <>
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-md w-full">
          <img
            src="icon.png"
            alt="OMEGA"
            className="mx-auto rounded-full w-32 h-32 mb-4 border-4 border-white"
          />
          <h1 className="text-3xl font-bold mb-2">OMEGA</h1>
          <p className="text-gray-400 mb-6">某オンクレエンジニア</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://x.com/O_RMEGA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 1200 1227">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
            </a>
            <a
              href="https://github.com/O-RMEGA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.09-.76.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.8 1.31 3.48 1 .11-.78.42-1.3.76-1.6-2.66-.31-5.46-1.34-5.46-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.55.12-3.23 0 0 1-.33 3.3 1.23A11.42 11.42 0 0112 5.8c1.01.01 2.02.14 2.97.41 2.3-1.56 3.3-1.23 3.3-1.23.66 1.68.24 2.93.12 3.23.77.84 1.24 1.91 1.24 3.23 0 4.64-2.8 5.66-5.48 5.97.43.37.81 1.1.81 2.22v3.3c0 .32.21.7.83.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}