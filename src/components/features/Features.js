import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Skills" des="What I Do" />
      <div className="flex flex-wrap gap-6 justify-center">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
