import Image from "next/image";
import clsx from "clsx";
import { VFC } from "react";

export const Banner: VFC = () => {
  const ImageSrc = [
    { src: "/Banner/frontdoor.jpg", alt: "千里馬内装" },
    { src: "/Banner/beatutifultan.jpg", alt: "千里馬内装" },
  ];

  return (
    <>
      <div className={clsx("border w-screen h-[calc(100vh-4rem)] font-fancy")}>
        <div className={clsx("relative h-full w-full bg-slate-800")}>
          {ImageSrc.map((item, index) => (
            <figure
              key={index}
              className="absolute h-full w-full opacity-0 animate-changeImgAnimation first-of-type:animation-delay-10000"
            >
              <Image
                src={item.src}
                layout="fill"
                objectFit="cover"
                alt={item.alt}
              />
            </figure>
          ))}
          <figure
            className={clsx(
              "w-60 h-40 md:w-56 md:h-48 lg:w-96 lg:h-64 z-30 hidden lg:block absolute top-0 right-0 bottom-0 left-0 m-auto opacity-80"
            )}
          >
            <Image
              src="/logotop.png"
              layout="fill"
              objectFit="cover"
              alt="千里馬内装"
            />
          </figure>
        </div>
      </div>
    </>
  );
};
