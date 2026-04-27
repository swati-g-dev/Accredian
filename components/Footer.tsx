import Link from "next/link";

const links = {
  Programs: ["AI & ML", "Data Science", "Product Management", "Business Analytics", "Leadership"],
  Company: ["About Us", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Case Studies", "Webinars", "Documentation", "Help Center"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-xl text-white">
              Accredian <span className="text-blue-500">Enterprise</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-5">
            Building future-ready workforces through world-class, IIT & IIM
            certified learning programs.
          </p>
          <div className="flex gap-3">
            {["LinkedIn", "Twitter", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="bg-gray-800 hover:bg-blue-600 text-xs px-3 py-1.5 rounded-lg transition"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(links).map(([section, items]) => (
          <div key={section}>
            <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <a key={l} href="#" className="hover:text-white transition">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}