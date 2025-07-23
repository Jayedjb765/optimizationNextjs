"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-red-700 text-center text-xl">SomeThing went wron</h1>
      <div className="text-center">
        <button
          onClick={() => reset()}
          className="bg-black text-white py-2 px-5 rounded-lg  transition-all "
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
