import {
  FaRocket,
  FaChartLine,
  FaTools,
  FaRecycle,
  FaLeaf,
} from "react-icons/fa"; // Font Awesome Icons

const Expertise = () => {
  const features = [
    {
      title: "Debottlenecking or Capacity Enhancement",
      description: [
        "Increasing Asset Productivity up to ~ 100%",
        "Significant rise with low payback (< 1 Year)",
        "Concept, Design, Piloting & Commercialization",
      ],
      icon: <FaRocket />,
    },
    {
      title: "Yield Improvement in Batch Processes",
      description: [
        "Potential of 1 to 5% Yield rise",
        "Process Optimization",
        "Innovative Cost Advantage",
      ],
      icon: <FaChartLine />,
    },
    {
      title: "Quality Improvements",
      description: [
        "Quality Enhancement",
        "Separation - Azeotropes, Impurities, Isomers",
        "Conversion of Batch to Continuous",
      ],
      icon: <FaTools />,
    },
    {
      title: "Specialized Solutions / Equipment & Design",
      description: [
        "New Synthesis Routes",
        "Effluent Reduction & Water Conservation",
        "Recoveries & Recycles",
      ],
      icon: <FaRecycle />,
    },
    {
      title: "Environmental Sustainability",
      description: [
        "Carbon Footprint & Green Solutions",
        "~10-30% cost reduction",
      ],
      icon: <FaLeaf />,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-customBlue1 mb-4">
          Our Expertise
        </h1>
        <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2" />
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          We offer innovative solutions with a focus on environmental
          sustainability and productivity enhancements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white py-8 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h2>
              </div>
              <ul className="text-left text-gray-600 space-y-3">
                {feature.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
