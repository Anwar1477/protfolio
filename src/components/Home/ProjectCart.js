import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCart = ({ d }) => {
  console.log(d);
  const {
    img,
    client,
    name,
    frontend,
    backend,
    server,
    live,
    about,
    about1,
    about2,
  } = d;
  return (
    <div>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg w-100" src={img} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Project Name: {name}
            </h5>
          </a>
          <li class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Frontend Technology:</span> {frontend}
          </li>
          <li class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Backend Technology:</span> {backend}
          </li>
          <hr />
          <div>
            <li>Point 1: {about}</li>
            <li>Point 2: {about1}</li>
            <li>Point 3: {about2}</li>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Client
            </button>
            <a
              href={client}
              class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              target={`_blank`}
            >
              Server
            </a>
            <a
              href={live}
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              target={`_blank`}
            >
              Live
            </a>
            {/* <button>Client Code</button>
            <button>Server Code</button>
            <button>Live Link</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
