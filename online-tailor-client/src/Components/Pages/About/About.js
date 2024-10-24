import React from "react";
import Footer from "../Share/Footer";

const About = () => {
  return (
    <div className="bg-slate-700 text-white">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-8">
          <img
            src="https://www.mondaymorning.in/web_css_js/image/job-not-found.png"
            className="w-24 md:w-32 lg:w-3/5 rounded-lg "
            alt=""
          />
          <div className="ms-32">
            <h1 className="text-5xl font-bold text-rose-300 ">About Us</h1>
            <p className="py-6 text-2xl">
              An employment website is a website that deals specifically with
              employment or careers. Many employment websites are designed to
              allow employers to post job requirements to fill a position and
              are commonly known as job boards. Are you the person who wants the
              best employees for your organization? Do you want to advertise job
              vacancies in your company? Solve all your problems just by
              creating or creating job portal. In this article, we have
              discussed the importance of job portals, website development for
              job portals and best job portals in India. The Internet is a big
              place with more than 3 billion people using it every day - some
              for personal and some for business use. According to the survey,
              India is the second highest user of internet. About 26% of India's
              population uses the Internet. There are various reasons for using
              the Internet.
            </p>
            <button data-theme="autumn" className="btn btn-orange-500">
              See More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
