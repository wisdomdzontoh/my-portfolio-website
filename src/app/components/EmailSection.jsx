"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setError(null); // Clear any previous errors
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to send message.");
        console.error("Failed to send message:", errorData.error);
      }
    } catch (err) {
      console.error("Error during fetch:", err);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="relative my-12 py-24 grid md:grid-cols-2 gap-4">
      <div className="absolute top-1/2 -left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-primary-900 to-transparent blur-lg z-0"></div>
      <div className="z-10 flex flex-col">
        <h5 className="text-xl font-bold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-8 max-w-md">
          I&apos;m currently looking for new opportunities, and my inbox is always open. Whether you have a question
          or just want to say hi, I&apos;ll try my best to get back to you! For immediate assistance, please email me at{" "}
          <a href="mailto:wisdomdzontoh@gmail.com" className="text-primary-500">wisdomdzontoh@gmail.com</a>.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/wisdomdzontoh" aria-label="Github Profile">
            <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/wisdom-dzontoh-563430195" aria-label="LinkedIn Profile">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={24} height={24} />
          </Link>
          {/* Uncomment if you have a WhatsApp link
          <Link href="https://wa.me/yourwhatsappnumber" aria-label="WhatsApp">
            <Image src={WhatsappIcon} alt="WhatsApp Icon" width={24} height={24} />
          </Link>
          */}
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </section>
  );
};

export default EmailSection;
