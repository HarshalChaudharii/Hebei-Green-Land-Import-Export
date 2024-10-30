import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const info = [
  { id: 1, text: "To promote Cow Based Economy in surrounding areas" },
  { id: 2, text: "To protoct the armor against degtadation" },
  {
    id: 3,
    text: "To cerform service of coves o kooping thes in the Gaustale and providing conducive anorm poper feeding medical facilities",
  },
  { id: 4, text: "The parent uttar smaller Gamalas" },
  { id: 5, text: "Joining is tooly free the sunt need any money from you" },
];

const BecomeMember = () => {
  return (
    <div className="px-3 border-2 md:border-none m-3 md:m-0 bg-primary bg-opacity-10 pb-20 ">
      <div className="flex flex-col gap-2 max-w-5xl mx-auto  ">
        <h1 className="text-primary font-semibold mt-10">BECOME A MEMBER?</h1>
        <p className="font-semibold  text-3xl">
          Participate in Cow Feeding, Gopooja, Adopting a Cow and other such
          Activities
        </p>
        <p className="text-[#757575] text-justify">
          Participate in member activities, contribute financially, and spread
          awareness about the importance of cow protection.
        </p>
        <div className="mt-6">
          {info.map((item) => (
            <span key={item.id} className="flex items-center gap-2">
              <Check className="text-primary font-semibold" size={15} />{" "}
              <p className="text-justify ">{item.text}</p>
            </span>
          ))}
        </div>
        <Button className="bg-primary w-32 mt-10 text-white px-4 py-2 rounded-lg">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default BecomeMember;
