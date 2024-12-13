import React from "react";
import MaxWidthDiv from "@/components/MaxWidthDiv";
import { CarouselPlugin } from "@/components/MainCarousel";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionItem from "@/components/SectionItem";
import Image from "next/image";
import Link from "next/link";
import OrderCTASection from "@/components/OrderCTASection";
import TestimonialSection from "@/components/TestimonialSection";

function Home() {
  return (
    <div>
      {/* hero section */}
      <section className=" py-10">
        <MaxWidthDiv>
          <div className="my-5 grid sm:grid-cols-2 grid-cols-1 gap-2 items-center">
            <div className="text-center sm:text-start flex flex-col gap-5 text-balance order-2 sm:order-none">
              <h1 className="text-4xl sm:text-5xl font-berkshire">
                &quot; Teh Daun -
                <span className="text-primary">
                  Kesegaran Alami Dalam Setiap Tegukan
                </span>
                &quot;
              </h1>
              <p className="text-zinc-500 sm:text-lg">
                &quot;Temukan kehangatan dan kenikmatan dari teh berkualitas
                tinggi yang dipetik langsung dari kebun pilihan. Teh Daun
                menawarkan rasa alami dan segar yang diracik dengan cermat untuk
                menghadirkan pengalaman teh yang sempurna setiap saat.&quot;
              </p>
              <Link
                className={`${buttonVariants({
                  size: "lg",
                })} sm:mx-0 mx-auto w-fit text-lg py-6`}
                href={"/variant"}
              >
                Lihat Varian Rasa
                <ArrowRight />
              </Link>
            </div>
            <div className="">
              <Image
                width="500"
                height="500"
                src="/tehdaun.png"
                alt="Teh Daun"
                className="w-1/3 sm:w-full md:w-1/2 mx-auto"
              />
            </div>
          </div>
        </MaxWidthDiv>
      </section>

      {/* item section */}
      <section className="bg-emerald-50 bg-opacity-60 my-20">
        <MaxWidthDiv>
          <SectionItem />
        </MaxWidthDiv>
      </section>

      {/* carousel section */}
      <section className="my-10">
        <MaxWidthDiv>
          <div className="text-center">
            <h2 className="text-4xl font-berkshire text-primary my-5">
              Keterbukaan dengan Mitra Usaha
            </h2>
          </div>
          <CarouselPlugin />
        </MaxWidthDiv>
      </section>

      <MaxWidthDiv className="mb-16">
        {/* Testimonial section */}
        <TestimonialSection />

        {/* CTA Section */}
        <OrderCTASection />
      </MaxWidthDiv>
    </div>
  );
}

export default Home;
