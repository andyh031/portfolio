import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function PageImage({ image }) {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 50, y: 50 },
          show: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image
          boxShadow="xl"
          position="sticky"
          top="15rem"
          maxW={{
            base: "clamp(200px, 70vw, 350px)",
            sm: "clamp(300px,30vw,400px)",
          }}
          h={{
            base: "clamp(200px, 70vw, 350px)",
            sm: "clamp(300px,30vw,400px)",
          }}
          borderRadius="50%"
          objectFit="cover"
          src={image}
          loading="lazy"
        />
      </motion.div>
    </>
  );
}
