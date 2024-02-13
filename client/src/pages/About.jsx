import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          About ArtiGen
        </h1>
        <p className="mt-5 text-[#494751] sm:text-lg max-w-500px]">
        Welcome to our AI Image Generator, a cutting-edge web application that uses the power of artificial intelligence to create stunning and unique images from your prompts. Our AI Image Generator leverages advanced machine learning algorithms to understand your prompts and generate images that match your description. It’s like having a digital artist at your fingertips, ready to bring your imagination to life.
        </p>
        <p className="mt-5 text-[#494751] sm:text-lg max-w-500px]">
           The AI Image Generator Web App combines OpenAI's Image Generation API with the MERN stack (MongoDB, Express, React, Node.js), Vite, Cloudinary, and Tailwind CSS to create a dynamic platform for image creation and community collaboration. Users can generate images from text prompts, explore a Community Page, search for images by keywords, and download their favorite creations.
        </p>
        <p className="mt-5 text-[#494751] sm:text-lg max-w-500px]">
        "Experience the future of digital art with our AI Image Generator. Start creating today and see where your imagination takes you!"
        </p>
        <p className="max-w-500px] sm:mt-40 mt-10 text-black sm:text-xl font-medium">
          "Developed by <a className="hover:underline font-bold" href="https://www.linkedin.com/in/homesh-sahu-02a9621a4/" target="_blank">Homesh Sahu</a>"
        </p>
      </div>
    </section>
  );
};

export default About;
