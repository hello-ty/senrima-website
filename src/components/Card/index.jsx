import Image from "next/image";
import clsx from "clsx";

export function Card(props) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-10 lg:mb-0">
        <figure className={clsx("relative w-full h-52 border bg-slate-500")}>
          <Image
            src={props.src}
            layout="fill"
            objectFit="cover"
            alt={props.alt}
          />
        </figure>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.content}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.tab1}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.tab2}
          </span>
        </div>
      </div>
    </>
  );
}
