import React from "react";

export default function CTA() {
  return (
    <div className="bg-brand-green py-36">
      <div className="flex justify-center items-center max-w-container mx-auto bg-brand-green">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-4xl text-center font-serif font-semibold pb-4 text-white">
            Access the full Affiliate Buyer's Guide.
          </h1>
          <p className="text-2xl font-thin text-center text-white pb-6">
            Conveniently view and use content for your organization.
          </p>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
            onClick={()=>{window.open("https://martechrecord.com")}}
          >
            Get the Guide
          </button>
        </div>
      </div>
    </div>
  );
}
