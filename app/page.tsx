const HomeClient = require("@/components/home/HomeClient").default;

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <header className="bg-white relative min-h-screen bg-[url(/5fotos.jpg)] bg-no-repeat bg-cover bg-center" id="header">
        {/* <img src="/5fotos.jpg" className="absolute inset-0 w-full h-full object-cover"/> */}
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4">
          <img
            className="w-72 mx-auto"
            
          />
        </div>
        <nav
          className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded lg:max-w-screen-lg">
          <div className="container mx-auto flex justify-between items-center px-8">
            <div  className="flex items-center">
              <a aria-current="page"  className="flex items-center">
                  <img  className="h-20 w-auto" src="/logopresidencia.svg"  alt="Logo Presidencia"/>
                  <p  className="sr-only">Website Title</p>
              </a>
            </div>

            <div  className="md:hidden">
              <button id="menu-button"  className="text-midnight focus:outline-none">
                <svg  className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-Linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-4 6h4"></path>
                </svg>
              </button>
            </div>

            <div id="menu-items"  className="hidden md:flex flex-grow justify-end items-center space-x-4">
              <a href="#header"  className="text-midnight hover:text-red-500 border-b-3 border-transparent hover:border-b-midnight transition ease-in-out pb-2">Inicio</a>
              <a href="#acerca"  className="text-midnight hover:text-red-500 border-b-3 border-transparent hover:border-b-midnight transition ease-in-out pb-2">Acerca de</a>
              <a href="#infra"  className="text-midnight hover:text-red-500 border-b-3 border-transparent hover:border-b-midnight transition ease-in-out pb-2">Infraestructura Nacional</a>
              <a href="#contacto"  className="text-midnight hover:text-red-500 border-b-3 border-transparent hover:border-b-midnight transition ease-in-out pb-2">Contacto</a>
            </div>
          </div>
      </nav>
    </header>

      <section className="w-full bg-midnight p-4 sm:p-10 py-16 sm:py-24 pl-0">
        <div className="container mx-auto flex flex-row justify-center items-center content-center gap-5 p-5 m-5 w-full flex-wrap">
          <div className="flex-1 px-2 py-2 order-1 basis-0  shrink-1 self-auto">
            <div className="p-0">
              <h1 className="text-sky-200 font-extrabold text-4xl sm:text-6xl leading-10 sm:leading-16 sm:text-left text-center">5 AÑOS CONSTRUYENDO</h1>
              <h1 className="text-white font-extrabold text-4xl sm:text-6xl leading-10 sm:leading-16 sm:text-left text-center">OBRAS QUE CAMBIAN VIDAS</h1>
            </div>
          </div>
          <div className="flex-1 px-2 py-2 order-2 basis-0 shrink-1 self-auto">
            <div className="p-0">
              <img className="w-40 border-b-8 border-b-red-500 pb-6 mb-6 sm:ml-0 mx-auto" src="/icon_persons.svg"/>
              <p className="text-white text-md font-light leading-6 w-96 sm:px-0 px-8 mt-4 sm:text-left text-center">Transformando el país a través de infraestructura que 
                  genera oportunidades y mejora la calidad de vida donde 
                  la gente tiene sus raíces</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F2F6F9] p-4 sm:p-10 py-16 sm:py-24" id="acerca">
        <div className="container mx-auto flex flex-row justify-center items-center content-center gap-5 p-0 sm:p-5 m-5 w-full flex-wrap">
            <div className="w-full mb-8 px-4 flex items-center">
              <span className="border-b-4 w-[20px] border-red-500 absolute"></span>
              <span className="flex-shrink-0 text-2xl text-gray-500 font-light pl-8">ACERCA DE NUESTRA MISIÓN</span>
            </div>
          <div className="flex-1 px-2 py-2 order-1 basis-0  shrink-1 self-auto">
            <div className="p-0">
              <h1 className="text-midnight font-semibold text-3xl sm:text-5xl leading-10 sm:leading-14 sm:text-left text-center">Nuestra misión ha sido transformar el país</h1>
            </div>
          </div>
          <div className="flex-1 px-2 py-2 order-2 basis-0 shrink-1 self-auto">
            <div className="p-0">
              <p className="text-gray-500 text-md font-regular leading-6 w-96 px-3 sm:px-0 sm:text-left text-center">Construyendo las obras que generan oportunidades y mejoran la calidad de vida, donde la gente tiene sus raíces. Nuestro compromiso es crear infraestructura que impulse el desarrollo sostenible y la prosperidad de todos los dominicanos.</p>
            </div>
          </div>
        </div>
          <div className="box-border px-3 mx-auto border-solid sm:px-0 container mt-12 sm:mt-24">
              <div className="grid grid-cols-1 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 md:mt-8 gap-0 lg:grid-cols-3">
                  {/* <!-- Card 1 --> */}
                  <div className="relative w-full z-10 flex flex-col items-center max-w-md p-8 place-content-center h-full  mx-auto my-0 bg-white">
                          <h2 className="text-midnight text-6xl font-extrabold">+RD$753</h2>
                          <h3 className="text-red-500 text-lg title-font font-bold ms-4">MIL MILLONES</h3>
                          <h4 className="text-midnight text-lg font-bold my-4 text-center">en INVERSIONES que transforman el país 2020-2025</h4>
                          <h5 className="text-midnight text-md font-light text-center">Plan Nacional de Inversión en infraestructura para el Desarrollo</h5>
                  </div>
                  {/* <!-- Card 2 --> */}
                  <div className="relative w-full z-10 flex flex-col items-center max-w-md p-8 place-content-center h-full  mx-auto my-0 bg-[#DCEFFF]">
                          <h2 className="text-midnight text-6xl font-extrabold">+RD$753</h2>
                          <h3 className="text-red-500 text-lg title-font font-bold ms-4">MIL MILLONES</h3>
                          <h4 className="text-midnight text-lg font-bold my-4 text-center">Ejecutados</h4>
                          <h5 className="text-midnight text-md font-light text-center">En proyectos estratégicos completados</h5>
                  </div>
                  {/* <!-- Card 3 --> */}
                  <div className="relative w-full z-10 flex flex-col items-center max-w-md p-8 place-content-center h-full  mx-auto my-0 bg-midnight">
                          <h2 className="text-white text-6xl font-extrabold text-center">MILES DE OBRAS</h2>
                          <h3 className="text-red-500 text-lg title-font font-bold ms-4">MIL MILLONES</h3>
                          <h4 className="text-white text-md font-medium my-4 text-center">En vialidad, transporte, servicios públicos, transformación urbana, inclusión social y modernización del Estado.</h4>
                  </div>
              </div>
          </div>
      </section>

      <section className="w-full bg-white p-4 sm:p-10 py-16 sm:py-24" id="infra">
        <div className="container mx-auto flex flex-row justify-center items-center content-center gap-5 p-0 sm:p-5 m-5 w-full flex-wrap">
            <div className="w-full mb-8 px-4 flex items-center">
              <span className="border-b-4 w-[20px] border-red-500 absolute"></span>
              <span className="flex-shrink-0 text-2xl text-gray-500 font-light pl-8">INFRAESTRUCTURA NACIONAL</span>
            </div>
          <div className="flex-1 px-2 py-2 order-1 basis-0  shrink-1 self-auto">
            <div className="p-0">
              <h1 className="text-midnight font-semibold text-3xl sm:text-5xl leading-10 sm:leading-14">Conoce las obras que transforman el país</h1>
            </div>
          </div>
          <div className="flex-1 px-2 py-2 order-2 basis-0 shrink-1 self-auto">
            <div className="p-0">
              <p className="text-gray-500 text-md font-regular leading-6 w-96 px-3 sm:px-0">Desde carreteras que conectan comunidades hasta hospitales que salvan vidas, cada proyecto representa nuestro compromiso con el desarrollo integral de la República Dominicana.</p>
            </div>
          </div>
        </div>
      </section>


      <div className="w-full m-auto mb-96 sm:mb-48" id="home-client">
        <HomeClient />
      </div> 

      <footer id="contacto" className="bg-midnight lg:grid lg:grid-cols-6">
        <div className="px-4 py-24 sm:px-6 lg:col-span-4 lg:px-8 lg:col-start-2">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <p>
                <a className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                  <img
                    src="/logopresidencia-white.svg"
                    alt="Gobierno logo"
                    className="w-64 mb-2"
                  />
                </a>
              </p>

              <ul className="mt-8 space-y-1 text-white">
                <li className="font-medium text-lg mb-8"> Construyendo el futuro de la República Dominicana</li>
                <li className="font-light lg:pr-[100px] text-gray-400">Nuestro compromiso es transformar el país a través de obras de infraestructura que generen oportunidades de desarrollo y mejoren la calidad de vida de todos los ciudadanos dominicanos</li>
              </ul>

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="font-medium text-white text-xl border-b-4 border-red-500 pb-3 w-32 text-center">Navegación</p>

                <ul className="mt-6 space-y-4 text-lg font-extralight text-white">
                  <li>
                    <a href="#" className="text-gray-400 transition hover:opacity-75">OBRAS</a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-400 transition hover:opacity-75">GESTIÓN</a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-400 transition hover:opacity-75">PLAN</a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-400 transition hover:opacity-75">LÍDERES</a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-400 transition hover:opacity-75"> MÁS INFORMACIÓN</a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white text-xl border-b-4 border-red-500 pb-3 w-26 text-center">Contacto</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="font-normal text-white mb-2">
                    OFICINA CENTRAL
                  </li>

                  <li className="text-gray-400 font-extralight ">
                    Palacio Nacional,
                    Av. México
                    esq. Dr. Delgado, 
                    Gascue, Santo Domingo, 
                    República Dominicana. 
                  </li>

                  <li className="font-semibold text-white mb-2">
                    TELÉFONO
                  </li>
                  <li className="text-gray-400 font-extralight ">
                    809.695.8000
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between text-center">
              <p className="mt-8 text-xs text-gray-400 sm:mt-0 mb-4">
                &copy; 2025 Gobierno de la República Dominicana
              </p>
              <ul className="flex flex-wrap gap-4 text-xs sm:justify-end justify-center flex-row-reverse">
                <li>
                  <a href="#" className="text-gray-400 transition hover:opacity-75">  Política de Privacidad  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:opacity-75"> Términos de Uso  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:opacity-75"> Transparencia </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


    </main>
  );
}
