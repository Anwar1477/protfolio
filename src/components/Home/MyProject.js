import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ProjectCart from './ProjectCart';

const MyProject = () => {
  const { isLoading, error, data } = useQuery('project', () =>
    fetch('project.json').then((res) => res.json())
  );
  // console.log(data);
  if (isLoading) {
    return <Loading></Loading>;
  }
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch('project.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProjects(data);
  //     });
  // }, []);
  return (
    <div>
      <div className="flex justify-center items-center">
        <h2 className="text-center text-3xl font-bold text-gray-500 border-b-4 uppercase">
          My Project
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 m-8 gap-5">
        {data.map((d) => (
          <ProjectCart key={d._id} d={d}></ProjectCart>
        ))}
      </div>
    </div>
  );
};

export default MyProject;
