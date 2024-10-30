const Methodology = () => {
  const sections = [
    {
      phase: "Initiating",
      title: "Authorize new project or phase.",
      description: "Identify needs, justification, and objectives.",
      items: [
        "Project Charter",
        "Stakeholder Register",
        "Pre-planning documents (optional)",
        "Contract (optional)",
      ],
    },
    {
      phase: "Planning",
      title: "Plan the work to be executed.",
      description:
        "Develop an integrated project management plan to achieve project objectives.",
      items: [
        "Scope Management Plan",
        "Schedule Management Plan",
        "Cost Management Plan",
        "Quality Management Plan",
      ],
    },
    {
      phase: "Executing",
      title: "Direct and guide execution.",
      description:
        "Acquire the project team, conduct procurement, complete the work.",
      items: [
        "Project Deliverables",
        "Work Performance",
        "Team Performance",
        "Communications",
      ],
    },
    {
      phase: "Monitoring and Controlling",
      title: "Monitor and control project performance.",
      description:
        "Track and review progress, perform change control, and take corrective actions as needed.",
      items: [
        "Change Logs",
        "Approved Change Requests",
        "Schedule Forecasts",
        "Cost Forecasts",
      ],
    },
    {
      phase: "Closing",
      title: "End project or phase.",
      description:
        "Finalize all activities, obtain final acceptance, and formally close the project or phase.",
      items: [
        "Final Product, Service, or Result",
        "Lessons Learned",
        "Updated Project Documents",
      ],
    },
  ];

  return (
    <section className="bg-black py-20 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Project <span className="text-customBlue1">Methodology</span>
        </h2>

        <div className="w-16 h-[1px] bg-customBlue1 mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm md:text-base">
          Following Project Methodology by Hebei Greenland for continual
          improvement programs.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-0">
        {/* Central Line */}
        <div className="absolute md:w-1 h-full bg-blue-400 left-1/2 transform -translate-x-1/2"></div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`mb-10 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Left or Right Content */}
            <div className=" w-full md:w-5/12 px-4">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-customBlue1 text-black rounded-full flex items-center justify-center font-semibold shadow-md">
                    {index + 1}
                  </div>
                  <h3 className="text-blue-300 text-lg font-semibold">
                    {section.phase}
                  </h3>
                </div>
                <h4 className="text-xl font-bold mb-2">{section.title}</h4>
                <p className="text-gray-400 mb-4">{section.description}</p>
                <ul className="text-gray-300 space-y-2 pl-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-300 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connector Dot */}
            {/* <div className="hidden md:flex w-10 h-10 bg-blue-400 rounded-full items-center justify-center shadow-lg text-black font-semibold z-10">
              {index + 1}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodology;
