import Image from "next/image";
import clsx from "clsx";
import { VFC } from "react";


export const Flyer: VFC = () => {
  return (
    <>
      <div className={clsx("w-screen h-auto font-fancy")}>
        <div className={clsx("relative h-[637px] w-full")}>
            <figure className="absolute h-[637px] sm:left-1/2 sm:-translate-x-1/2">
              <Image
                src="/instagram_senrima.png"
                width={450}
                height={637}
                alt="千里馬　インスタグラム"
              />
            </figure>
        </div>
        <div className={clsx("relative h-[637px] w-full")}>
            <figure className="absolute h-[637px] sm:left-1/2 sm:-translate-x-1/2">
              <Image
                src="/anniversary_template.png"
                width={450}
                height={637}
                alt="千里馬　インスタグラム"
              />
            </figure>
        </div>
      </div>
    </>
  );
};
