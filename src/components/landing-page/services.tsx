"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
        id="el-7wkc6e4i"
      >
        <div
          className="text-center mb-16 animate__animated animate__fadeInUp"
          id="el-mnnc8ka2"
        >
          <h2 className="text-4xl font-bold text-white mb-4" id="el-r8lruhvv">
            Our Services
          </h2>
          <p className="text-neutral-400 text-lg" id="el-fyupail8">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="el-7x18qzkj"
        >
          <div
            className="bg-neutral-800 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeIn"
            id="el-yykdtjf6"
          >
            <div
              className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              id="el-heemkyoi"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="el-ai8r1nst"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  id="el-q3u0vzyk"
                ></path>
              </svg>
            </div>
            <h3
              className="text-2xl font-semibold text-white mb-4"
              id="el-lhwkitgj"
            >
              Residential Sales
            </h3>
            <p className="text-neutral-400 mb-6" id="el-nox9g7gq">
              Expert guidance through the entire home buying and selling
              process, from listing to closing.
            </p>
            <ul className="space-y-3 text-neutral-300" id="el-p2qj9bbp">
              <li className="flex items-center" id="el-gz56eiof">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-cye99fpx"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-08jlio3m"
                  ></path>
                </svg>
                Market Analysis
              </li>
              <li className="flex items-center" id="el-fdo2r1yt">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-hq7wx2wb"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-k7pp1j2h"
                  ></path>
                </svg>
                Property Staging
              </li>
              <li className="flex items-center" id="el-0lrgsxiv">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-5fr2o6mb"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-u37fcgxy"
                  ></path>
                </svg>
                Negotiation Support
              </li>
            </ul>
          </div>

          <div
            className="bg-neutral-800 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeIn"
            id="el-tii1wyrx"
          >
            <div
              className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              id="el-h1tfj5vc"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="el-hd2efy96"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  id="el-x0d2amyd"
                ></path>
              </svg>
            </div>
            <h3
              className="text-2xl font-semibold text-white mb-4"
              id="el-4xnske1z"
            >
              Property Management
            </h3>
            <p className="text-neutral-400 mb-6" id="el-lci27q0p">
              Comprehensive property management services for investors and
              property owners.
            </p>
            <ul className="space-y-3 text-neutral-300" id="el-k85j0bhs">
              <li className="flex items-center" id="el-qf521c43">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-25n3c4wx"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-we4o12dy"
                  ></path>
                </svg>
                Tenant Screening
              </li>
              <li className="flex items-center" id="el-l3bzmwn9">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-hcrdu551"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-9vqgipnj"
                  ></path>
                </svg>
                Maintenance Coordination
              </li>
              <li className="flex items-center" id="el-u34ntmp2">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-uld3ybfa"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-0k0lo5t6"
                  ></path>
                </svg>
                Rent Collection
              </li>
            </ul>
          </div>

          <div
            className="bg-neutral-800 rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeIn"
            id="el-yxs4ymca"
          >
            <div
              className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6"
              id="el-ofuz6n2j"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="el-jqo5z89l"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  id="el-myg1jh7l"
                ></path>
              </svg>
            </div>
            <h3
              className="text-2xl font-semibold text-white mb-4"
              id="el-s1zgwm9p"
            >
              Investment Consulting
            </h3>
            <p className="text-neutral-400 mb-6" id="el-8f9i5woq">
              Strategic advice for real estate investors looking to maximize
              their returns.
            </p>
            <ul className="space-y-3 text-neutral-300" id="el-ohycfwad">
              <li className="flex items-center" id="el-4w8mk2g0">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-arcv5tez"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-d7bl8cn7"
                  ></path>
                </svg>
                Market Research
              </li>
              <li className="flex items-center" id="el-kilwjmr5">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-vf9ceqn0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-8x5vcbf9"
                  ></path>
                </svg>
                ROI Analysis
              </li>
              <li className="flex items-center" id="el-rb4fa9vl">
                <svg
                  className="w-5 h-5 text-amber-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="el-c15lacc7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-u07gmdyz"
                  ></path>
                </svg>
                Portfolio Strategy
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12" id="el-yllftciz">
          <Link
            href="/contact"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-600 transition duration-300"
            id="el-v61rbviv"
          >
            Schedule a Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
