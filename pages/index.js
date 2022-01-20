import Head from "next/head";
import Link from "next/dist/client/link";
import Layout from "../components/Layout";
import SectionWelcome from "../components/sections/SectionWelcome";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRecycle, FaUserCog } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import GridComponent from "../components/GridComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cercos y servicios San Nicolás</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="construcciones San Nicolás, San Nicolás, lavalle, cosntruccion, casas, edificios, ladrillos, cosntruccion de casa, argentina, mendoza"
        />
        <meta
          name="keywords"
          content="construcciones San Nicolás, San Nicolás, lavalle, cosntruccion, casas, edificios, ladrillos, cosntruccion de casa, argentina, mendoza"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout classHome={"bg-dgreen"}>
        <SectionWelcome />
        <section>
          <div className="space-y-2 text-center p-12 px-8 md:px-32 pt-8 bg-darkGray">
            <h1 className="font-bold text-2xl tracking-wider text-lgreen">
              NO ESPERE A QUE LOS PRECIOS SUBAN O EL PROBLEMA SEA MAYOR
            </h1>
            <p className="text-white">
              Contamos con personal calificado para construir proyectos que den
              valor agregado a su patrimonio, mejorar una imagen, solución
              rápida de un problema.
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element">
            <Fade left>
              <div className="my-auto font-bold flex">
                <div className="w-3 h-32 bg-dgreen my-auto"></div>
                <p className="text-lg m-6">
                  INSTALAMOS CERCOS, REPARAMOS O REMODELAMOS TU CASA
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <GridComponent
                name="Cercos de alambre"
                src="001.png"
              />
              
            </Fade>
            <Fade bottom>
            <GridComponent
                name="Cercos de material"
                src="002.png"
              />
            </Fade>
            <Fade bottom>
            <GridComponent
                name="Cercos rústicos"
                src="003.png"
              />
            </Fade>
            <Fade bottom>
            <GridComponent
                name="Obras en general"
                src="004.png"
              />
            </Fade>
            <Fade bottom>
            <GridComponent
                name="Obras menores"
                src="005.png"
              />
            </Fade>
            <Fade bottom>
            <GridComponent
                name="Servicio de plomería"
                src="006.png"
              />
            </Fade>
            <Fade bottom>
            <GridComponent
                name="Cañerías de agua y gas"
                src="007.png"
              />
            </Fade>
            <Fade bottom>
              <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element">
                <h2 className="font-bold text-xl">Nosotros te llamamos!</h2>
                <p>
                  Déjanos tu nombre, teléfono o correo electrónico y nos
                  comunicaremos contigo a la brevedad
                </p>
                <Link href="/contacto">
                  <Fade right>
                    <button className="btn">Te Llamamos</button>
                  </Fade>
                </Link>
              </div>
            </Fade>
          </div>
        </section>

        <section>
          <div className="p-8 md:p-32 py-32  font-bold text-black text-center bg-cover bg-hero2 bg-fixed grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div className="space-y-6 bg-lgreen bg-opacity-50 p-12 rounded-2xl">
              <h2 className="text-3xl fadeIn">
                Empresa de Cercos y Servicios Generales en Mendoza
              </h2>
              <p className="text-lg">
                Somos especialistas en instalar Cercos Perimetrales, servicios
                de reparación, construcción, ampliación y remodelación para la
                empresa y el hogar
              </p>
              <Link href="/contacto">
                <Fade left>
                  <button className="btn uppercase">
                    Reservá una visita con nosotros
                  </button>
                </Fade>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center pt-16">
            <h2 className="text-3xl font-bold pb-12">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 ">
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <BsFillPersonCheckFill className="text-6xl text-dgreen mx-auto" />
                  <h3 className="font-bold">
                    Valoración de los recursos humanos
                  </h3>
                  <p>
                    Queremos, buscamos y promovemos las buenas relaciones
                    humanas, tanto sociales como laborales y familiares.
                    Entendemos el valor de una persona y su historia.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <FaRecycle className="text-6xl text-dgreen mx-auto" />
                  <h3 className="font-bold">Cuidado del medio ambiente</h3>
                  <p>
                    Nuestras actividades cumplen con la legislación aplicable y
                    pertinente en materia de calidad, medio ambiente, seguridad
                    y salud.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <AiOutlineStar className="text-6xl text-dgreen mx-auto" />
                  <h3 className="font-bold">
                    Excelencia de nuestros servicios
                  </h3>
                  <p>
                    Buscamos y perseguimos la excelencia del servicio prestado a
                    través de los principios de transparencia, honestidad y
                    responsabilidad.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <FaUserCog className="text-6xl text-dgreen mx-auto" />
                  <h3 className="font-bold">Profesionales capacitados</h3>
                  <p>
                    Brindamos la eficiencia y calidad exigida por el cliente,
                    demostrando la capacidad de llevar de manera idónea los
                    proyectos asignados.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>

       
      </Layout>
    </div>
  );
}
