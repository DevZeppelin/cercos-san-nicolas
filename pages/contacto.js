import Head from "next/head";
import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import PageTitle from "../components/PageTitle";

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classContacto={"bg-dgreen"}>
        <PageTitle text="Contactanos" />
        <div className="text-center space-y-6 pt-12">
          <h2 className="text-2xl font-bold">Trabajá con profesionales</h2>
          <p className="text-lg p-4">
            ¿Necesita trabajos en su hogar o empresa? Construcciones San Nicolás, es la
            alternativa a tu alcance. Contáctenos hoy!
          </p>
            <h1 className="text-4xl font-extrabold mt-6">¡Contactanos!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-6 ">
            <Fade big>
              <div>
                <MainBarButton
                  logo={
                    <FaPhone className="text-dgreen text-6xl flex my-auto m-4" />
                  }
                  text="Llamadas"
                  description="+5492616502121"
                  classType="text-dgreen text-2xl my-2"
                />
              </div>
            </Fade>
            <Fade big>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=5492616708100"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FaWhatsapp className="text-dgreen text-6xl flex my-auto m-4" />
                    }
                    text="Whatsapp Chat"
                    description="+5492616502121"
                    classType="text-dgreen text-2xl my-2"
                  />
                </a>
              </div>
            </Fade>
            <Fade big>
              <div>
                <a
                  href="mailto:construmed@gmail.com"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FiMail className="text-dgreen text-6xl flex my-auto m-4" />
                    }
                    text="Correo electrónico"
                    description="construccionesmed@gmail.com"
                    classType="text-dgreen text-2xl my-2"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="absolute inset-0 bg-gray-900">
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=mendoza, lavalle,la+pega+(construcciones San Nicolás)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="container px-5 py-24 min-h-screen mx-auto flex">
            
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contacto;
