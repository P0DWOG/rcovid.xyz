import React from "react";

const AboutPage = () => {
  return (
    <div className="mb-40">
      <p className="mt-8 mb-4 text-2xl font-bold text-white-900">
        What's going on?
      </p>
      <p className="mt-4 text-lg text-white-700">
        Welcome to this example for Cam !
      </p>
      <p className="mt-4 text-lg text-white-700">
        We allow people to earn interest on their DAI
        and redirect it to charity organisations.
      </p>
      <p className="mt-4 text-lg text-white-700">
        Aave allows users to earn interest on their DAI, but instead
        of redeeming the interest and principal back into the user’s
        wallet as with a traditional bank account; we separate the
        principal from the interest-- The principal is always under 
        the original user’s control, but the interest is redirected
        to grow the planet !
      </p>
      <p className="mt-8 mb-4 text-2xl font-bold text-white-900">
        I want to support something, but I hate trees !
      </p>
      <p className="mt-4 text-lg text-white-700">
        No problem ! The code is fully{" "}
        <a
          href="https://github.com/MuneFinance/MuneFinance"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          open-sourced
        </a>{" "}
        and was intended to be forked. So please go through the
        README in the repo and support your own cause !
      </p>
    </div>
  );
};

export default AboutPage;
