import React from 'react';

const SkillCard = ({ service }) => {
  const { img, name } = service;
  // console.log(service);
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={img}
            alt="Bonnie image"
          />
          <h5 className="mb-1  font-medium text-gray-900 dark:text-white font-bold">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
