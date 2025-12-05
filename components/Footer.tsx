import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/xe-96.png" 
                alt="VenaApp Logo" 
                width={32} 
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-text-primary">VenaApp</span>
            </div>
            <p className="text-text-secondary text-sm mb-4 max-w-md">
              Download media from any website with our powerful browser extension and companion app. 
              Privacy-focused, fast, and easy to use.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/AtutiBonface"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-white transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@venaapp.com"
                className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-white transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/companion-app"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Companion App
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-text-secondary">
            © {currentYear} VenaApp. All rights reserved.
          </p>
          <p className="text-sm text-text-secondary">
            Built with ❤️ by{" "}
            <a
              href="https://github.com/AtutiBonface"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Bonface
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  