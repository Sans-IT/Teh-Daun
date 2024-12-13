import MaxWidthDiv from "@/components/MaxWidthDiv";
import OrderCTASection from "@/components/OrderCTASection";
import TestimonialSection from "@/components/TestimonialSection";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Varian Rasa Teh Daun | Temukan Favorit Anda",
  description:
    "Jelajahi berbagai varian rasa Teh Daun yang menyegarkan dan alami, seperti Teh Hijau, Teh Lemon, dan Teh Melati. Pilihan sempurna untuk menemani hari Anda.",
  keywords: [
    "Teh Daun",
    "Varian Rasa Teh",
    "Teh Hijau",
    "Teh Lemon",
    "Teh Melati",
    "Minuman Segar",
    "Teh Alami",
  ],
  openGraph: {
    title: "Varian Rasa Teh Daun",
    description:
      "Teh Daun menawarkan varian rasa terbaik untuk Anda nikmati. Temukan pilihan favorit Anda seperti Teh Hijau, Teh Lemon, dan Teh Melati.",
    url: "https://www.tehdaun.com/variant",
    images: [
      {
        url: "/images/varianrasa/lemontea.jpg",
        width: 1200,
        height: 630,
        alt: "Pilihan varian rasa Teh Daun",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varian Rasa Teh Daun | Pilihan Segar untuk Anda",
    description:
      "Nikmati kesegaran alami dari varian rasa Teh Daun seperti Teh Hijau, Teh Lemon, dan Teh Melati.",
    images: ["/images/varianrasa/lemontea.jpg"],
  },
};

export default function Variant() {
  const variants = [
    {
      name: "Teh Hijau",
      description: "Kesegaran alami dengan aroma khas daun teh hijau.",
      image: "/images/varianrasa/lemontea.jpg",
    },
    {
      name: "Teh Lemon",
      description: "Kombinasi rasa teh yang segar dan keasaman lemon.",
      image: "/images/varianrasa/lemontea.jpg",
    },
    {
      name: "Teh Melati",
      description: "Nikmati harum bunga melati yang memanjakan.",
      image: "/images/varianrasa/lemontea.jpg",
    },
  ];

  return (
    <MaxWidthDiv className="py-20">
      {/* varian rasa section */}
      <section>
        <h1 className="text-3xl font-berkshire font-bold text-primary mb-8 text-center">
          Varian Rasa
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 mx-auto items-center gap-8">
          {variants.map((variant, index) => (
            <div
              key={index}
              className="bg-white mx-auto shadow-md rounded-lg w-fit h-full overflow-hidden"
            >
              <Image
                src={variant.image}
                alt={variant.name}
                height={500}
                width={500}
                className="object-cover mx-auto aspect-square"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {variant.name}
                </h3>
                <p className="text-gray-600">{variant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* testimoni section */}
      <TestimonialSection />

      {/* CTA section */}
      <OrderCTASection />
    </MaxWidthDiv>
  );
}
