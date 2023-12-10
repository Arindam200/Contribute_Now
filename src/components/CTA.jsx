// import React from 'react'

export default function CTA() {
  return (
    <>
      <div className="py-20">
        <div className="text-center font-semibold tracking-wider text-7xl mx-36 pb-10">
          Start <span className="text-green-500">Contributing </span> <br />{" "}
          Right Now
        </div>
        <div className="flex justify-center gap-10 text-2xl">
          <button className="px-5 py-2 bg-white text-black rounded-md border-2">
            Read the Docs
          </button>
          <button className="px-5 py-2 border-white rounded-md border-2 ">
            Sign Up{" "}
          </button>
        </div>
      </div>
    </>
  );
}
