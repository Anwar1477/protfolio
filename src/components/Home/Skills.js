import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('skills.json')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  //   console.log(services);
  return (
    <div className="mt-5">
      <div className=" flex justify-center items-center">
        <h2 className="text-center text-3xl font-bold text-gray-600 border-b-4 uppercase  ">
          List of Technology that I know
        </h2>
      </div>
      <div className="sm:grid grid-cols-1 lg:grid-cols-5 gap-3 m-5">
        {services?.map((service) => (
          // <p> {service.name}</p>
          <SkillCard key={service?.id} service={service}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
