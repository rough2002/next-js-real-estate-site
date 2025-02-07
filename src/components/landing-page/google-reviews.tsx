const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "In person Jatender Sachdev is a very kind hearted, friendly gentleman and very professional and honest individual when it comes to work ethics. It's been a wonderful journey towards finding our first home and it would have not been possible without Jatender's help and awesome guidance. I would highly recommend Jatender Sachdev as Realtor, he is the go-to individual who can bring your dream home to reality.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    text: "Let me start the review with a big - Thank you! for all the help to buy our DREAM HOME in Canada. It was quite challenging and had a lot of confusion initially when we started looking out: house/apartment, area, property builder, lawyer, budget, etc. (It's a long list!!), then a friend of mine recommended to meet Jatender. He was very informative, resourceful, and punctual in all the meetings. He understood our requirements well and shared his honest feedback & comments about each property. He made the entire process very smooth and also helped with the post-purchase things-to-do list as a friend. I recommend him to anyone who wants any help to buy a property.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 4,
    text: "I had contacted Jatender for home purchase, and it was a wonderful experience. This was my first home purchase with little knowledge and experience of Canadian home market. The task was difficult for me, but it turned out to be easy with Jatender's help. Jatender was fully transparent from day one and was highly proactive to share all the updates. He was always available to help and talk even after office hours which was convenient and comfortable to me. I highly recommend Jatender for anyone who is looking to buy or sell a home.",
  },
  // Add more reviews...
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-6" id="el-3r4d5izc">
        <div
          className="text-center mb-12 animate__animated animate__fadeInUp"
          id="el-s1yiipq6"
        >
          <h2
            className="text-4xl font-bold text-neutral-900 mb-4"
            id="el-7av2tjq7"
          >
            Google Reviews
          </h2>
          <p className="text-neutral-600 text-lg" id="el-o0u615c5">
            See what our clients have to say about their experience
          </p>
          <div
            className="flex items-center justify-center gap-2 mt-4"
            id="el-5306unwf"
          >
            <div className="flex text-amber-500" id="el-wz025hqw">
              {/* Ratings SVG */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span
              className="text-xl font-bold text-neutral-900"
              id="el-qmu53dgm"
            >
              4.9/5
            </span>
            <span className="text-neutral-600" id="el-2pwc8y2p">
              (128 reviews)
            </span>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="el-3xxuf0n9"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-lg animate__animated animate__fadeIn"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-neutral-600">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-neutral-900">
                    {review.name}
                  </h4>
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-neutral-600">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Jatender+Sachdev+-+Indian+REALTOR+in+Halifax,+EXIT+Realty+Specialists/@44.664992,-63.6213907,17z/data=!3m1!4b1!4m11!1m2!2m1!1sjatinder+sachdeva+realtor+halifax+google+maps!3m7!1s0x4b5989f6d74c2e59:0x51768492de3c095b!8m2!3d44.6649882!4d-63.6188158!9m1!1b1!16s%2Fg%2F11f53z1kbr?entry=ttu&g_ep=EgoyMDI1MDIwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <svg className="h-10 w-10" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            View More Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
