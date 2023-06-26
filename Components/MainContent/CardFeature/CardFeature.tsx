import React from "react";
import Card from "./Card";

export default function CardFeature() {
  const data = [
    {
      image_link: "/images/buildyourown.png",
      title: "Craft Your Personal Creation",
      description: "Endless variety: over one million combinations to try!",
      buttonTitle: "START ORDER",
    },
    {
      image_link: "/images/specials.png",
      title: "Specials",
      description:
        "Save big on all your favorite Pizza Towns food. Explore our Specials page now and indulge in irresistible deals.",
      buttonTitle: "SEE DEALS",
    },
    {
      image_link: "/images/logo_black.png",
      title: "Join Our Eclub",
      description:
        "Calling all pizza lovers! Join our Eclub today for mouthwatering benefits. Get special promotions, early access to new menu items, and personalized surprises delivered straight to your inbox. Elevate your pizza experience - sign up now and let the deliciousness begin!",
      buttonTitle: "APPLY NOW",
    },
    {
      image_link: "/images/hiring.png",
      title: "Careers",
      description:
        "Pizza Towns is hiring passionate individuals who love pizza, teamwork, and creating unforgettable experiences. We're all about delivering exceptional service and creating a welcoming atmosphere for our customers. Join our dynamic team today!",
      buttonTitle: "APPLY NOW",
    },
  ];
  return (
    <div className="mx-auto m-10">
      <div className="grid justify-center items-center grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
