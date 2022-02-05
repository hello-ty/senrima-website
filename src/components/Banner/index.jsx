import Image from "next/image";
import classes from "/src/components/Banner/Banner.module.css";
import clsx from "clsx";

export function Banner() {
  return (
    <>
      <div className={clsx("border w-screen h-[calc(100vh-4rem)]")}>
        <div className={clsx("relative w-full h-full bg-slate-800")}>
          <figure className={classes.image}>
            <Image
              src="/Banner/senrimadoor.jpg"
              layout="fill"
              objectFit="cover"
            />
          </figure>
          <figure className={classes.image}>
            <Image src="/Banner/second.jpg" layout="fill" objectFit="cover" />
          </figure>
          <figure className={classes.image}>
            <Image src="/Banner/interior.jpg" layout="fill" objectFit="cover" />
          </figure>
        </div>
      </div>
    </>
  );
}
