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
            {/* <h1 className="text-center text-5xl font-bold text-bold text-black">
              ¡Entra aquí
            </h1> */}
            <h1 className=" text-center text-5xl font-bold text-bold text-black mb-10">Conócelas!
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

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-6xl font-bold title-font text-blue-900 mb-2">EL PAÍS QUE QUEREMOS</h1>
            <h2 className="text-lg text-red-500 tracking-widest font-medium title-font mb-1">5 AÑOS CONTRUYENDO</h2>
          </div>
          <div className="flex flex-col flex-wrap -mb-10 lg:w-1/2 lg:text-left text-center p-10">
            <div className="flex flex-col mb-10 items-center content-center">
              <div className="flex-grow">
                <h2 className="text-blue-900 text-2xl title-font font-semibold mb-3 leading-9">Miles de obras construidas en todo el territorio nacional con base en el cumplimiento de la ley 340-06 de Compras y Contrataciones Públicas. </h2>
                <p className="text-base leading-7 text-blue-900">
                  En estos primeros cinco años de gestión, hemos demostrado                           
      que el cambio real se construye con hechos, planificación y                           
      una visión de país que abarca a todas las regiones por igual.
      Asumimos el reto de intervenir simultáneamente en el Norte,                           
      Sur,  Este y Gran Santo  Domingo/Distrito  Nacional,  llevando                           
      soluciones concretas a las 32 provincias y ejecutando Miles de 
      obras que transforman la vida de la gente.
      Con una inversión superior a RD$600 mil millones dentro del 
      Plan Nacional de Infraestructura para el Desarrollo —que activa 
      más de RD$753 mil millones— hemos priorizado proyectos 
      que generan un impacto profundo: carreteras que conectan y 
      abren oportunidades, hospitales que salvan vidas, escuelas y 
      universidades que forman el talento del futuro, viviendas dignas, 
      redes de agua potable y espacios públicos que fortalecen la 
      comunidad
                  </p>
                  <p className="text-base leading-7 text-blue-900 my-4">
                    <b>+RD$ 753 MIL MILLONES en INVERSIÓNES</b> que transforman el 
      país 2020-2025 Plan Nacional de Inversión en infraestructura 
      para el Desarrollo
                  </p>

                  <p className="text-base leading-7 text-blue-900 my-4">
                    <b>+RD$ 600 MIL MILLONES Ejecutados</b>
                  </p>

                  <p className="text-base leading-7 text-blue-900 my-4">
                    Toda esta inversión ha sido y está siendo ejecutada en estricto 
      cumplimiento de la ley de compras y contrataciones públicas, 
      Sujeto también al sistema de normas de la contraloría.
                  </p>

                  <p className="text-base leading-7 text-blue-900 my-4">
      Más que cifras, son empleos, bienestar y progreso tangible,                           
      resultado de un trabajo en equipo, cercano y eficiente, que                           
      demuestra que la República Dominicana, aun siendo un país                           
      pequeño, puede lograr grandes transformaciones y marcar un                           
      nuevo rumbo para su gente
                  </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="object-cover object-center h-full w-full" src="/stock1.jpg"/>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font">
        <div className="container px-5 pb-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img alt="feature" className="object-contain object-center h-full w-full p-9" src="/years.png"/>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-blue-900 text-xl title-font font-semibold mb-3 leading-9">Nuestra misión ha sido 
                  transformar el país 
                  construyendo las obras que 
                  generan oportunidades y 
                  mejoran la calidad de vida, 
                  donde la gente tiene sus raíces.</h2>
              </div>
              <div className="md:w-full my-6">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className="text-blue-900 text-6xl title-font font-bold tracking-tighter">+RD$ 753</h2>
                    <span className="text-blue-900 text-2xl title-font font-bold ms-4">MIL MILLONES</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-7 text-blue-900 my-4 uppercase">
                      en INVERSIÓNes que transforman
                      el país 2020-2025 con el
                      Plan Nacional de Inversión
                      en infraestructura para el Desarrollo
                  </p>
                  </div>
                </div>
              </div>
              <div className="md:w-full mb-6">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className="text-blue-900 text-6xl title-font font-bold tracking-tighter">+RD$ 600</h2>
                    <span className="text-blue-900 text-2xl title-font font-bold ms-4">MIL MILLONES</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-7 text-blue-900 my-4 uppercase">
                      Ejecutados
                  </p>
                  </div>
                </div>
              </div>
              <div className="md:w-full mb-6">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <h2 className="text-blue-900 text-6xl title-font font-bold tracking-tighter"> MILES DE OBRAS</h2>
                    <span className="text-blue-900 text-2xl title-font font-bold ms-4">PRINCIPALES</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-7 text-blue-900 my-4 uppercase">
                      En vialidad, transporte, servicios 
                        públicos, transformación urbana,
                        inclusión social y modernización 
                        del Estado.
                  </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <div className="w-full m-auto" id="home-client">
        <HomeClient />
      </div> 
      
      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </div>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-6xl font-bold title-font text-blue-900 mb-4">CONSTRUYENDO LAS BASES DEL PAÍS QUE SEREMOS EN 2036</h1>
            <h2 className="text-xl text-red-500 tracking-widest font-medium title-font mb-1"> La República Dominicana se encamina con decisión firme hacia el cumplimiento de la Meta 2036.</h2>
          </div>
          <div className="lg:w-3/4 w-full mx-auto text-center">
            <p className="text-lg leading-7 text-blue-900 my-4">
                    Miles de obras entregadas a lo largo y ancho de todo el país: carreteras, 
hospitales, viviendas, escuelas, agua potable, conectividad, seguridad, 
movilidad escolar. Cada una de estas obras representa la estructura, el 
desarrollo, mejoras de la calidad de vida y el progreso social real, que 
mejora la competitividad del país para un mercado global.
                  </p>
                  <p className="text-lg leading-7 text-blue-900 my-4">
                     En apenas cinco años, el gobierno ha hecho más por preparar el país para 
el futuro que lo logrado en los 16 años anteriores
                  </p>
                  <p className="text-lg font-medium leading-7 text-blue-900 my-4">
                    No solo estamos construyendo obras. Estamos construyendo el futuro. 
Y esa es la verdadera dimensión del esfuerzo de esta gestión.
                  </p>
                  
            <span className="inline-block h-1 w-10 rounded bg-red-500 mt-8 mb-6"></span>
          </div>
        </div>
      </section>

      <div className="flex w-full h-96">
            <img className="w-full object-cover object-center" src="/stock3.jpg" alt="" />
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
