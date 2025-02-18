import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Globe } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help Communities Rebuild
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Your donation provides immediate relief and long-term support to
              disaster-affected communities worldwide.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              We ensure your donation makes the maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Donations</h3>
              <p className="text-gray-600">
                Your contributions are protected with industry-leading security
                measures
              </p>
            </div>

            <div className="text-center p-6">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direct Impact</h3>
              <p className="text-gray-600">
                90% of donations go directly to affected communities
              </p>
            </div>

            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Supporting disaster relief efforts worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Campaigns */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Relief Campaigns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hurricane Recovery",
                image:
                  "https://images.unsplash.com/photo-1569437061241-5d6f0651b79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description:
                  "Supporting communities affected by recent hurricanes in the Caribbean",
                goal: 500000,
                raised: 350000,
              },
              {
                title: "Earthquake Relief",
                image:
                  "https://images.unsplash.com/photo-1587653263995-422546a7a569?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description:
                  "Providing emergency shelter and supplies to earthquake victims",
                goal: 750000,
                raised: 425000,
              },
              {
                title: "Flood Response",
                image:
                  "https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description:
                  "Emergency assistance for communities affected by severe flooding",
                goal: 300000,
                raised: 215000,
              },
            ].map((campaign, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>

                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{
                          width: `${(campaign.raised / campaign.goal) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>{campaign.raised.toLocaleString()} raised</span>
                      <span>Goal: {campaign.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  <Link
                    to="/donate"
                    className="block text-center bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
