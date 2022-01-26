import Head from "next/head";
import Layout from "../components/Layout";
import Fade from "react-reveal/Fade";
import PageTitle from "../components/PageTitle";
import Link from "next/dist/client/link";
import GridComponent from "../components/GridComponent";


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
          <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element">
          <Fade bottom>
              <Link href="/services/cercoTradicional">
                <a href="">
                  <GridComponent name="Cercos tradicionales" src="0001.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoMaterial">
                <a href="">
                  <GridComponent name="Cierres con postes Hormigón " src="0002.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoCarcel">
                <a href="">
                  <GridComponent name="Cierres tipo cárcel" src="0003.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoAcmafort">
                <a href="">
                  <GridComponent name="Cierres con malla Acmafort" src="0004.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoPremoldeado">
                <a href="">
                  <GridComponent name="Cierres premoldeados de Hormigón" src="0005.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoRustico">
                <a href="">
                  <GridComponent name="Alambrados Rurales" src="0006.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoElectrosoldado">
                <a href="">
                  <GridComponent name="Cierres con malla Electresoldada" src="0007.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/obrasMenores">
                <a href="">
                  <GridComponent name="Obras en general" src="005.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/plomeria">
                <a href="">
                  <GridComponent name="Servicio de plomería" src="006.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/caneria">
                <a href="">
                  <GridComponent name="Cañerías de agua y gas" src="007.png" />
                </a>
              </Link>
            </Fade>
          </div>
        </section>

          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
