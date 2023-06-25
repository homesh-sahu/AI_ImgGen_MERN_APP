import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <p className="font-semibold text-sm">powered by</p>
          <img
            src={logo}
            alt="Error_code : 404"
            className="w-28 object-contain"
          />
        </Link>
        <Link
          to="/create-post"
          className="flex items-center justify-center p-0.5 mr-2 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-600 hover:to-blue-500 hover:text-white hover:shadow-lg font-inter"
        >
          <span className="px-5 py-2.5 transition-all ease-in duration-275 bg-white rounded-md group-hover:bg-opacity-0">
            Create
          </span>
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]">
        {" "}
        {/* View height - Navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
