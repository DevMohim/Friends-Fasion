import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black container mx-auto text-white py-16 px-10 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left - Brand Info */}
        <div className="max-w-xs">
          <h2 className="text-2xl font-bold mb-4">FASHION</h2>
          <p className="text-gray-400 mb-6">
            Complete your style with awesome clothes from us.
          </p>
          <div className="flex gap-3">
            <a href="#"
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-9 h-9 flex items-center justify-center rounded-md"
            >
              <FaFacebookF className="text-black text-sm" />
            </a>
            
              <a href="#"
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-9 h-9 flex items-center justify-center rounded-md"
            >
              <FaInstagram className="text-black text-sm" />
            </a>
            
              <a href="#"
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-9 h-9 flex items-center justify-center rounded-md"
            >
              <FaTwitter className="text-black text-sm" />
            </a>
            
            <a  href="#"
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors w-9 h-9 flex items-center justify-center rounded-md"
            >
              <FaLinkedinIn className="text-black text-sm" />
            </a>
          </div>
        </div>

        {/* Right - Links */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Link</h3>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Share Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Orders Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;