import Image from "next/image";
import classes from "/src/components/Banner/Banner.module.css";
import clsx from "clsx";

export function Banner() {
  return (
    <>
      <div className={clsx("border w-screen h-[calc(100vh-4rem)] font-fancy")}>
        <div className={clsx("relative w-full h-full bg-slate-800")}>
          <figure className={classes.image}>
            <Image
              src="/Banner/senrimadoor.jpg"
              layout="fill"
              objectFit="cover"
              alt="千里馬入り口"
            />
          </figure>
          <figure className={classes.image}>
            <Image
              src="/Banner/second.jpg"
              layout="fill"
              objectFit="cover"
              alt="千里馬二階テーブル"
            />
          </figure>
          <figure className={classes.image}>
            <Image
              src="/Banner/interior.jpg"
              layout="fill"
              objectFit="cover"
              alt="千里馬内装"
            />
          </figure>
          <div className={clsx(classes.img)}>
            <h1 className={clsx("text-white text-5xl")}>厳選和牛</h1>
          </div>
        </div>
      </div>
    </>
  );
}
