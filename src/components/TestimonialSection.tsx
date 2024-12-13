import Image from "next/image";
import React from "react";

function TestimonialSection() {
  const testimonials = [
    {
      name: "Sutebo J.",
      feedback:
        "Rasa teh melati dari Teh Daun benar-benar luar biasa! Harumnya khas dan sangat menenangkan.",
      image: "/images/Testiprofile/kebos.jpeg",
    },
    {
      name: "Kent NA.",
      feedback:
        "Teh lemonnya segar sekali! Cocok untuk diminum di siang hari. Saya jadi langganan!",
      image: "/images/Testiprofile/kent.jpeg",
    },
    {
      name: "Zaki FR.",
      feedback:
        "Pelayanan cepat dan kualitas rasa sangat baik. Anak-anak saya juga suka teh hijau mereka.",
      image: "/images/Testiprofile/zaki.jpeg",
    },
  ];

  return (
    <section className="py-20">
      <h1 className="font-berkshire text-3xl font-bold text-primary text-center mb-10">
        Apa Kata Pelanggan Kami
      </h1>
      <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 w-full gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white mx-auto w-full h-full shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              height={100}
              width={100}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
            />
            <p className="text-gray-600 italic mb-4">
              &quot;{testimonial.feedback}&quot;
            </p>
            <h4 className="font-semibold text-primary mt-auto">
              {testimonial.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
