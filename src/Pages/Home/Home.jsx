import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-20 text-center">
      <h2 className="text-3xl font-semibold mb-5">
        Welcome to my Book Store Website
      </h2>
      <p className="text-lg font-normal mb-5">
        Do you want to see my books ? Kindly Click this button
      </p>
      <div>
        <Link to="/create-post">
          <button className="bg-[#3944bc] px-6 py-2 text-white text-[16px] font-medium rounded-md">
            Create Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
