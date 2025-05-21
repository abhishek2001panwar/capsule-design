import React from "react";

function Footer() {
return (
    <div className="w-full px-4 sm:px-10 py-6 sm:py-10 min-h-screen">
        <h2 className="font-bold max-w-xs">
            Interested in an amazing adventure? Reserve one of our Capsules®
        </h2>
        <h1 className="text-3xl md:text-[5rem] font-bold py-4">Book your—capsules</h1>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-10 md:py-20">
            <h2 className="font-bold text-xl max-w-lg mb-8 md:mb-0">
                This website is just the concept work done by—Moyra to showcase our
                capabilities. <br /> <br /> If you would like to outsource a similar
                website project—contact us..
            </h2>
            <div className="max-w-xl space-y-2">
                <h1 className="text-xl font-bold capitalize">welcome</h1>
                <h1 className="text-xl font-bold capitalize">introduction</h1>
                <h1 className="text-xl font-bold capitalize">house</h1>
                <h1 className="text-xl font-bold capitalize">why capsule</h1>
                <h1 className="text-xl font-bold capitalize">feedback</h1>
            </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-8 md:py-10">
            <div className="space-y-2 flex flex-wrap gap-3 md:gap-5 mb-6 md:mb-0">
                <h1 className="text-xl underline capitalize w-full md:w-auto mb-2 md:mb-4">Follow Us</h1>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl underline capitalize hover:underline"
                >
                    Facebook
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl underline capitalize hover:underline"
                >
                    Twitter
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl underline capitalize hover:underline"
                >
                    Instagram
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl underline capitalize hover:underline"
                >
                    LinkedIn
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl underline capitalize hover:underline"
                >
                    YouTube
                </a>
            </div>
            <h2 className="font-bold text-md">
                Meet Capsules®—modern and cozy <br className="hidden md:block" />
                houses, in the California desert.
            </h2>
        </div>
    </div>
);
}

export default Footer;
