import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center ">
      <div className="animate-spin rounded-full border-t-4 border-gray-500 border-opacity-25 h-10 w-10"></div>
    </div>
  );
}
