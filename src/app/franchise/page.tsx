import React from "react";
import MaxWidthDiv from "@/components/MaxWidthDiv";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Teh Daun | Peluang Bisnis Menguntungkan",
  description:
    "Jadilah mitra franchise Teh Daun dan nikmati peluang bisnis menjanjikan. Pilih dari berbagai paket franchise yang sesuai dengan kebutuhan Anda.",
  keywords: [
    "Franchise Teh Daun",
    "Peluang Bisnis Teh",
    "Paket Franchise Teh Daun",
    "Mitra Bisnis Minuman",
    "Usaha Minuman Teh",
    "Franchise Minuman",
  ],
  openGraph: {
    title: "Franchise Teh Daun | Peluang Bisnis Menguntungkan",
    description:
      "Bergabunglah dengan Teh Daun sebagai mitra franchise. Pilih paket franchise yang cocok dan mulailah perjalanan bisnis Anda bersama kami.",
    url: "https://www.tehdaun.com/franchise",
    images: [
      {
        url: "/images/franchise/franchise1.jpg",
        width: 1200,
        height: 630,
        alt: "Franchise Teh Daun",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franchise Teh Daun | Peluang Bisnis Menguntungkan",
    description:
      "Gabung bersama Teh Daun sebagai mitra franchise. Mulailah bisnis minuman teh yang menjanjikan dengan kami.",
    images: ["/images/franchise/franchise1.jpg"],
  },
};

export default function Franchise() {
  const packages = [
    {
      type: "Tipe A",
      price: "Rp 50.000.000",
      image: "/images/franchise/franchise1.jpg",
      features: [
        "Gerobak eksklusif dengan branding Teh Daun",
        "Bahan baku awal untuk 500 porsi",
        "Promosi media sosial awal",
        "Bimbingan bisnis selama 6 bulan",
      ],
    },
    {
      type: "Tipe B",
      price: "Rp 35.000.000",
      image: "/images/franchise/franchise1.jpg",
      features: [
        "Stand sederhana dengan branding Teh Daun",
        "Bahan baku awal untuk 300 porsi",
        "Promosi media sosial awal",
        "Bimbingan bisnis selama 3 bulan",
      ],
    },
    {
      type: "Tipe C",
      price: "Rp 20.000.000",
      image: "/images/franchise/franchise1.jpg",
      features: [
        "Paket bahan baku lengkap untuk 200 porsi",
        "Panduan operasional bisnis",
        "Promosi media sosial awal",
      ],
    },
  ];

  return (
    <section className="py-16">
      <MaxWidthDiv>
        <div className="flex flex-col items-center text-center gap-6 mb-10">
          <h2 className="text-3xl font-berkshire text-primary">
            Bergabunglah dengan <span className="text-black">Teh Daun</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Jadilah bagian dari perjalanan kami untuk membawa kelezatan teh
            berkualitas tinggi kepada lebih banyak orang. Bergabunglah sebagai
            mitra franchise kami dan nikmati peluang bisnis yang menjanjikan!
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 max-w-4xl">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Keuntungan Franchise
              </h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Brand yang sudah dikenal luas.</li>
                <li>Bimbingan dan pelatihan penuh.</li>
                <li>Pasokan bahan baku berkualitas.</li>
                <li>Strategi pemasaran yang efektif.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Persyaratan
              </h3>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Komitmen untuk menjalankan bisnis sesuai standar.</li>
                <li>Modal awal yang mencukupi.</li>
                <li>Lokasi yang strategis.</li>
                <li>Antusiasme dalam menyajikan teh terbaik.</li>
              </ul>
            </div>
          </div>

          {/* pilihan franchise */}
          <div className="text-center mt-10 mb-5">
            <h2 className="text-3xl font-berkshire text-primary">
              Pilihan Paket Franchise
              <span className="text-black"> Teh Daun</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih paket franchise yang sesuai dengan kebutuhan dan kemampuan
              Anda. Mulai perjalanan bisnis Anda bersama Teh Daun!
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-emerald-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all flex flex-col"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {pkg.type}
                </h3>
                <Image
                  src={pkg.image}
                  alt={pkg.type}
                  width={500}
                  height={500}
                />
                <p className="text-xl font-semibold text-gray-700 my-6">
                  {pkg.price}
                </p>
                <ul className="text-left text-gray-600 mb-6 list-disc list-inside">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button className="mt-auto w-full py-3 text-lg">
                  Pilih Paket
                </Button>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthDiv>
    </section>
  );
}
