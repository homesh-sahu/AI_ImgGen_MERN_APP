import React from "react";

import { download } from "../assets"; //download icon
import { downloadImage } from "../utils";

const Card = ( { _id, prompt, name, photo } ) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card hover:p-1 border hover:border-[#00000052] transition-all ease-in duration-275">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131fd7] m-2 p-4 rounded-md transition-all ease-in duration-275">
        <p className="text-white text-md overflow-y-auto">"{prompt}"</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button

            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none hover:animate-pulse"
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
