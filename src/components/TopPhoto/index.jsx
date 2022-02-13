import Image from "next/image";
import clsx from "clsx";
import classes from "/src/components/TopPhoto/TopPhoto.module.css";

export const TopPhoto = (props) => {
  return (
    <>
      <div className={clsx("border w-screen h-[calc(100vh-20rem)] font-fancy")}>
        <div className={clsx("relative w-full h-full bg-slate-800")}>
          <figure>
            <Image
              src="/Product/negitan.jpg"
              layout="fill"
              objectFit="cover"
              alt="千里馬二階"
            />
          </figure>
          <div className={clsx("w-full text-center", classes.img)}>
            <h1 className={clsx("text-white text-5xl")}>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
