import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const OurServices = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  return (
    <div className="mx-28 pb-10 ">
      <div className=" pl-5 rounded-lg ">
        <Carousel className="rounded-lg pl-3" responsive={responsive}>
          <Link to="/">
            <div className="card w-48 bg-base-100 text-black  mt-2 mb-3  shadow-2xl  hover:shadow-lg">
              <figure>
                <img
                  className="w-full  pic-style"
                  src="https://thumbs.dreamstime.com/b/ac-repair-service-rgb-color-icon-ac-repair-service-rgb-color-icon-air-conditioning-systems-professional-maintenance-technical-188783189.jpg"
                  alt="ac"
                  style={{ height: '80px', width: '80px' }}
                />
              </figure>
              <div className="pb-2 px-2">
                <h2 className="text-center text-xl font-semibold">
                  Ac Repair Services
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-48 bg-base-100 text-black mt-2 shadow-2xl  hover:shadow-lg">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://i.ibb.co/4TYjG1N/appient-removebg-preview-1.png"
                  alt="ac"
                  style={{ height: '80px', width: '80px' }}
                />
              </figure>
              <div className="pb-2 px-2">
                <h2 className="text-center text-xl font-semibold">
                  Appliance Repair
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-48 bg-base-100 text-black  mt-2  shadow-2xl  hover:shadow-lg">
              <figure>
                <img
                  className="w-full  pic-style"
                  src="https://cdn-icons-png.flaticon.com/512/6159/6159584.png"
                  alt="ac"
                  style={{ height: '80px', width: '80px' }}
                />
              </figure>
              <div className="pb-2 px-2">
                <h2 className="text-center text-xl font-semibold">
                  Trips and Travel
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-48 bg-base-100 text-black mt-2 shadow-2xl  hover:shadow-lg">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1583681093_tiwnn_52x52.webp"
                  alt="ac"
                  style={{ height: '80px', width: '80px' }}
                />
              </figure>
              <div className="pb-2 px-2">
                <h2 className="text-center text-xl font-semibold">Shifting</h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-48 bg-base-100 text-black mt-2 shadow-2xl  hover:shadow-lg">
              <figure>
                <img
                  className="w-full  pic-style"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/v4_uploads/category_icons/224/default_52x52.webp"
                  alt="ac"
                  style={{ height: '80px', width: '80px' }}
                />
              </figure>
              <div className="pb-2 px-2">
                <h2 className="text-center text-xl font-semibold">Car Care</h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-48 bg-base-100 text-black mt-2  shadow-2xl  hover:shadow-lg">
              <figure>
                <img
                  className="w-full  pic-style"
                  src="https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/icons_png/1599673571_tiwnn_52x52.webp"
                  alt="ac"
                  style={{ height: '80px', width: '80px' }}
                />
              </figure>
              <div className="pb-2 px-2">
                <h2 className="text-center text-xl font-semibold">
                  Beauty & Salon
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card w-56 bg-base-100 text-black mt-2 border-blue-900  shadow-2xl  hover:shadow-lg">
              <figure>
                <img
                  className="w-full pic-style"
                  src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/svg/all-services.svg"
                  alt="ac"
                  style={{ height: '80px', width: '80px' }}
                />
              </figure>
              <div className="pb-2 px-2">
                <h2 className="text-center text-xl font-semibold">
                  All Services
                </h2>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
    </div>
  );
};

export default OurServices;
