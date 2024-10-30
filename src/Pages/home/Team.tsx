import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import member1 from "@/assets/images/member1.png";
import member2 from "@/assets/images/member2.png";
import member3 from "@/assets/images/member3.png";

const teamMembers = [
  {
    id: 1,
    name: "Li Kun (Andy)",
    role: "Managing Director",
    description:
      "International business graduate with 12 years in the chemical industry. Skilled in business processes, strategy, project execution, technology transfer, and plant operation.",
    image: member1,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Rahul Shashikant Sasle",
    role: "International Director",
    description:
      "Chemical Graduate, MBA in Import & Exports Management, and Mandarin Chinese negotiator with 17 years in global EXIM for chemicals and equipment.",
    image: member2,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Santosh N Avatade",
    role: "Technical Head",
    description:
      "Chemical Engineer with management education and 16+ years in design and projects, focusing on strategy, project execution, and technology transfer.",
    image: member3,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const Team = () => (
  <div className="bg-gray-100 py-20 px-4">
    <div className="container mx-auto text-center mb-12">
      <h2 className="text-4xl font-semibold ">
        Meet Our <span className="text-blue-500">Triumvirate Team</span>
      </h2>
      <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2" />
    </div>

    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="w-[90%] bg-white rounded-lg shadow-lg py-6 px-2 text-center hover:shadow-2xl transition transform hover:-translate-y-2"
        >
          <div className="w-36 h-36 mx-auto rounded-full border-2 border-blue-500 mb-4 ">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain rounded-full "
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-800">
            {member.name}
          </h3>
          <p className="text-blue-500 font-medium">{member.role}</p>
          <p className="text-gray-600  mt-4">{member.description}</p>
          <div className="mt-6 flex  justify-center space-x-4">
            <a
              href={member.socials.linkedin}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
            <a
              href={member.socials.twitter}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaTwitter />
            </a>
            <a
              href={member.socials.instagram}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
