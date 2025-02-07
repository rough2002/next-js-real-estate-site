"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { AnimatedCounter } from "../animated-components";
// import { Button } from "../ui/button";

export default function WhyChooseMe() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Image
              src="/images/JS_half.jpg"
              alt="Real Estate Agent"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-amber-500">
              Jatender Sachdev
            </h2>
            <p className="text-lg mb-6">
              Dedicated real estate professional with over a decade of
              experience in helping clients find their dream homes and make
              smart investments.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">My Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <p className="text-amber-500 font-bold text-4xl">
                <AnimatedCounter value={10} duration={4} />+
              </p>
              <p className="text-gray-400 text-lg">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-amber-500 font-bold text-4xl">
                <AnimatedCounter value={500} duration={2} />+
              </p>
              <p className="text-gray-400 text-lg">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-amber-500 font-bold text-4xl">
                <AnimatedCounter value={100} duration={2} />+
              </p>
              <p className="text-gray-400 text-lg">Properties Sold</p>
            </div>
            {/* <div className="flex flex-col items-center">
              <p className="text-amber-500 font-bold text-4xl">
                $
                <AnimatedCounter value={50} duration={2} />
                M+
              </p>
              <p className="text-gray-400 text-lg">in Sales</p>
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex flex-col justify-center items-center"
        >
          <h3 className="text-3xl font-bold mb-8">Why Choose Me?</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Local Market Expertise
              </h4>
              <p>
                With deep knowledge of Nova Scotia real estate trends, I can
                help you make informed decisions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Personalized Approach
              </h4>
              <p>
                I tailor my services to your unique needs, ensuring a smooth and
                stress-free experience.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Strong Negotiation Skills
              </h4>
              <p>
                My proven track record in negotiations means the best deals for
                my clients.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Comprehensive Network
              </h4>
              <p>
                Access to a wide network of professionals to support all aspects
                of your real estate journey.
              </p>
            </div>
          </div>
          {/* <Button
            size="lg"
            className="bg-amber-500 text-black hover:bg-amber-600 md:h-16 w-min font-semibold text-lg mt-2"
          >
            Schedule a Consultation
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
