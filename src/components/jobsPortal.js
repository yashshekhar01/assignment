import React from "react";
import { Link } from "react-router-dom";

const JobsPortal = () => {

  return (
    <div>
      <div className="about">
        <h3 className="h3 about-title">
          Laravel Developer(Full Time) - Match Company Limited
        </h3>
      </div>
      <div className="flex items-center justify-center h-0">
      <a href="/company">
      <button className="h-10 px-5 m-5 text-black-700 transition-colors duration-150 border border-black-500 rounded-lg focus:shadow-outline">
          View Company
        </button></a>
        <a href="/persona">
        <button className="h-10 px-5 m-1 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
          Apply This Job
        </button></a>
      </div>
      <div className="p1">
        <b>Minimum Qualification:</b> Bachelor
        <div>
          <b>Experience Level:</b> Mid level
        </div>
        <div>
          <b>Experience Length:</b> 2 years{" "}
        </div>
        <div>
          <b>Location:</b> San Francisco, USA{" "}
        </div>
        <div>
          <b>Application Deadline:</b>12/08/2022{" "}
        </div>
        <div>
          <b>Salary Range's:</b> $ 105,000 - 150,000{" "}
        </div>
      </div>
      <p className="p2">
        <b>Job description</b>
      </p>
      <p className="p3">
        We are searching for a Laravel developer to build web applications for
        our company. In this role, you will design and create projects using{" "}
        <br />
        Laravel framework and PHP, and assist the team in delivering
        high-quality web applications, services, and tools for our business.{" "}
        <br />
        <br />
        To ensure success as a Laravel developer you should be adept at
        utilizing Laravel's GUI and be able to design a PHP application from
        start <br />
        to finish. A top-notch Laravel developer will be able to leverage their
        expertise and experience of the framework to independently produce{" "}
        <br />
        complete solutions in a short turnaround time.
      </p>
      <p className="p4">
        Laravel Developer Requirements:
      </p>
      <p className="p3">
        <li className="li-space">A degree in programming, computer science, or a related field.</li> 
        <li className="li-space">Experience working with PHP, performing unit testing, and managing APIs such as REST.</li>
        <li className="li-space">A solid understanding of application design using Laravel.</li>
        <li className="li-space">Knowledge of database design and querying using SQL.</li>
        <li className="li-space">Profiency in HTML and javascript. Experience developing in Vue is considered a plus.</li>
        <li className="li-space">Practical experience using the MVC architecture.</li>
        <li className="li-space">The ability to work on LAMP development environment.</li>
        <li className="li-space">Problem-solving skills and critical mindset.</li>
        <li className="li-space">Great communication skills.</li>
        <li className="li-space">The desire and ability to learn.</li>

      </p>
      <p className="p4">
        Responsibilities:
      </p>
      <p className="p3">
        <li className="li-space">Discussing project aims with the client and development team.</li> 
        <li className="li-space">Designing and building web applications using Laravel.</li>
        <li className="li-space">Troubleshooting issues in the implementation and debug builds .</li>
        <li className="li-space">Working with front-end and back-end developers on projects.</li>
        <li className="li-space">Testing functionality for users and the backend.</li>
        <li className="li-space">Ensuring that integrations run smoothly.</li>
        <li className="li-space">Scaling projects based on client feedback.</li>
        <li className="li-space">Recording and reporting on work done in Laravel.</li>
        <li className="li-space">Maintaining web-based applications.</li>
        <li className="li-space">Presenting work in meetings with clients and management.</li>
      </p>
    </div>
  );
};

export default JobsPortal;
