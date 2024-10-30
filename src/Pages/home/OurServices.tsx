import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faDraftingCompass,
  faCogs,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons"; // Font Awesome Icons

const services = [
  {
    id: 1,
    phase: "CONCEPTUAL PHASE",
    tasks: [
      "Problem Statement",
      "Preliminary Design Basis",
      "Base Data Collection",
      "Project Concept Note",
      "Preliminary Cost Estimates",
      "Project Schedule",
      "Project Feasibility Report",
    ],
    icon: faLightbulb,
  },
  {
    id: 2,
    phase: "DESIGN & ENGG PHASE",
    tasks: [
      "Data Analysis",
      "Identification of Bottlenecks",
      "Prioritization",
      "Basic Engineering",
      "Final Costing",
      "Final Feasibility",
      "Schedule",
    ],
    icon: faDraftingCompass,
  },
  {
    id: 3,
    phase: "EXECUTION PHASE",
    tasks: [
      "Procurement Support",
      "Project Management",
      "Commissioning Support",
      "Plant SOPs",
      "Trial Runs",
      "Validation",
      "Closure Report",
    ],
    icon: faCogs,
  },
  {
    id: 4,
    phase: "MAINTAIN",
    tasks: [
      "Capacity Enhancement",
      "Yield Improvement",
      "Batch Cycle Time",
      "Process Optimization",
      "Quality Enhancement",
    ],
    icon: faSyncAlt,
  },
];

const OurServices = () => {
  return (
    <div className="w-full bg-gray-100 pb-20 pt-20">
      <div className="max-w-7xl mx-auto text-center px-4 font-semibold">
        <h1 className="text-4xl mb-2">
          Our <span className="text-customBlue1">Services</span>{" "}
        </h1>
        <div className="w-16 mx-auto h-[1px] bg-customBlue1 mb-6" />

        <h2 className="text-xl text-gray-700 mb-12">
          Comprehensive Solutions for Every Phase of Your Project
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <FontAwesomeIcon icon={service.icon} className="text-3xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.phase}
                </h4>
              </div>
              <ul className="text-left text-gray-600 space-y-2 pl-4">
                {service.tasks.map((task, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-500">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
