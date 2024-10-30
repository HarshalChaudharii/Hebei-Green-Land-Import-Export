import { Hexagon } from "lucide-react";

const categories = [
  { name: "R&D", description: "Research and Development initiatives" },
  {
    name: "Business Development",
    description: "Expanding market opportunities",
  },
  { name: "Production", description: "Optimizing manufacturing processes" },
  {
    name: "Process Engineering",
    description: "Improving operational efficiency",
  },
  { name: "EHS", description: "Environment, Health, and Safety programs" },
  { name: "Purchase", description: "Strategic procurement and sourcing" },
];

export default function ProjectCategories() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">
          Project <span className="text-blue-500">Categories</span>
        </h2>
        <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2" />
        <p className="text-gray-300 mt-4">
          Following Project Categories Followed by Hebei Greenland for Continual
          improvement programs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Hexagon className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Continual <span className="text-blue-500">Improvement Areas</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {improvements.map((improvement, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white rounded-lg p-4 transition duration-300 transform hover:scale-105"
              >
                <p className="font-medium text-center">{improvement}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
