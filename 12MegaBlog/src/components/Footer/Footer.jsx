import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap justify-center items-start"> {/* align items to the start */}
                    <div className="w-full p-6 md:w-1/3 lg:w-2/12">
                        <div className="h-full flex flex-col justify-start"> {/* use flex and justify-start */}
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/3 lg:w-2/12">
                        <div className="h-full flex flex-col justify-start"> {/* use flex and justify-start */}
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/3 lg:w-2/12">
                        <div className="h-full flex flex-col justify-start"> {/* use flex and justify-start */}
                            <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
