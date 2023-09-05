"use client";

import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="page-wrapper"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 1 },
            // onExitComplete: () => console.log("Exit animation complete")
          }}
          // onAnimationComplete={() => console.log("Animation complete")}
          position="relative"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
