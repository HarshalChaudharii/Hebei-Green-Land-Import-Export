export default function AboutUs() {
  return (
    <div className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-2">
          About <span className="text-customBlue1">Us</span>
        </h1>
        <div className="w-16 h-[1px] bg-blue-500 mx-auto mb-8" />
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Hebei Green Land Import & Export Co. Ltd.
        </h2>
        <p className="text-gray-600 text-justify max-w-3xl mx-auto mb-6">
          {" "}
          Company is proficient in arranging & building high performance
          professional teams for effective and successful implementation of
          projects in planned resources and schedule.{" "}
        </p>{" "}
        <p className="text-gray-600 text-justify max-w-3xl mx-auto mb-6">
          {" "}
          We, the team of experienced & qualified professionals, are committed &
          inspired towards consistent contributions for creating value to our
          customers' business. Our team is driven with passion to bring the
          association with customers in line with our values of leadership,
          performance, relationships, and ethics.{" "}
        </p>{" "}
        <p className="text-gray-600 text-justify max-w-3xl mx-auto mb-6">
          {" "}
          The team has extensive industry experience across various chemical
          industries, including specialty chemicals for the agricultural sector,
          polymers, fibers, Coal tar Distillation, Coal tar Pitch (Melting &
          Granulation), Refined Naphthalene, and Carbon Black industry. Our
          expertise covers the entire asset project lifecycle from Feasibility
          Studies, Conceptual Engineering, and FEED.{" "}
        </p>{" "}
        <p className="text-gray-600 text-justify max-w-3xl mx-auto mb-12">
          {" "}
          Also, we are professionals in setting up entire plants for Tyre Wire
          Recycling, Recovered Carbon Black, and PET Recycling.{" "}
        </p>
        <div className="text-center mt-12">
          <a
            href="/about"
            className="text-blue-500 font-semibold hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
