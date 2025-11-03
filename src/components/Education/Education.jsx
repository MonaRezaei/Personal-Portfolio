import { EDUCATION } from "../../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-8 text-right" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-3xl font-bold"
      >
        Education
      </motion.h2>
      {EDUCATION.map((education, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="mb-6 p-10"
        >
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-lg">{education.institution}</p>
          <p className="text-sm text-stone-300">{education.duration}</p>
          <ul className="mt-2">
            <li>{education.description[1]}</li>
            <li>{education.description[2]}</li>
            <li>{education.description[3]}</li>
            <li>{education.description[4]}</li>
          </ul>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
