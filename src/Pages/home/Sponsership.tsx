import sponcer1 from "@/assets/images/sponcer1.png";
import sponcer2 from "@/assets/images/sponcer2.png";
import sponcer3 from "@/assets/images/sponcer3.png";

const Sponsorship = () => {
  const sponsors = [
    { id: 1, logo: sponcer1, name: "Crystal" },
    { id: 2, logo: sponcer2, name: "Sajjan India Limited" },
    { id: 3, logo: sponcer3, name: "NEXXUS Carbon  Private LTD" },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold ">
            Our <span className="text-blue-500">Client</span>
          </h2>
          <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-2 mb-6" />
          <p className="text-gray-600 text-lg mt-2">
            We are grateful to our client for their support.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl max-w-xs"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="mx-auto mb-4 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
