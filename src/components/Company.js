import React from "react";
import logo from "../images/logo.png";

const Company = () => {
  return (
    <div className="about">
      <img
        src={logo}
        alt="logo"
        className="mx-auto my-20 place-items-center items-center justify-center"
      />
      <h3 className="text-center text-3xl">
        <b>COMPANY NAME</b>
      </h3>
      <div className="p3">
      <p className="li-space">Company Description:</p>
       <p className="li-space">For over 200 years, JPMorgan Chase & Co has
        provided innovative financial solutions for consumers, small buisnesses,
        corporations,</p> 
        <p className="li-space">governments and institutions around the world.</p> 
        <p className="li-space">Today, we're a leading global financial services firm with
        operations servicing clients in more than 100 countries. </p> 
        <p className="li-space">Whether we are serving customers, helping small businesses, or putting our
        skills to work with partners, we strive to identify issues and </p>
        <p className="li-space">propose solutions that will propel the future and strenthen both our
        clients and our communities.</p> 
        <p className="li-space"> © 2017 JPMorgan Chase & Co. JPMorgan
        Chase is an equal opportunity and affirmative action employer
        Disability/Veteran.</p>
      </div>
      <div className="text-center text-2xl my-24">
        <b>Company Details</b>
      </div>
      <div className="my-10">
      <p className="li-space text-xl text-center">Website: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;www.abc.com</p>
      <p className="li-space text-xl text-center">Industry: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Lindsay Labahn</p>
      <p className="li-space text-xl text-center">Company Size: &nbsp; Lindsay Labahn</p>
      <p className="li-space text-xl text-center">Headquarter: &nbsp; &nbsp; &nbsp;Lindsay Labahn</p>
      <p className="li-space text-xl text-center">Specialties: &nbsp; &nbsp; &nbsp; &nbsp;  Lindsay Labahn</p>
      <p className="li-space text-xl text-center">Openings: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Lindsay Labahn</p>
</div>
    </div>
  );
};

export default Company;
