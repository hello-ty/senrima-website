import Image from "next/image";
import clsx from "clsx";
import { VFC } from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  src: string;
  content: string;
  tab1: string;
  tab2: string;
  alt: string;
  href?: string;
};

export const Card: VFC<CardProps> = (props) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 lg:mb-0 h-auto border">
        <figure className={clsx("relative w-full h-52 border bg-slate-500")}>
          <Image
            src={props.src}
            layout="fill"
            objectFit="cover"
            alt={props.alt}
          />
        </figure>
        <div className="px-6 py-3">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base text-left">{props.content}</p>
        </div>
        <div className="px-6">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.tab1}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.tab2}
          </span>
        </div>
        {props.href ? (
          <div className="py-3">
            <Link href={props.href}>
              <a>
                <button className="btn btn-outline btn-sm">詳細はこちら</button>
              </a>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};
