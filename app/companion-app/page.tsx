"use client";

import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Zap, 
  ListOrdered, 
  Settings, 
  FileVideo, 
  Clock, 
  Link as LinkIcon,
  Wifi,
  Monitor,
  Apple,
  Chrome
} from "lucide-react";
import { motion } from "framer-motion";

export default function CompanionApp() {
  const features = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Faster Downloads",
      description: "Multi-threaded downloading for maximum speed"
    },
    {
      icon: <ListOrdered className="h-10 w-10" />,
      title: "Queue Management",
      description: "Organize, pause, resume, and schedule downloads"
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Advanced Settings",
      description: "Custom download locations, naming patterns, quality preferences"
    },
    {
      icon: <FileVideo className="h-10 w-10" />,
      title: "Format Conversion",
      description: "Convert downloaded media to different formats"
    },
    {
      icon: <Download className="h-10 w-10" />,
      title: "Batch Processing",
      description: "Handle hundreds of downloads simultaneously"
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Download History",
      description: "Track and re-download previous files"
    },
    {
      icon: <LinkIcon className="h-10 w-10" />,
      title: "Integration",
      description: "Seamless communication with browser extension"
    },
    {
      icon: <Wifi className="h-10 w-10" />,
      title: "Offline Mode",
      description: "Queue downloads while offline, process when connected"
    }
  ];

  const faqs = [
    {
      question: "Is the companion app required?",
      answer: "No, the browser extension works independently. The companion app adds advanced features."
    },
    {
      question: "How does the extension communicate with the app?",
      answer: "Via secure local WebSocket connection on your computer."
    },
    {
      question: "Is there a cost?",
      answer: "Both the extension and companion app are completely free."
    },
    {
      question: "Can I use the app without the extension?",
      answer: "The app works best with the extension but can also accept direct URL inputs."
    },
    {
      question: "Does it work on Chromium browsers (Edge, Brave)?",
      answer: "Yes, the extension works on any Chromium-based browser."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                VenaApp Companion App
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Enhanced downloading power for your desktop
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Is It Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-6">What Is It?</h2>
              <p className="text-lg text-text-primary leading-relaxed">
                The VenaApp Companion App works alongside the browser extension to provide advanced 
                download management, faster speeds, and powerful organization features.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-border"
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              System Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-surface p-8 rounded-xl shadow-md border border-border">
                <Monitor className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Windows</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Windows 10 or later</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 100MB free disk space</li>
                </ul>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-md border border-border">
                <Apple className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">macOS</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• macOS 10.15 (Catalina) or later</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 100MB free disk space</li>
                </ul>
              </div>
              <div className="bg-surface p-8 rounded-xl shadow-md border border-border">
                <Chrome className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Linux</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Ubuntu 20.04+ / Debian 11+</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 100MB free disk space</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-light/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Download Now
              </h2>
              <p className="text-text-secondary mb-8">Current Version: 2.1.0</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-text-on-primary h-16 text-lg"
                >
                  <Monitor className="mr-2 h-5 w-5" />
                  Windows
                </Button>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-text-on-primary h-16 text-lg"
                >
                  <Apple className="mr-2 h-5 w-5" />
                  macOS
                </Button>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-text-on-primary h-16 text-lg"
                >
                  <Chrome className="mr-2 h-5 w-5" />
                  Linux
                </Button>
              </div>
              <p className="text-sm text-text-secondary mt-4">
                SHA-256 checksums available
              </p>
            </div>
          </div>
        </section>

        {/* Installation Instructions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Installation Instructions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Windows</h3>
                <ol className="space-y-2 text-text-secondary list-decimal list-inside">
                  <li>Download VenaApp-Setup-2.1.0.exe</li>
                  <li>Run the installer</li>
                  <li>Follow installation wizard</li>
                  <li>Launch from Start Menu</li>
                  <li>Apps connect automatically</li>
                </ol>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">macOS</h3>
                <ol className="space-y-2 text-text-secondary list-decimal list-inside">
                  <li>Download VenaApp-2.1.0.dmg</li>
                  <li>Open DMG file</li>
                  <li>Drag to Applications</li>
                  <li>Right-click and Open (first time)</li>
                  <li>Apps connect automatically</li>
                </ol>
              </div>
              <div className="bg-surface p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Linux</h3>
                <ol className="space-y-2 text-text-secondary list-decimal list-inside">
                  <li>Download AppImage or .deb</li>
                  <li>Make executable: chmod +x</li>
                  <li>Run or install with package manager</li>
                  <li>Install browser extension</li>
                  <li>Apps connect automatically</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 rounded-xl shadow-md border border-border"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Troubleshooting
              </h2>
              <div className="space-y-4">
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">
                    App not connecting to extension
                  </h3>
                  <p className="text-text-secondary">
                    Check your firewall settings and ensure both the app and extension are running.
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">
                    Download speeds slow
                  </h3>
                  <p className="text-text-secondary">
                    Try adjusting the thread count in the app settings.
                  </p>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">
                    Installation blocked
                  </h3>
                  <p className="text-text-secondary">
                    Check your security settings for unsigned apps and allow the installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
