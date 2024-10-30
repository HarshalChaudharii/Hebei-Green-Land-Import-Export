const WhyChoose = () => {
  const features = [
    {
      title: "We're Reliable",
      description:
        "For our customers, this is key. When we say we will deliver something - WE mean it.",
      icon: "fas fa-check-circle",
    },
    {
      title: "We're Easy to Work With",
      description:
        "It's not just what we do, it's how we operate. We keep you informed at all times, and our technical support teams are responsible.",
      icon: "fas fa-handshake",
    },
    {
      title: "We're Knowledgeable",
      description: "Well-experienced & qualified team of experts.",
      icon: "fas fa-graduation-cap",
    },
    {
      title: "We Add Value",
      description:
        "Hebei Greenland means performance promised is performance delivered.",
      icon: "fas fa-chart-line",
    },
  ];

  return (
    <div className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white">
            Why Choose <span className="text-blue-500">Us?</span>
          </h2>
          <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2" />
          <p className="text-gray-300 text-lg mt-2">
            Discover why Hebei Greenland is the right partner for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-center p-6 rounded-xl shadow-md transition duration-500 group hover:bg-blue-500 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-500 rounded-full">
                <i className={`${feature.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-black transition-all duration-500 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200  transition-all duration-500 mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
