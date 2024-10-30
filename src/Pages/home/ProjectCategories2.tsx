const improvements = [
  "Reduction in Carbon footprint",
  "Productivity Enhancement",
  "Yield Improvement",
  "Reduction in Cycle time",
  "Quality Improvement",
  "Water Footprint reduction",
  "Solvent/By-product Recovery",
  "Effluent Reduction",
];
const ProjectCategories2 = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">
          Continual <span className="text-blue-500">Improvement Areas</span>
        </h2>
        <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2" />
        <p className="text-gray-300 mt-4">
          Hebei Greenland for Continual improvement programs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mt-16">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories2;
