import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import member1 from "@/assets/images/member1.png";
import member2 from "@/assets/images/member2.png";
import member3 from "@/assets/images/member3.png";

const teamMembers = [
  {
    id: 1,
    name: "Li Kun (Andy)",
    role: "Managing Director",
    description: (
      <>
        {" "}
        <strong>
          International business graduate with 12 years chemical industry
          experience.
        </strong>{" "}
        Having a professional techno-commercial experience of 12 years in
        chemical industry with hands on all business processes, business
        strategy, project execution, technology transfer, plant operation,
        developing and stabilizing new businesses.
      </>
    ),
    image: member1,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Rahul Shashikant Sasle",
    role: "International Director",
    description: `Chemical Graduate; MBA in Import & Exports Management + Mandarin Chinese Negotiator. 
      17 years of Global EXIM in Chemicals, equipment and technology making well-versed and strong successful associate for EXIM, 
      procurement supply chain and Project business solutions with a wide experience and network in India, China, Egypt, Korea, 
      Japan, South Africa, Russia, Ukraine, Indonesia, Turkey, Malaysia, Thailand, Kazakhstan & United Arab Emirates.`,
    image: member2,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Santosh N Avatade",
    role: "Technical Head",
    description: (
      <>
        Chemical Engineer with management education and 16+ years experience in
        design & projects. Having a professional techno-commercial experience of
        16 years in chemical industry with hands on all{" "}
        <strong>
          business processes, business strategy, project execution, technology
          transfer, plant operation, developing and stabilizing new businesses
        </strong>{" "}
      </>
    ),
    image: member3,
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const AboutTeamDetail = () => (
  <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20 px-4">
    <div className="container mx-auto text-center mb-12">
      <h2 className="text-4xl font-semibold text-white">
        Meet Our <span className="text-blue-500">Triumvirate Team</span>
      </h2>
      <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2" />
    </div>
    <div className="max-w-4xl mx-auto grid grid-cols-1  gap-8">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="w-full bg-white rounded-lg shadow-lg py-6 px-6 hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col md:flex-row items-center md:items-start justify-between "
        >
          <div className="w-[30%] flex flex-col items-center justify-center  mb-4">
            <div className="w-36 h-36 rounded-full border-2 border-blue-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="mt-4 flex justify-center space-x-4 ">
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
          <div className="w-full text-center md:text-start ">
            <h3 className="text-2xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-blue-500 font-medium">{member.role}</p>
            <p className="text-gray-600 mt-4 whitespace-pre-line text-justify">
              {member.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutTeamDetail;
