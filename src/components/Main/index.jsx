import clsx from "clsx";
import { Cource } from "src/components/Cource";
import Menus from "src/components/Menus";
import Access from "src/components/Access";
import Image from "next/image";

export function Main() {
  return (
    <>
      <main
        className={clsx(
          "border  py-7 lg:px-24 md:px-10 sm:px-1 w-screen font-fancy"
        )}
      >
        {/* <div className="w-full h-64 mt-24">
          <figure className="relative w-96 h-full block mx-auto">
            <Image
              src="/Header/logo.png"
              layout="fill"
              objectFit="cover"
              alt="ロゴ"
            />
          </figure>
        </div> */}
        <Menus />
        <Cource />
        <Access />
      </main>
    </>
  );
}
