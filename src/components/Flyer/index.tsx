import Image from "next/image";
import Link from "next/link";
import { VFC } from "react";

export const Flyer: VFC = () => {
  return (
    <div className="card bg-base-100 w-full h-auto items-center mt-10">
      <Link href="/PDF/new_year_end_party.pdf">
        <figure >
          <Image
            src="/new_year_end_party.png"
            width={450}
            height={637}
            alt="新忘年会 チラシ"
          />
        </figure>
      </Link>
    </div>
  );
};
