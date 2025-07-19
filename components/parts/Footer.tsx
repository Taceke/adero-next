import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const servicesList = [
    { name: "Software Development", link: "/services/software-development" },
    { name: "Education Consultancy", link: "/services/education_consultancy" },
    { name: "Training and Consultancy", link: "/services/training_and_courses" },
    // Add more as needed
  ];

  const usefulLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact_us" },
    { name: "Careers", href: "/career" },
    { name: "Services", href: "/services" },

    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="border-t border-primary snap-normal snap-start bg-white">
      <div className="flex flex-col md:flex-row justify-around px-4 py-12">
        {/* Logo + Socials */}
        <div className="text-sm flex flex-col justify-start gap-4 text-sm font-medium mb-6">
          <Image
            src="/adero_logo.svg"
            alt="Adero Logo"
            width={96}
            height={80}
          />
          <ul className="flex gap-x-4">
            <li>
              <a href="https://www.instagram.com/yahyish5/" target="_blank">
                <img
                  src="/images/icons/hugeicons_instagram.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="https://t.me/yahtech" target="_blank">
                <img
                  src="/images/icons/ic_baseline-telegram.svg"
                  alt="Telegram"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aderoo-tech-243b84312/"
                target="_blank"
              >
                <img
                  src="/images/icons/mdi_linkedin.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100010401752784"
                target="_blank"
              >
                <img
                  src="/images/icons/ic_baseline-facebook.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/qr/5T6MTLQXHRLPL1" target="_blank">
                <img
                  src="/images/icons/ic_baseline-whatsapp.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                />
              </a>
            </li>
            <li>
              <a href="https://x.com/yahya_abdela" target="_blank">
                <img
                  src="/images/icons/prime_twitter.svg"
                  alt="X (Twitter)"
                  width={28}
                  height={28}
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-2 flex flex-col mb-6">
          <h2 className="font-bold text-secondary">Our Services</h2>
          <ul className="space-y-1.5">
            {servicesList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-secondary text-sm hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="space-y-2 text-start mb-6">
          <h2 className="font-bold text-gray text-md">Useful Links</h2>
          <ul className="space-y-1.5">
            {usefulLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-secondary text-sm hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 flex flex-col text-start mb-6">
          <h2 className="font-bold text-secondary">Contact Information</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:+251912609473"
                className="text-secondary font-medium"
              >
                📞 +251-912-609473
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@adero.tech"
                className="text-secondary font-medium"
              >
                📧 contact@adero.tech
              </a>
            </li>
            <li>
              <span className="text-secondary font-medium">
                📍 Addis Ababa, Ethiopia
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center border-t border-primary border-gray-400 p-12">
        <h1 className="font-semibold text-secondary text-sm text-center">
          ©Copyright {new Date().getFullYear()} AderoTech PLC. All Rights
          Reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
