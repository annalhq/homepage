"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">GDG RBU</div>
        <nav className="nav">
          <li>
            <Link href="/design">Design</Link>
          </li>
          <li>
            <Link href="/strategy">Strategy</Link>
          </li>
          <li>
            <Link href="/cases">Cases</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/why">Why work with us?</Link>
          </li>
        </nav>
        <div className="contact">
          <Link href="/contact">Let it be, don&apos;t care</Link>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;