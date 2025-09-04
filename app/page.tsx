export default function Home() {
  return (
    <main className="min-h-screen w-full">

      <header className="bg-white relative min-h-screen bg-[url(/5fotos.jpg)] bg-no-repeat bg-cover bg-center">
        {/* <img src="/5fotos.jpg" className="absolute inset-0 w-full h-full object-cover"/> */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4">
            <img className="w-72 mx-auto" src="/logopresidencia.svg" alt="Logo Presidencia" />
          <div className="flex h-16 items-center justify-center">
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                  </li>

                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
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
          <div className="flex flex-col items-center bg-white p-8">
            <h1 className="text-center text-5xl font-bold text-bold text-black">
              ¡Entra aquí
            </h1>
            <h1 className=" text-center text-5xl font-bold text-bold text-black mb-10">
              y conócelas!
            </h1>
            <button type="button" className="mb-[-50px]focus:outline-none text-white bg-red-700 hover:bg-red-800 cursor-pointer focus:ring-4 focus:ring-red-300 font-normal text-lg px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-64 tracking-[10px] items-center text-center">
              <span>VER MÁS</span>
              <svg className="w-6 h-6 text-white inline-block ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
              </svg>
            </button>
          </div>
        
      </div>

      </header>
<div className="max-w-2xl m-auto">
  <div id="default-carousel" className="relative mb-4 mt-4 ml-4" data-carousel="static">
    <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
    </div>
    <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="hidden">Previous</span>
        </span>
    </button>
    <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="hidden">Next</span>
        </span>
    </button>
</div>
</div>
      

      <div className="bg-blue-900 flex w-full text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/logopresidencia-white.svg" alt="Gobierno logo" className="w-72 mx-auto mb-2" />
          <p className="text-lg mt-6">
            © 2025 Gobierno de la  República Dominicana
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {/* Sistema desarrollado para la evaluación de proyectos inmobiliarios */}
          </p>
        </div>
      </div>
    </main>
  );
}
