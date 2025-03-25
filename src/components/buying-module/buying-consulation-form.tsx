import React from "react";
import ContactForm from "../common/contact-forn";
interface Props {
  heading?: string;
}

export default function ConsultationForm({ heading }: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 px-6 py-12 lg:px-24 lg:py-20 bg-gray-50 text-lg">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          {heading || "Book A Buyer&apos;s Consultation"}
        </h2>
        <p className="text-gray-600">
          Let&apos;s get in touch and discuss your requirements!
        </p>
      </div>
      <ContactForm />

      {/* <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h3 className="text-2xl font-semibold mb-6">Let us know about you</h3>

        <form className="flex flex-col gap-4">
          {/* <select className="border rounded-md py-2 px-3">
            <option>I am</option>
            <option>Buyer</option>
            <option>Seller</option>
            <option>Agent</option>
          </select> */}

      {/* <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border rounded-md py-2 px-3 w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border rounded-md py-2 px-3 w-full"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md py-2 px-3 w-full"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="border rounded-md py-2 px-3 w-full"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={4}
            className="border rounded-md py-2 px-3 w-full resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-md font-semibold mt-4"
          >
            Book A Free Consultation
          </button>
        </form> */}
      {/* </div> */}
    </div>
  );
}
