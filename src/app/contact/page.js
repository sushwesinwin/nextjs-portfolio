'use client';
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

export default function ContactPage() {
  const contactItems = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone / WhatsApp",
      value: "09-789315733",
      href: "https://wa.me/959789315733",
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: "sushwesinw@gmail.com",
      href: "mailto:sushwesinw@gmail.com",
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Location",
      value: "Yangon, Myanmar",
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="text-xl" />,
      href: "https://github.com/sushwesinwin",
      label: "GitHub"
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/in/su-shwe-sin-win/",
      label: "LinkedIn"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col mt-20 ">
      <div className="flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl text-white font-bold mb-10"
        >
          Get In Touch
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactItems.map((contact, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  {contact.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">
                  {contact.title}
                </h2>
              </div>
              
              {contact.href ? (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-300">{contact.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer with social links */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-6 border-t border-white/10 mt-40"
      >
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} SU SHWE SIN WIN. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}