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
              <Link href="/services/cercoAlambre">
                <a href="">
                  <GridComponent name="Cercos de alambre" src="001.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoMaterial">
                <a href="">
                  <GridComponent name="Cercos de material" src="002.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/cercoRustico">
                <a href="">
                  <GridComponent name="Cercos rústicos" src="003.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/obrasGeneral">
                <a href="">
                  <GridComponent name="Obras en general" src="004.png" />
                </a>
              </Link>
            </Fade>
            <Fade bottom>
              <Link href="/services/obrasMenores">
                <a href="">
                  <GridComponent name="Obras menores" src="005.png" />
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
              <Link href="/services/canerias">
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
