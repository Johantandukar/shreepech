"use client";

import Button, { LinkButton } from "../Button";
import { AnimatePresence, motion, Variants } from "motion/react";
import { Cross as Hamburger } from "hamburger-react";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Navbar as NavbarType } from "@/types/payload-types";
import getImage, { getAltText } from "@/lib/get-image";
import Link from "next/link";

const menuVariants: Variants = {
  hidden: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  visible: {
    y: "0%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Navbar({ data }: { data: NavbarType }) {
  const [open, setOpen] = useState<boolean>(false);
  const links = data.links || [];
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (open) {
        gsap.fromTo(
          ".menu-link",
          { y: 70, opacity: 0, rotateX: -20 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.4,
          },
        );
        gsap.fromTo(
          ".menu-info",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.8,
          },
        );
      }
    },
    { dependencies: [open], scope: containerRef },
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-1000 px-4 py-1 md:px-12 md:py-1 flex flex-row justify-between items-center bg-white/60 backdrop-blur-xl border-b border-black/20">
        <div className="flex flex-1 items-center gap-3">
          <div className="flex items-center justify-center p-1 rounded-full hover:bg-black/5 transition-colors duration-300">
            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={20}
              duration={0.4}
            />
          </div>
          <span className="text-black font-satoshi text-xs  tracking-[0.2em] font-medium hidden md:block">
            {open ? "Close" : "Menu"}
          </span>
        </div>

        <Link
          href={"/"}
          className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors duration-300"
          onClick={() => setOpen(false)}
        >
          <Image
            src={getImage(data.logo)}
            alt={getAltText(data.logo)}
            width={32}
            height={32}
            className="aspect-square"
          />
        </Link>

        <div className="flex flex-1 justify-end items-center gap-4">
          <Button
            className="text-xs md:text-sm px-4 py-2 md:px-6 md:py-2.5"
            variant="outline"
          >
            Start a project
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={containerRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 w-full h-screen border-b bg-white z-999 flex flex-col pt-32 pb-12 px-6 md:px-24 overflow-hidden"
          >
            <div className="flex-1 grid md:grid-cols-[60%_40%] h-full">
              <div className="flex flex-col justify-center">
                <span className="menu-info font-urbanist text-black/40 text-sm uppercase tracking-wider mb-4 font-bold">
                  Navigation
                </span>
                <ul className="flex flex-col gap-1 md:gap-4">
                  {links.map((item, i) => (
                    <li key={i} className="menu-link px-8 w-full">
                      <LinkButton
                        className="text-5xl md:text-8xl font-cabinet block"
                        href={item.link}
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </LinkButton>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between md:items-end md:text-right mt-12 md:mt-0">
                <div className="flex flex-col gap-12 md:gap-20 h-full justify-center">
                  <div className="menu-info">
                    <span className="menu-info font-urbanist text-black/40 text-sm uppercase tracking-wider mb-4 font-bold">
                      Contact
                    </span>
                    <div className="flex flex-col flex-wrap-reverse gap-3">
                      {data.contact?.email && (
                        <LinkButton
                          href={`mailto:${data.contact.email}`}
                          className="text-xl md:text-3xl font-satoshi font-medium"
                        >
                          {data.contact.email}
                        </LinkButton>
                      )}
                      {data.contact?.phone && (
                        <LinkButton
                          href={`tel:${data.contact.phone}`}
                          className="text-xl md:text-3xl font-satoshi font-medium"
                        >
                          {data.contact.phone}
                        </LinkButton>
                      )}
                    </div>
                  </div>

                  <div className="menu-info">
                    <span className="menu-info font-urbanist text-black/40 text-sm uppercase tracking-wider mb-4 font-bold">
                      Socials
                    </span>
                    <div className="flex flex-wrap-reverse md:flex-col gap-6 md:gap-3">
                      {data.socials?.map((social, i) => (
                        <LinkButton
                          key={i}
                          href={social.link}
                          className="text-lg md:text-xl font-satoshi"
                        >
                          {social.name}
                        </LinkButton>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="menu-info font-urbanist mt-auto pt-10 border-t border-black/5 w-full flex justify-between items-center text-xs  tracking-[0.2em] text-blackfont-satoshi font-bold">
                  <p>© 2026 Shreepech Internationals</p>
                  <p>All Rights Reserved</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
