import React from 'react';
import anwar from '../../assets/anwar.jpg';
import Social from '../../Shared/Social';
import Typical from 'react-typical';
import cv from '../../assets/cv/Resume-Anwar Hosen.pdf';

const InfoPart = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={anwar} class="max-w-sm rounded-lg shadow-2xl" alt="" />
            <div>
              <h1 class="text-5xl font-bold text-gray-400">Anwar Hosen</h1>
              <p class="text-xl font-bold">
                I am a{' '}
                <Typical
                  className="text-red-500 gap-1"
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    'Web Developer',
                    3000,
                    'Software Engineer',
                    3000,
                    'Frontend Designer',
                    3000,
                  ]}
                />
              </p>
              <p class="">
                <span>joy494949@gmail.com</span>
              </p>
              <Social></Social>
              <p class="py-6">
                I am a web developer. In the last few months I have completed
                more than 10+ websites project. I'm expert in HTML, CSS and
                JavaScript. As a library component I'm expert in both Bootstrap
                and TailwindCSS. Also expert in React js as a JavaScript
                framework. As a backend good at Node.js and Express.js. Also
                have good knowledge at Mongodb database
              </p>
              <a
                href={cv}
                class="text-gray-900 font-bold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPart;
