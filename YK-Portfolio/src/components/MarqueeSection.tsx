import { motion } from "framer-motion";
const MarqueeSection = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  const reverseMarqueeVariants = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  const skills = [
    "DEVELOPER",
    "DESIGNER",
    "CREATOR",
    "INNOVATOR",
    "PROBLEM SOLVER",
  ];
  const duplicatedSkills = [...skills, ...skills, ...skills];
  return (
    <div className="py-16 bg-[#111] overflow-hidden">
      <motion.div
        className="whitespace-nowrap text-6xl font-bold mb-4"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedSkills.map((skill, index) => (
          <span key={index} className="inline-block mx-8">
            <span className="text-white">{skill}</span>
            <span className="text-[#4ecca3]">*</span>
          </span>
        ))}
      </motion.div>
      <motion.div
        className="whitespace-nowrap text-6xl font-bold"
        variants={reverseMarqueeVariants}
        animate="animate"
      >
        {duplicatedSkills.map((skill, index) => (
          <span key={index} className="inline-block mx-8">
            <span className="text-[#4ecca3]">{skill}</span>
            <span className="text-white">*</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
export default MarqueeSection;
