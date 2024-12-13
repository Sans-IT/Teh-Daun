import { CarouselPlugin } from "@/components/MainCarousel";
import MaxWidthDiv from "@/components/MaxWidthDiv";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tentang Kami | Teh Daun",
  description:
    "Teh Daun adalah UMKM yang menyajikan kesegaran minuman es teh dari bahan alami berkualitas. Temukan kisah kami dan dedikasi kami untuk memberikan pengalaman minum es teh yang tak terlupakan.",
  keywords: [
    "Tentang Teh Daun",
    "UMKM minuman es teh",
    "Minuman teh alami",
    "Kisah Teh Daun",
    "Es teh segar",
    "Produk Teh Daun",
  ],
  openGraph: {
    title: "Tentang Kami | Teh Daun",
    description:
      "Teh Daun menghadirkan minuman es teh segar dari bahan alami berkualitas. Nikmati cita rasa unik dan dedikasi kami dalam memberikan kebahagiaan melalui setiap tegukan.",
    url: "https://www.tehdaun.com/about-us",
    images: [
      {
        url: "/images/about-us/about-us.jpg", // Ganti dengan gambar representatif
        width: 1200,
        height: 630,
        alt: "Tentang Teh Daun",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami | Teh Daun",
    description:
      "Pelajari lebih lanjut tentang Teh Daun, UMKM yang menghadirkan kesegaran es teh alami dan pengalaman minum yang tak terlupakan.",
    images: ["/images/about-us/about-us.jpg"], // Ganti sesuai gambar
  },
};

function AboutUs() {
  return (
    <div>
      <MaxWidthDiv className="my-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 font-berkshire">
            Tentang Kami
          </h2>
          <CarouselPlugin />
          <p className="text-lg text-gray-700 leading-relaxed pt-10">
            <span className="font-semibold">Teh Daun</span> adalah UMKM yang
            menghadirkan kesegaran minuman es teh yang diracik dari bahan-bahan
            alami berkualitas. Kami percaya bahwa setiap gelas es teh mampu
            memberikan kebahagiaan, kesegaran, dan semangat baru untuk dinikmati
            kapan saja.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Semua varian es teh kami dibuat dengan penuh perhatian, memadukan
            cita rasa daun teh pilihan dan bahan alami yang menyegarkan. Dari
            rasa klasik yang sederhana hingga kombinasi unik, setiap tegukan
            dirancang untuk memanjakan lidah Anda.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Dengan semangat inovasi dan pelayanan terbaik,{" "}
            <span className="font-semibold">Teh Daun</span> terus berupaya
            memberikan pengalaman minum es teh yang tak terlupakan. Kami hadir
            untuk melengkapi setiap momen Anda, mulai dari waktu santai hingga
            kebersamaan bersama keluarga dan teman.
          </p>
          <Button className="mt-8 px-6 py-3 bg-primary text-white text-lg font-medium rounded-md shadow-lg hover:bg-primary-dark">
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </MaxWidthDiv>
    </div>
  );
}

export default AboutUs;
