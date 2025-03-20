"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

interface AnimatedLettersProps {
  title: string;
  disabled?: boolean;
}

interface BannerRowProps {
  title: string;
}

interface BannerRowCenterProps extends BannerRowProps {
  playMarquee: boolean;
  speed?: number; // Add optional speed property
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  title,
  disabled,
}) => (
  <motion.span
    className="row-title"
    variants={disabled ? undefined : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        className="row-letter"
        variants={disabled ? undefined : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop: React.FC<BannerRowProps> = ({ title }) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      >
        <span className="row-message text-gray-900">
          Empowering students to build the future with Google technology.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom: React.FC<BannerRowProps> = ({ title }) => {
  return (
    <div className="banner-row center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 1,
          delay: 1,
        }}
        className="scroll"
      ></motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter: React.FC<BannerRowCenterProps> = ({
  title,
  playMarquee,
  speed = 0.5,
}) => {
  return (
    <div
      className={`banner-row marquee ${playMarquee ? "animate" : ""}`}
      style={{ "--marquee-speed": speed } as React.CSSProperties}
    >
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 1,
        }}
        className="marquee__inner"
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

const Banner: React.FC = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title="GDG" />
      <BannerRowCenter
        title="google-developers-group"
        playMarquee={playMarquee}
        speed={0.7} 
      />
      <BannerRowBottom title="rbu" />
    </motion.div>
  );
};

export default Banner;
