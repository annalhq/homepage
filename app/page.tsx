"use client";

import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../sass/main.scss";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (loading) {
        document.querySelector("body")?.classList.add("loading");
      } else {
        document.querySelector("body")?.classList.remove("loading");
      }
    }
  }, [loading]);

  return (
    <AnimateSharedLayout>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src="/images/image-2.jpg"
                  layoutId="main-image-1"
                  alt="Main Image"
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}