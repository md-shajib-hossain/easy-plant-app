// PrivacyPolicy.jsx
import { Home } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last Updated:{" "}
            <span className="text-green-600">October 23, 2025</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to <strong>GreenLife</strong> ("we," "our," or "us"). We
              are committed to protecting your privacy and ensuring you have
              complete control over your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website{" "}
              <Link to="/" className="text-green-600 hover:underline">
                greenlife.com
              </Link>
              , use our services, or interact with us.
            </p>
            <p className="text-gray-600">
              By using our services, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              2. Information We Collect
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personal Information
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full Name</li>
                  <li>• Email Address</li>
                  <li>• Phone Number</li>
                  <li>• Shipping Address</li>
                  <li>• Payment Information</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Automatic Information
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• IP Address</li>
                  <li>• Browser Type</li>
                  <li>• Device Information</li>
                  <li>• Pages Visited</li>
                  <li>• Time & Date</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              3. How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-600">
                    Process and deliver your plant orders
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-600">
                    Send order confirmations and updates
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-600">Provide customer support</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-600">
                    Send promotional offers (opt-out available)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-600">
                    Improve our website and services
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <p className="text-gray-600">
                    Prevent fraud and ensure security
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              4. Information Sharing
            </h2>
            <p className="text-gray-600 mb-4">
              We <strong>DO NOT</strong> sell your personal information. We only
              share it with:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <strong>Shipping Partners:</strong> For delivery (e.g., Pathao,
                RedX)
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <strong>Payment Processors:</strong> SSLCommerz, bKash
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <strong>Legal Authorities:</strong> If required by law
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              5. Cookies & Tracking
            </h2>
            <p className="text-gray-600 mb-4">
              We use cookies to enhance your experience. You can:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <button className="btn btn-outline btn-sm">Accept All</button>
              <button className="btn btn-outline btn-sm">Reject All</button>
              <button className="btn btn-outline btn-sm">Manage Cookies</button>
            </div>
            <p className="text-sm text-gray-500">
              <Link to="#" className="text-green-600 hover:underline">
                Learn more about our Cookie Policy
              </Link>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              6. Your Rights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Access & Update
                </h3>
                <p className="text-gray-600 text-sm">
                  View and edit your information anytime
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Delete Data
                </h3>
                <p className="text-gray-600 text-sm">
                  Request permanent deletion
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Opt-Out</h3>
                <p className="text-gray-600 text-sm">Unsubscribe from emails</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Data Portability
                </h3>
                <p className="text-gray-600 text-sm">Download your data</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              7. Data Security
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">
                🔒 Your Data is Safe With Us
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• SSL Encryption for all transactions</li>
                <li>• Secure Firebase Authentication</li>
                <li>• Regular security audits</li>
                <li>• GDPR & Bangladesh Data Protection compliant</li>
                <li>• 256-bit encryption for stored data</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              8. Children's Privacy
            </h2>
            <p className="text-gray-600">
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children. If we
              discover such information, we will delete it.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
              10. Contact Us
            </h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                Questions about this Privacy Policy? Contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Email:</p>
                  <a
                    href="mailto:privacy@greenlife.com"
                    className="text-green-600 hover:underline"
                  >
                    privacy@greenlife.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <a
                    href="tel:+88017XXXXXXXX"
                    className="text-green-600 hover:underline"
                  >
                    +880 17XX-XXXXXX
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-8">
          <Link to="/contact" className="btn btn-primary btn-outline mr-2">
            Contact Us
          </Link>
          <Link to="/">
            <button className="btn btn-outline btn-accent ml-2  ">
              <span>
                <Home></Home>
              </span>
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
