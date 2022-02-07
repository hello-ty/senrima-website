import Image from "next/image";
import classes from "/src/components/Banner/Banner.module.css";
import clsx from "clsx";

export function Banner() {
  return (
    <>
      <div
        className={clsx("overflow-hidden border w-screen h-auto font-fancy")}
      >
        <div className={clsx("w-[300%] h-full -ml-80  bg-slate-800")}>
          <video
            autoPlay
            loop
            muted
            width={"200%"}
            src="/topmovie.mp4"
            className=""
          ></video>
          <figure
            className={clsx(
              "w-60 h-32 md:w-56 md:h-40 lg:w-96 lg:h-64 z-30",
              classes.photo
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
}
