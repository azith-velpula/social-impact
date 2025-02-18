import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">ImpactFunds</span>
            </div>
            <p className="mt-4 text-gray-300">
              Providing immediate assistance and long-term support to
              communities affected by natural disasters.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>impactfunds@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91983898332</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To provide rapid, effective relief to communities affected by
              disasters while ensuring transparency and accountability in all
              our operations.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ImpactFunds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
