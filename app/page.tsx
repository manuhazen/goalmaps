const HomeClient = require("@/components/home/HomeClient").default;

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <header className="bg-white relative min-h-screen bg-[url(/5fotos.jpg)] bg-no-repeat bg-cover bg-center">
        {/* <img src="/5fotos.jpg" className="absolute inset-0 w-full h-full object-cover"/> */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4">
          <img
            className="w-72 mx-auto"
            src="/logopresidencia.svg"
            alt="Logo Presidencia"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 position-abusolute right-[450px] mt-[-50px]">
          <div className="text-center items-center justify-center text-white bg-[#001b39] p-8">
            <h1 className="text-center text-4xl md:text-6xl font-extrabold mb-0 text-sky-200">
              5 AÑOS
            </h1>
            <p className="text-center text-3xl font-extrabold text-sky-200">
              CONTRUYENDO
            </p>
            <h1 className="text-center text-3xl md:text-7xl font-extrabold mb-0 text-white">
              OBRAS
            </h1>
            <h1 className="text-center text-2xl md:text-4xl font-extrabold mb-0 text-white">
              QUE CAMBIAN
            </h1>
            <h1 className="text-center text-3xl md:text-7xl font-extrabold mb-0 text-white">
              VIDAS
            </h1>
          </div>
          <div className="flex flex-col items-center bg-white p-8 pb-20">
            <h1 className="text-center text-5xl font-bold text-bold text-black">
              ¡Entra aquí
            </h1>
            <h1 className=" text-center text-5xl font-bold text-bold text-black mb-10">
              y conócelas!
            </h1>
            <a
              href="#home-client"
              className="mb-[-50px] focus:outline-none text-white bg-red-700 hover:bg-red-800 cursor-pointer focus:ring-4 focus:ring-red-300 font-normal text-lg px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-64 tracking-[10px] items-center text-center inline-flex justify-center"
            >
              VER MÁS
              <svg
                className="w-6 h-6 text-white inline-block ml-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div className="w-full m-auto" id="home-client">
        <HomeClient />
      </div>

      <div className="bg-blue-900 flex w-full text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/logopresidencia-white.svg"
            alt="Gobierno logo"
            className="w-72 mx-auto mb-2"
          />
          <p className="text-lg mt-6">
            © 2025 Gobierno de la República Dominicana
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {/* Sistema desarrollado para la evaluación de proyectos inmobiliarios */}
          </p>
        </div>
      </div>
    </main>
  );
}
