import { PaperClipIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { VFC } from "react";

export const Access: VFC = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          店舗概要
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Store Information
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">会社名</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              焼肉　千里馬
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              1階
              <br />
              カウンターで一人焼肉をお楽しみいただけます
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="relative w-full lg:w-1/2  h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                  src="/Banner/firstcounter.jpeg"
                  alt="一階カウンター"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">2階</dt>
            <dd className="mt-1 text-sm lg:flex text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="relative w-full lg:w-1/2 mb-5 lg:mr-5 h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                  src="/Banner/secondcounter.jpeg"
                  alt="二階カウンター"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-full lg:w-1/2 h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <Image
                  src="/Banner/secondfloor.jpeg"
                  alt="二階通路"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </dd>
            <dt></dt>
            <dd>40名様まで宴会できます</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">席数</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              ２階：テーブル　７席(4〜8人)
              <br />
              １階：テーブル　１席(6人)　/　カウンター　5席(1席/2人)
              <br />
              ※団体様(10名様以上の予約可能)
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">営業時間</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              17:00~23:00(年中無休)
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">予約可否</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              17時~予約可
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">電話番号</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              052-446-7257
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">住所</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              〒453-0015 愛知県名古屋市中村区椿町１８−１６
              <figure className="w-full mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.5446174210815!2d136.87828501540406!3d35.16797616555575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376e6e7cf05cf%3A0x53cfdb2a266e2f4f!2z44CSNDUzLTAwMTUg5oSb55-l55yM5ZCN5Y-k5bGL5biC5Lit5p2R5Yy65qS_55S677yR77yY4oiS77yR77yW!5e0!3m2!1sja!2sjp!4v1642822590364!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </figure>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
