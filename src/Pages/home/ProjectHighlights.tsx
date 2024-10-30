import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FaBullseye,
  FaMoneyBillWave,
  FaPiggyBank,
  FaStopwatch,
} from "react-icons/fa";

const ProjectTable = () => {
  const projects = [
    {
      title: "Debottlenecking Prod-1",
      baseCase: "28 TPM",
      target: "35 TPM",
      capex: "Rs. 300 Lac",
      savings: "Rs. 1500 Lac/Year",
      payback: "3 Months",
    },
    {
      title: "Debottlenecking Prod-2",
      baseCase: "45 TPM",
      target: "55 TPM",
      capex: "Rs. 200 Lac",
      savings: "Rs. 400 Lac/Year",
      payback: "6 Months",
    },
    {
      title: "Solvent Recovery-2",
      baseCase: "70%",
      target: "90%",
      capex: "Rs. 400 Lac",
      savings: "Rs. 500 Lac/Year",
      payback: "10 Months",
    },
    {
      title: "LLE System Improvement",
      baseCase: "75%",
      target: "85%",
      capex: "Rs. 300 Lac",
      savings: "Rs. 300 Lac/Year",
      payback: "12 Months",
    },
    {
      title: "Steam Saving (Ejectors)",
      baseCase: "50 KLD",
      target: "Zero",
      capex: "Rs. 420 Lac",
      savings: "Rs. 320 Lac/Year",
      payback: "15 Months",
    },
    {
      title: "Absorption Sys Losses & Cap",
      baseCase: "Existing",
      target: "20%+",
      capex: "Rs. 200 Lac",
      savings: "Rs. 300 Lac/Year",
      payback: "8 Months",
    },
    {
      title: "RM Cost Reduction",
      baseCase: "18 $ /Kg",
      target: "14 $ /Kg",
      capex: "Rs. 0 Lac",
      savings: "Rs. 30 Lac/Month",
      payback: "Zero Days",
    },
    {
      title: "R&D Project - Cost Reduction",
      baseCase: "35 $ /Kg",
      target: "28 $ /Kg",
      capex: "Rs. 0 Lac",
      savings: "Rs. 56 Lac/Month",
      payback: "Zero Days",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white">
            Key <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2" />
          <p className="text-gray-300 text-lg mt-2">
            Explore our impactful projects with comprehensive details.
          </p>
        </div>

        <Table className="bg-transparent  text-white shadow-lg rounded-lg overflow-hidden ">
          <TableCaption className="mt-8 text-sm mb-6 text-gray-400">
            Overview of recent key projects.
          </TableCaption>
          <TableHeader className="bg-gray-800 ">
            <TableRow className="">
              <TableHead className="w-[350px] py-4  pl-3">Projects</TableHead>
              <TableHead className="py-4">
                <div className="flex items-center  space-x-2">
                  <FaBullseye className="text-blue-400" />
                  <span>Base Case</span>
                </div>
              </TableHead>
              <TableHead className="py-4">
                <div className="flex items-center  space-x-2">
                  <FaBullseye className="text-green-400" />
                  <span>Target</span>
                </div>
              </TableHead>
              <TableHead className="py-4">
                <div className="flex items-center  space-x-2">
                  <FaMoneyBillWave className="text-yellow-400" />
                  <span>Capex</span>
                </div>
              </TableHead>
              <TableHead className=" py-4">
                <div className="flex items-center  space-x-2">
                  <FaPiggyBank className="text-red-400" />
                  <span>Savings</span>
                </div>
              </TableHead>
              <TableHead className="py-4">
                <div className="flex items-center  space-x-2">
                  <FaStopwatch className="text-purple-400" />
                  <span>Payback</span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow
                key={index}
                className="bg-gray-800 bg-opacity-70 hover:bg-gray-700 transition-transform duration-200 transform hover:scale-[1.02] hover:shadow-xl"
              >
                <TableCell className="py-4 font-medium flex items-center space-x-2 ml-3">
                  <FaBullseye className="text-blue-400" />
                  <span>{project.title}</span>
                </TableCell>
                <TableCell className="py-4">{project.baseCase}</TableCell>
                <TableCell className="py-4">{project.target}</TableCell>
                <TableCell className="py-4">{project.capex}</TableCell>
                <TableCell className="py-4">{project.savings}</TableCell>
                <TableCell className="py-4">{project.payback}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProjectTable;
