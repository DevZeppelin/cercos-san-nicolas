import Head from "next/head";
import Layout from "../components/Layout";
import { FaTools } from "react-icons/fa";
import { AiOutlineBuild } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { MdBuild } from "react-icons/md"
import { IoIosBulb } from "react-icons/io"
import { GiBoltBomb } from "react-icons/gi"
import PageTitle from "../components/PageTitle";

const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classServicios={"bg-dgreen"}>
        <div>
          <PageTitle text="Nuestros Servicios" />
          <div>
            <section className="text-black-400 body-font bg-gray-900">
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-black">
                    Nuestra variedad de servicios
                  </h1>
                  <p className="lg:w-1/2 w-full text-lg  leading-relaxed text-opacity-80">
                  Somos una empresa argentina. Contamos con profesionales y técnicos experimentados en el campo, lo cual nos permite entregar soluciones reales y servicios de calidad.
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <FaTools className="mx-auto text-3xl text-dgreen"/>
                      </div>
                      <h2 className="service-h2">
                       Cercos perimetrales
                      </h2>
                      <p className="leading-relaxed text-base">
                        Ya sea de alambre, material o madera, brindamos excelencia en nuestro trabajos para la tranquilidad y confianza del cliente
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className=" text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <AiOutlineBuild className="mx-auto text-3xl text-dgreen"/>
                      </div>
                      <h2 className="service-h2">
                      Obras en general
                      </h2>
                      <p className="leading-relaxed text-base">
                       Nuestros profesionales se encuentran capacitados para encarar diversos desafíos que logren brindar soluciones al cliente.
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <RiBuilding2Line className="mx-auto text-3xl text-dgreen"/>
                      </div>
                      <h2 className="service-h2">
                        Instalación de cañerías
                      </h2>
                      <p className="leading-relaxed text-base">
                        Utilizando lo último en tecnología, ofrecemos servicios de excelencia en cuanto a la isntalación de cañerías ya sea de agua o gas
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="text-center hover:bg-lowContrast hover:text-black border border-gray-700 border-opacity-75 p-6 rounded-lg">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                      <MdBuild className="mx-auto text-3xl text-dgreen"/>
                      </div>
                      <h2 className="service-h2">
                        Servicio de plomería
                      </h2>
                      <p className="leading-relaxed text-base">
                       Nuestros profesionales están capacitados para realizar obras de plomería que garanticen soluciones eficientes a los clientes
                      </p>
                    </div>
                  </div>
                 
                </div>
                
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
