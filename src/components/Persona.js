import React from "react";
import man from "../images/man.jpeg";

const Persona = () => {
  return (
    <div>
    <div className="float-left ml-64">
      <img
        src={man}
        alt="Man"
        className="mx-40 my-24 rounded-full h-32 w-32 flex items-center justify-center"
      />
      <div className="mx-24 text-xl font-medium text-gray-700">
        Name
        <h3 className="my-2 mx-18 text-black text-2xl">
          <b>Fabian Levy</b>
        </h3>
      </div>
      <div className="mx-24 my-20 text-xl font-medium text-gray-700">
        Age
        <h3 className="my-2 mx-18 text-black text-2xl">
          <b>23 years old</b>
        </h3>
      </div>
      <div className="mx-24 my-20 text-xl font-medium text-gray-700">
        Education
        <h3 className="my-2 mx-18 text-black text-2xl">
          <b>B Tech</b>
        </h3>
      </div>
      <div className="mx-24 my-20 text-xl font-medium text-gray-700">
        Skills
        <h3 className="my-2 mx-18 text-black text-2xl">
          <b>Reactjs, etc</b>
        </h3>
      </div>
      </div>

      <div className="float-right mr-44">

        <div className="mx-24 my-20 text-xl font-medium text-black">
          <b>About me</b>
          <h3 className="my-2 mx-18 text-lg">
            Fabian's lifestyle is quite active. He works out three times a week.
            His <br />
            fitness routine is a healthy mix of strength-training and cardio.
            Apart <br />
            from fitness, his priority is a healthy and balanced diet. He have
            some <br />
            sort of a meal plan, but he is quite flexible with it. <br />
            He prefers to do shopping online because it is convenient and less{" "}
            <br />
            time-consuming, as he can do it whenever it suits him.
          </h3>
        </div>
        <div className="mx-24 my-20 text-xl font-medium text-black">
          <b>Goal</b>
          <h3 className="my-2 mx-18 text-lg">
            He is independent, curious and passionate. When he is caught up in <br />something exciting and interesting, he can leave everything else behind.
          </h3>
        </div>
        <div className="mx-24 my-12 text-xl font-medium text-black">
          <b>Education</b>
          <h3 className="my-2 mx-18 text-lg">
            <li className="li-space">Get clear overview of nutritional information for his meals;</li>
            <li className="li-space">Set diet goals;</li>
            <li className="li-space">Track progress and meet deadlines.</li>
          </h3>
        </div>
        <div className="mx-24 my-20 text-xl font-medium text-black">
          <b>Work Experience</b>
          <h3 className="my-2 mx-18 text-lg">
            Build muscle mass and gain weight.
          </h3>
        </div>
        <div className="mx-24 my-20 text-xl font-medium text-black">
          <b>Projects</b>
          <li className="li-space text-lg">It is not easy to make informed decisions as you need to crunch a lot <br />&nbsp; &nbsp; &nbsp;of numbers: calories intake, macronutrients ratio, nutritional value.</li>
            <li className="li-space text-lg">It takes time to achieve significant results and sticking to a healthy <br />&nbsp; &nbsp; &nbsp; lifestyle plan.</li>
            <li className="li-space text-lg">There is a lot of conflicting information about what food he should <br />&nbsp; &nbsp; &nbsp; eat or avoid. This makes him doubt the choices he makes.</li>
        </div>
        <div className="mx-24 my-20 text-xl font-medium text-black">
          <b>Skills and others</b>
          <h3 className="my-2 mx-18 text-lg">
            He aspires to achieve a good physique through exercise and wants to <br />challenge himself with a marathon scheduled for next year.
          </h3>
        </div>

      </div>

    </div>
  );
};

export default Persona;
