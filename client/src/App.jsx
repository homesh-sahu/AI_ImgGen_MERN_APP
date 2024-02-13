import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost, About, Features } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/" title="Home">
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
      <nav class="bg-white border-b border-b-[#e6ebf4] sticky top-0 z-10 backdrop-filter backdrop-blur-lg  bg-opacity-25 firefox:bg-opacity-90">
        <div className="max-w-screen-xl px-4 py-2 mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-base">
              <Link to="/">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:font-bold sm:mx-4"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              </Link>
              <li>
                <a
                  href="mailto:artigen@gmail.com"
                  target="_blank"
                  className="text-gray-900 hover:font-bold sm:mx-4"
                  title="E-mail"
                >
                  Contact
                </a>
              </li>
              <Link to="/about">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:font-bold sm:mx-4"
                >
                  About
                </a>
              </li>
              </Link>
              <Link to="/features">
              <li>
                <a
                  href="#"
                  className="text-gray-900 hover:font-bold sm:mx-4"
                >
                  Features
                </a>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]">
        {" "}
        {/* View height - Navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
