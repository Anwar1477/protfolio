import React, { useEffect, useState } from 'react';

const Education = () => {
  const [study, setStudy] = useState([]);
  useEffect(() => {
    fetch('education.json')
      .then((res) => res.json())
      .then((data) => {
        setStudy(data);
      });
  }, []);
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center">
        <h2 className="text-center text-3xl font-bold text-gray-500 border-b-4 uppercase">
          Education
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
        {study.map((s) => (
          <div class="card w-96 bg-base-100 shadow-xl">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-mortarboard ml-4"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
              </svg>
            </div>
            <div class="card-body">
              <h2 class="card-title">{s.name}</h2>
              <h2>
                <span className="font-semibold">CGPA:</span>{' '}
                <span className="font-xl">{s.GPA}</span>
              </h2>
              <p className="text-xl font-bold text-gray-500">{s.school}</p>
              <p>Passing Year: {s.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
