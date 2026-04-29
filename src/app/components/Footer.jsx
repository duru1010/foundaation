export default function Footer() {
  return (
    <footer className="bg-[#7c75d8] px-4 py-10 flex justify-center">
      <div className="bg-[#f4f4f6] w-full max-w-8xl rounded-2xl p-8 md:p-12 text-gray-800">
        
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* LEFT */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-semibold text-lg mb-2">
              <div className="bg-[#6c63ff] text-white px-2 py-1 rounded-md">
                ⬢
              </div>
              DevStack
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Streamlining business operations for small businesses with
              powerful, easy-to-use software solutions.
            </p>

            <div className="flex gap-3 text-lg">
              <span className="cursor-pointer">🌐</span>
              <span className="cursor-pointer">🐦</span>
              <span className="cursor-pointer">💼</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="max-w-md w-full">
            <h4 className="font-semibold mb-2">
              Subscribe to our newsletter
            </h4>

            <p className="text-sm text-gray-500 mb-3">
              Get the latest updates, tips, and product news delivered straight
              to your inbox.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-[#6c63ff] text-white px-4 rounded-r-md hover:opacity-90">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10 text-sm">
          
          <div>
            <h5 className="text-gray-400 text-xs mb-3">PRODUCTS</h5>
            <ul className="space-y-2">
              <li>Business Suite</li>
              <li>Client Manager</li>
              <li>Finance Tools</li>
              <li>Project Tracker</li>
              <li>Reporting</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">SOLUTIONS</h5>
            <ul className="space-y-2">
              <li>For Startups</li>
              <li>For Small Business</li>
              <li>For Agencies</li>
              <li>For E-commerce</li>
              <li>Enterprise</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">RESOURCES</h5>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Reference</li>
              <li>Blog</li>
              <li>Community</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">COMPANY</h5>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="text-gray-400 text-xs mb-3">LEGAL</h5>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR Compliance</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:gap-6 gap-2">
            <span>📧 contact@devstack.com</span>
            <span>📞 +1 (555) 123-4567</span>
            <span>📍 123 Business Ave, Suite 100, San Francisco, CA 94107</span>
          </div>

          <p>© 2025 DevStack, Inc. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}