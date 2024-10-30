import SRGLogo from "@/assets/images/SRGLogo.jpg";
import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const AboutUsComponent = () => {
  const [tab, setTab] = useState("about");

  return (
    <div className="bg-white pb-20  z-10 ">
      <h1 className="text-primary text-center mt-10 mb-6 font-semibold text-xl ">
        About Us
      </h1>
      <h1 className=" text-center font-semibold text-3xl">
        A Place of Care and Conservation for Sacred Cows
      </h1>
      <div className="max-w-6xl justify-center px-3  mx-auto md:flex gap-3">
        <div className="w-full flex justify-center">
          <img
            src={SRGLogo}
            alt="logo"
            className="w-36 h-36 md:w-96 md:h-96 md:mt-10 md:ml-20 "
          />
        </div>

        <div className="w-full">
          <h1 className="text-3xl"></h1>

          <Card className="bg-primary bg-opacity-50 px-3 mt-10 py-4">
            <Tabs defaultValue="about" onValueChange={setTab} value={tab}>
              <TabsList className="w-full gap-3  flex justify-start">
                <TabsTrigger className="px-6 bg-white py-2" value="about">
                  About
                </TabsTrigger>
                <TabsTrigger className="px-6  bg-white py-2" value="mission">
                  Mission
                </TabsTrigger>
                <TabsTrigger className="px-6 bg-white py-2" value="vision">
                  Vision
                </TabsTrigger>
              </TabsList>
              <CardHeader className="font-semibold text-xl">
                ABOUT US
              </CardHeader>
              <TabsContent value="about" className="w-full ">
                <p className="text-justify px-2">
                  A Place of Care and Conservation for Sacred Cows Dear esteemed
                  members of the Shrirajlakshmi family, We are pleased to inform
                  you that the NGO registration for our gaushala, along with the
                  12A and 80G certificates, has been completed. In recognition
                  of the service activities we have been performing, the
                  Maharashtra Government's Gau Seva Commission has officially
                  registered the 'Shrirajlakshmi Gaushala' operated by the
                  Shrirajlakshmi Foundation Nashik, under the provisions and
                  conditions of Section 12 of the Maharashtra Gauseva Commission
                  Act, 2023. This joumey, which began 22 years ago as a solo
                  effort, has transformed into an organization with the support
                  and blessings of all of you. We have grown from 7 members to
                  600 members, and from 7 cows to 125 cows. The gaushala has
                  provided refuge to stray cattle through 17 actions by the
                  Nashik City Police Administration, 9 actions by the Nashik
                  Municipal Corporation, and through donations of cows. We are
                  collectively making a small effort to preserve this invaluable
                  heritage of indigenous cattle, a symbol of Sanatan Dharma, and
                  a national treasure of undivided India.
                </p>
              </TabsContent>
              <TabsContent value="mission">
                <p className="text-justify">
                  transformed into an organization with the support and
                  blessings of all of you. We have grown from 7 members to 600
                  members, and from 7 cows to 125 cows. The gaushala has
                  provided refuge to stray cattle through 17 actions by the
                  Nashik City Police Administration, 9 actions by the Nashik
                  Municipal Corporation, and through donations of cows. We are
                  collectively making a small effort to preserve this invaluable
                  heritage of indigenous cattle, a symbol of Sanatan Dharma, and
                  a national treasure of undivided India.der the provisions and
                  conditions of Section 12 of the Maharashtra Gauseva Commission
                  Act, 2023. This joumey, which began 22 years ago as a solo
                  effort, has
                </p>
              </TabsContent>
              <TabsContent value="vision">
                <p className="text-justify">
                  rom 7 cows to 125 cows. The gaushala has provided refuge to
                  stray cattle through 17 actions by the Nashik City Police
                  Administration, 9 actions by the Nashik Municipal Corporation,
                  and through donations of cows. We are collectively making a
                  small effort to preserve this invaluable heritage of
                  indigenous cattle, a symbol of Sanatan Dharma, and a nA Place
                  of Care and Conservation for Sacred Cows Dear esteemed members
                  of the Shrirajlakshmi family, We are pleased to inform you
                  that the NGO registration for our gaushala, along with the 12A
                  and 80G certificates, has been completed. In recognition of
                  the service activities we have been performing, the
                  Maharashtra Government's Gau Seva Commission has officially
                  registered the 'Shrirajlakshmi Gaushala' operated by the
                  Shrirajlakshmi
                </p>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
