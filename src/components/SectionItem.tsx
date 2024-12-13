import { Coffee, Leaf, CupSoda } from "lucide-react"; // Example icons, replace with your own

export default function TehDaunSections() {
  // Define the data for each section
  const sections = [
    {
      icon: <Coffee className="text-primary text-4xl mb-4 w-10 h-10" />,
      title: "Kualitas Terbaik",
      description:
        "Teh Daun menggunakan daun teh pilihan, dipetik langsung dari kebun terbaik, memastikan cita rasa terbaik di setiap tegukan.",
    },
    {
      icon: <Leaf className="text-primary text-4xl mb-4 w-10 h-10" />,
      title: "Rasa Alami",
      description:
        "Setiap daun teh diproses dengan cermat untuk menjaga rasa alami dan kesegaran yang sempurna, menghadirkan kehangatan dalam setiap tegukan.",
    },
    {
      icon: <CupSoda className="text-primary text-4xl mb-4 w-10 h-10" />,
      title: "Kenyamanan dalam Setiap Tegukan",
      description:
        "Nikmati teh yang menenangkan dan penuh rasa, diracik dengan bahan alami terbaik untuk menghadirkan kenyamanan di setiap momen.",
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-screen-xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold text-primary font-berkshire">
          Kenapa memilih Teh Daun?
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center text-center max-w-xs w-full"
          >
            {section.icon} {/* Icon */}
            <h3 className="text-xl font-semibold text-primary mb-2">
              {section.title}
            </h3>
            <p className="text-zinc-500">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
