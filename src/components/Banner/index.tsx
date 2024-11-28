import Image from "next/image";
import clsx from "clsx";
import { VFC } from "react";

export const Banner: VFC = () => {
  return (
    <>
      <div className={clsx("border-t-2 w-screen h-auto font-fancy")}>
        <div className={clsx("relative h-[637px] w-full")}>
            <figure className="absolute h-[637px] sm:left-1/2 sm:-translate-x-1/2">
              <Image
                src="/new_year_end_party.png"
                width={450}
                height={637}
                alt="新忘年会 チラシ"
              />
            </figure>
        </div>
      </div>
    </>
  );
};
