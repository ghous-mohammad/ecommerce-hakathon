import React from "react";
import Image from "next/image";
import F from "/public/hero/feuture/feature.webp";
import { Button } from "@/components/ui/button";

export default function Information() {
  return (
    <>
      <section className="flex mt-36">
        {/* left side */}
        <div className="relative flex-1">
          {/* background text */}
          <div className="text-6xl font-extrabold text-[#ECEDEF] tracking-wider absolute  w-2/3 -z-50">
            Different from others{" "}
          </div>

          {/* front text main */}
          <div className="flex ">
            {/* left text */}
            <div className="flex flex-col justify-between gap-y-12   text-slate-700">
              {/* top text */}
              <div>
                <h5 className="font-semibold text-base">
                  Using Good Quality Materials
                </h5>
                <p className="text-sm py-3">
                  {" "}
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              {/* bottom text  */}
              <div>
                <h5 className="font-semibold text-base">
                  Modern Fashion Design
                </h5>
                <p className="text-sm py-3">
                  {" "}
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* right text */}
            <div className="flex flex-col justify-between gap-y-12   text-slate-700">
              <div>
                <h5 className="font-semibold text-base">
                  100% Handmade Products
                </h5>
                <p className="text-sm py-3">
                  {" "}
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              {/* bottom text  */}
              <div>
                <h5 className="font-semibold text-base">
                  Discount for Bulk Orders
                </h5>
                <p className="text-sm py-3">
                  {" "}
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="flex flex-1 justify-between gap-x-5">
          {/* image */}
          <div className="w-1/2">
            <Image src={F} alt="feauture" className="" />
          </div>

          <div>
            <p className="text-xs text-slate-600">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>

            <Button className="text-white text-sm w-1/3">
              {" "}
              See All Products{" "}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
