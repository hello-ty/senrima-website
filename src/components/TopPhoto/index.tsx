import Image from "next/image";
import clsx from "clsx";
import { VFC } from "react";

type TopPhotoProps = {
  title: string;
};

export const TopPhoto: VFC<TopPhotoProps> = (props) => {
  return (
    <>
      <div className={clsx("border w-screen h-[calc(100vh-20rem)] font-fancy")}>
        <div className={clsx("relative w-full h-full bg-slate-800")}>
          <figure>
            <Image
              src="/NewMenu/negitan.jpg"
              layout="fill"
              objectFit="cover"
              alt="ネギタン"
            />
          </figure>
          <div
            className={clsx(
              "w-full text-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] drop-shadow-2xl"
            )}
          >
            <h1 className={clsx("text-white text-5xl")}>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
