import Image from "next/image";
import classes from "/src/components/Banner/Banner.module.css";
import clsx from "clsx";

export function Banner() {
  const ImageSrc = [
    { src: "/Banner/beatutifultan.jpg", alt: "千里馬内装" },
    { src: "/Banner/frontdoor.jpg", alt: "千里馬内装" },
    { src: "/Banner/firstcounter.jpeg", alt: "千里馬内装" },
    { src: "/Banner/secondcounter.jpeg", alt: "千里馬内装" },
    { src: "/Banner/secondfloor.jpeg", alt: "千里馬内装" },
  ];

  return (
    <>
      <div className={clsx("border w-screen h-[calc(100vh-4rem)] font-fancy")}>
        <div className={clsx("relative h-full w-full bg-slate-800")}>
          {ImageSrc.map((item, index) => (
            <figure
              key={index}
              className={clsx("absolute h-full w-full opacity-0", classes.img)}
            >
              <Image
                src={item.src}
                layout="fill"
                objectFit="cover"
                alt={item.alt}
              />
            </figure>
          ))}
          {/* <figure
            className={clsx(
              "w-60 h-40 md:w-56 md:h-48 lg:w-96 lg:h-64 z-30",
              classes.photo
            )}
          >
            <Image
              src="/logotop.png"
              layout="fill"
              objectFit="cover"
              alt="千里馬内装"
            />
          </figure> */}
        </div>
      </div>
    </>
  );
}
