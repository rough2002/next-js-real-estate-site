"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StagingInfo() {
  return (
    <section className="bg-white py-16 px-8 lg:px-24 mt-24">
      <div className="grid grid-cols-1 gap-12 space-y-8">
        {/* Vacant Property Staging Section */}
        <motion.div
          className="flex flex-col justify-center items-center lg:flex-row lg:justify-around space-y-4 space-x-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/inside1.png"
            alt="Vacant Property Staging"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="">
            <h3 className="text-3xl font-semibold text-blue-900">
              Vacant Property Staging
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              Vacant properties often struggle to make a lasting impression on
              potential buyers, as empty rooms can feel cold and uninviting. Our
              vacant property staging services are designed to transform these
              spaces into warm, welcoming environments that highlight their full
              potential. By strategically placing carefully chosen furniture,
              décor, and accessories, we create a vision of what living in the
              home could be like, making it easier for buyers to connect
              emotionally and envision themselves in the space.
            </p>
          </div>
        </motion.div>

        {/* Downsizing/Resizing Section */}
        <motion.div
          className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-around space-y-4 space-x-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/inside2.png"
            alt="Downsizing/Resizing"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-3xl font-semibold text-blue-900">
              Downsizing/Resizing
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              Downsizing can be an emotional and challenging process, but our
              specialized downsizing staging services are designed to make the
              transition as smooth and successful as possible. We understand
              that moving to a smaller space requires careful planning and
              thoughtful staging to showcase the home’s best features while
              optimizing its layout. Our team works closely with you to select
              and arrange furnishings and décor that create a warm, inviting
              atmosphere, making it easier for potential buyers to see the full
              potential of your property.
            </p>
          </div>
        </motion.div>

        {/* Occupied Staging Section */}
        <motion.div
          className="flex flex-col justify-center items-center lg:flex-row lg:justify-around space-y-4 space-x-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/inside3.png"
            alt="Occupied Staging"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-3xl font-semibold text-blue-900">
              Occupied Staging
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              Occupied staging services are designed to make the most of your
              current furnishings while preparing your home for sale. Our team
              of staging experts works with what you already have, rearranging
              and supplementing your furniture and decor to highlight your
              home’s best features. We focus on creating a clean, uncluttered
              look that appeals to a broad range of buyers, ensuring your home
              makes a strong first impression. By enhancing the flow and
              functionality of each room, we help buyers visualize themselves
              living in the space, which is crucial for a successful sale.
            </p>
          </div>
        </motion.div>

        {/* Virtual Staging Services Section */}
        <motion.div
          className="flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-around space-y-4 space-x-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/inside4.png"
            alt="Virtual Staging Services"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-3xl font-semibold text-blue-900">
              Virtual Staging Services
            </h3>
            <p className="text-gray-700 text-lg mt-4">
              Virtual Staging Services offer an innovative and cost-effective
              solution to showcase your property’s potential without the need
              for physical staging. Using advanced digital technology, we create
              realistic and inviting images that help potential buyers visualize
              the possibilities of each space. This service is ideal for vacant
              properties or homes that need updating, as it allows us to add
              furniture, decor, and other elements virtually. By enhancing your
              online listings with high-quality, digitally staged photos, we
              make your property more attractive and engaging, ultimately
              helping buyers see themselves living in the space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
