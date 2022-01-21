import Head from "next/head";
import Layout from "./Layout";
import { useRouter } from "next/router";

const ServicePage = ({ title, src, text1, text2, text3 }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="text-center space-y-12 py-12">
            <h2 className="text-3xl text-dgreen font-extrabold">{title}</h2>
            <img src={src} alt={title} className="mx-auto border-2 border-black rounded-xl" />
            <div className="mx-4 md:mx-72 space-y-8 text-lg">
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
            </div>
            <button className="btn" onClick={() => router.back()}>
              Atrás
            </button>
        </div>
      </Layout>
    </div>
  );
};

export default ServicePage;
