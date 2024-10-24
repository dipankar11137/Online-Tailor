import React from "react";

const HappyClient = () => {
  return (
    <div className=" bg-slate-3">
      <div className="pt-5 text-slate-200 mx-32 pb-5">
        <h1 className="text-2xl font-semibold">SOME HAPPY FACES</h1>
        <h1 className="text-5xl font-semibold mb-3">
          Real Happy Customers, Real Stories
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl mt-20">
              Such service platforms are available in other countries. I have
              when I I personally used them when I was abroad. I am very happy
              that Such a portal in Bangladesh is also available here. thank you
            </h1>
            <h1 className="text-xl font-semibold mt-3">Nusrat Faria</h1>
            <p>IT Consultant, Dhaka</p>
          </div>
          <div>
            <img
              className="h-80 ml-20 rounded-full"
              src="https://img.freepik.com/premium-photo/bengali-girl-has-her-eyes-face-sparkling-with-joy-as-she-celebrates-festival_669966-5844.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
