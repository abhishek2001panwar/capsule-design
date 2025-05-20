import React from "react";

function Footer() {
  return (
    <div className="w-full px-10 py-10 min-h-screen">
      <h2 className="font-bold max-w-xs">
        Interested in an amazing adventure? Reserve one of our Capsules®
      </h2>
      <h1 className="text-[5rem] font-bold py-4">Book your—capsules</h1>
      <div className="flex items-center justify-between  py-20">
        <h2 className="font-bold text-xl max-w-lg">
          This website is just the concept work done by—Moyra to showcase our
          capabilities. <br /> <br /> If you would like to outsource a similar
          website project—contact us..
        </h2>
        <div className="max-w-xl space-y-2 ">
          <h1 className="text-xl font-bold capitalize">welcome</h1>
          <h1 className="text-xl font-bold capitalize">introduction</h1>
          <h1 className="text-xl font-bold capitalize">house</h1>
          <h1 className="text-xl font-bold capitalize">why capsule</h1>
          <h1 className="text-xl font-bold capitalize">feedback</h1>
        </div>
      </div>

      <div className="flex items-center justify-between  py-10">
        <div className=" space-y-2 flex  gap-5">
          <h1 className="text-xl underline capitalize mb-4">Follow Us</h1>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl underline capitalize block hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl underline capitalize block hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl underline capitalize block hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl underline capitalize block hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl underline capitalize block hover:underline"
          >
            YouTube
          </a>
        </div>
        <h2 className="font-bold text-md ">
        Meet Capsules®—modern and cozy <br />
houses, in the California desert.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
