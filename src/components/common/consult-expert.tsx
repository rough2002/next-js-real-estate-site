import Image from "next/image";

export default function ConsultExpert() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white md:rounded-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/3 shadow-xl rounded-lg overflow-hidden">
          <Image
            src="/images/JS_half.jpg"
            alt="Expert Image"
            width={600}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center">
          <p className="text-xl text-main-blue font-semibold mb-4">
            Want To Consult an Expert Regarding Your First Home?
          </p>
          {/* <h2 className="text-4xl font-bold mb-6">TRUST SAMIT!</h2> */}
          <p className="text-gray-700 leading-relaxed mb-4">
            Jatendar Sachdev is widely regarded as one of the most trusted real
            estate agents in Nova Scotia. Specializing in first-time home
            buyers, Jatendar has developed a deep understanding of the unique
            challenges and opportunities they face. He offers comprehensive
            support throughout the entire home-buying process, from initial
            consultation to closing the deal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            With Jatendar’s personalized assistance and expert advice,
            first-time buyers can confidently navigate the journey to owning
            their dream home!
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold transition-colors">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </section>
  );
}
