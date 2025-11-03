import { HERO } from "../../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import resumePdf from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <>
      <section
        className="flex min-h-screen flex-wrap justify-center items-center"
        style={{ zIndex: 1, position: "relative" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center"
        >
          <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
            {HERO.name}
          </h2>
          <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
            {HERO.greet}
          </p>
          <p className="mb-8 p-2 text-xl">{HERO.description}</p>
          <a
            href={resumePdf}
            download="Mona_Resume.pdf"
            className="inline-block font-bold mt-4 rounded bg-stone-900 text-white px-8 py-4  hover:bg-stone-800 text-2xl "
          >
            رزومه من
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
