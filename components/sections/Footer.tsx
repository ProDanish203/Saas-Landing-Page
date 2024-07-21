import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 md:px-10 px-3">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 items-center justify-between">
        <div className="flex flex-col justify-between gap-y-20">
          <div className="sm:max-w-xs w-full">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-20 object-contain "
            />

            <p className="text-white mt-3">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <Linkedin className="social-icon" />
            <Instagram className="social-icon" />
            <Facebook className="social-icon" />
            <Twitter className="social-icon" />
            <Youtube className="social-icon" />
          </div>
        </div>
        <div className="grid gap-x-20 gap-y-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-white font-bold text-lg">Product</p>
            <ul className="footer-list">
              <li className="footer-list-item">Features</li>
              <li className="footer-list-item">Integrations</li>
              <li className="footer-list-item">Updates</li>
              <li className="footer-list-item">FAQ</li>
              <li className="footer-list-item">Pricing</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-lg">Company</p>
            <ul className="footer-list">
              <li className="footer-list-item">About</li>
              <li className="footer-list-item">Blog</li>
              <li className="footer-list-item">Careers</li>
              <li className="footer-list-item">Manifesto</li>
              <li className="footer-list-item">Press</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-lg">Resources</p>
            <ul className="footer-list">
              <li className="footer-list-item">Examples</li>
              <li className="footer-list-item">Community</li>
              <li className="footer-list-item">Guides</li>
              <li className="footer-list-item">Docs</li>
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-lg">Legal</p>
            <ul className="footer-list">
              <li className="footer-list-item">Privacy</li>
              <li className="footer-list-item">Terms</li>
              <li className="footer-list-item">Security</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
