import Link from "next/dist/client/link";

import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhoneCall } from "react-icons/fi";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-12 text-black justify-center md:justify-between py-2">
      <div className="flex-col">
        <Link href="/">
          <a href="">
            <img
              src="/logo.png"
              alt="building icon logo construcciones San Nicolás"
              height="160"
              width="280"
              className="pt-2"
            />
            <p className="text-dgreen mb-2 font-bold text-center">Cercos perimetrales y servicios generales</p>
          </a>
        </Link>
      </div>

      <div className="hidden md:flex justify-between space-x-2 text-center my-auto p-2">
        <MainBarButton
          logo={<FiPhoneCall className="text-dgreen text-4xl flex my-auto m-2" />}
          text="Llamadas"
          description="+5492615579954"
          classType="text-dgreen font-bold"
        />
        <MainBarButton
          logo={<FaWhatsapp className="text-dgreen text-4xl flex my-auto m-2" />}
          text="Whatsapp Chat"
          description="+5492615637856"
          classType="text-dgreen font-bold"
        />
        <MainBarButton
          logo={<FiMail className="text-dgreen text-4xl flex my-auto m-2" />}
          text="Correo electrónico"
          description="cercos.sannicolas@gmail.com"
          classType="text-dgreen font-bold"
        />

        <Link href="/contacto">
          <div className="rounded-lg p-4 text-xl my-auto btn">Te llamamos</div>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
