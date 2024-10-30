import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const contactInfo = {
  address:
    "#1202, Huayaocheng Commercial Center, Hanshan District, Handan city, Hebei China, 056002",
  email: "saslerahul@gmail.com",
  phones: ["+91-9920057647,", "+971-525276491,", "+86 15057900573."],
  registration: "91130402MA07LJEF1C",
  socials: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
};
export default function ContactUs() {
  return (
    <div className="bg-gray-100  py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl  mx-auto">
        <h1
          id="contact-us"
          className="text-4xl font-semibold  text-center text-gray-800 mb-2"
        >
          Contact Us
        </h1>
        <div className="w-16 h-[1px] bg-blue-500 mx-auto mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-12">
          <Card className="p-6 shadow-lg bg-gray-50 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={4} />
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="bg-white rounded-lg shadow-lg p-6 ">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <h2 className="font-semibold">Address:</h2>
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <h2 className="font-semibold">Email:</h2>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <h2 className="w-[36%] font-semibold">Mobile & Whatsapp:</h2>
                <div className="flex flex-wrap space-x-2">
                  {contactInfo.phones.map((phone, index) => (
                    <p key={index} className="text-gray-600">
                      {phone}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <p className=" text-sm text-gray-500">
                  Registration number: {contactInfo.registration}
                </p>
              </div>
              <div className="pt-6 flex justify-center space-x-4">
                <a
                  href={contactInfo.socials.linkedin}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href={contactInfo.socials.twitter}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href={contactInfo.socials.instagram}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-lg bg-gray-50 border-t-4 p-0 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5775777243034!2d114.51126081523974!3d36.60830087998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3667b3f2b0d7e0d1%3A0x7c6f2b4d0c7b0b0!2sHanshan%20District%2C%20Handan%2C%20Hebei%2C%20China!5e0!3m2!1sen!2sus!4v1635180000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Card>
      </div>
    </div>
  );
}
