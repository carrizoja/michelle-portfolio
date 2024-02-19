"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import styles from "@/components/navbar/navbar.module.css";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={styles.container__navbar}>
        <motion.nav
          className={styles.nav}
          animate={show ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <motion.div className={styles.innerNav}>
            <ul id="navlinks">
              <motion.li>
                <Link
                  href="/"
                  onClick={() => {
                    setShow((show) => !show);
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <p className={styles.homeTitle}>HOME</p>
                </Link>
              </motion.li>
              <motion.li className={styles.aboutTitle}>
                <Link
                  href="#"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  ABOUT
                </Link>
                <motion.ul className={styles.submenu}>
                  <motion.li className={styles.submenu_li}>
                    <Link href="/about"
                      onClick={() => {
                        setShow((show) => !show);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    ><p className={styles.submenu_title}>About Me</p></Link>
                  </motion.li>
                  <motion.li className={styles.submenu_li}>
                    <Link
                     href="/about/manifesto"
                     onClick={() => {
                      setShow((show) => !show);
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                     ><p className={styles.submenu_title}>Manifesto</p></Link>
                  </motion.li>
                  <motion.li className={styles.submenu_li}>
                    <Link 
                    href="/about/functional"
                    onClick={() => {
                      setShow((show) => !show);
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    >

                    <p className={styles.submenu_title}>Functional Sculptures</p>
                    
                    </Link>
                  </motion.li>
                </motion.ul>
              </motion.li>
              <motion.li>
                <Link
                  href="/services"
                  onClick={() => {
                    setShow((show) => !show);
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  SERVICES
                </Link>
              </motion.li>
              <motion.li>
                <Link
                  href="/portfolio"
                  onClick={() => {
                    setShow((show) => !show);
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  PORTFOLIO
                </Link>
              </motion.li>
              <motion.li>
                <Link
                  href="/contact"
                  onClick={() => {
                    setShow((show) => !show);
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  CONTACT
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </motion.nav>
        <motion.button
          className={styles.toggle}
          onClick={() => setShow((show) => !show)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {show ? <CloseIcon className={styles.closeIcon} /> : <MenuIcon />}
        </motion.button>
      </div>
    </>
  );

  function DropdownMenuItem() {
    return (
      <div className={styles.dropdown}>
        <Link href="/about">ABOUT</Link>
        <Link href="/services">FUNCTIONAL SCULPTURES</Link>
      </div>
    );
  }
};

export default Navbar;
