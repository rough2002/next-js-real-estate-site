import Image from "next/image";

interface Props {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const Banner = ({ imageSrc, altText, title, description }: Props) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/3 h-[300px] md:h-[400px] relative">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        <div className="w-full md:w-1/3 bg-teal-500 text-white p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
