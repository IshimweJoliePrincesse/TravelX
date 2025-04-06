import { Globe, FileText, CreditCard } from "lucide-react";

export default function TravelServices() {
  const services = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Food and Wine Tours",
      highlighted: true,
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac.",
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Travel Opportunities",
      highlighted: false,
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-white" />,
      title: "Solo Travel Planning",
      highlighted: false,
      description:
        "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-start">
                <div className="bg-[#8BC34A] rounded-full p-4 mb-4">
                  {service.icon}
                </div>
                <h3
                  className={`text-lg font-medium mb-2 ${
                    service.highlighted ? "bg-blue-200 px-2 py-0.5" : ""
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
