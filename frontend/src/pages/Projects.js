import React from "react";
import { Link } from "react-router-dom"; // Import Link
import chineseMNIST from "../assets/chineseMNIST.png";

export default function Project() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Projects</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <Link to="/projects/mlops" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={chineseMNIST}
                alt="Chinese MNIST"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg text-gray-700">Chinese MNIST</h3>
            <p className="mt-1 text-sm font-light text-gray-900">
              This project takes a hand written image of a chinese number
              character and a model predicts the written number. For now, it
              only takes a white character on a black background. Note to
              myself: run the server beforehand
            </p>
          </Link>
          {/* Add more products if needed */}
        </div>
      </div>
    </div>
  );
}
