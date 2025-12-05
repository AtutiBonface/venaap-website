"use client";

import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Github, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      category: "Installation & Setup",
      questions: [
        {
          q: "How do I install the extension?",
          a: "Visit the Chrome Web Store, search for VenaApp, and click 'Add to Chrome'. The extension will be installed automatically."
        },
        {
          q: "Do I need the companion app?",
          a: "No, the browser extension works independently. The companion app adds advanced features like queue management and format conversion."
        },
        {
          q: "How do I update the extension?",
          a: "Chrome automatically updates extensions. You can also manually update by going to chrome://extensions and clicking 'Update'."
        }
      ]
    },
    {
      category: "Usage",
      questions: [
        {
          q: "Why aren't videos being detected?",
          a: "Some websites use advanced protection. Try refreshing the page or check if the website is on our supported list. Some DRM-protected content cannot be downloaded."
        },
        {
          q: "How do I download multiple files?",
          a: "Click the extension icon, select the checkbox next to each file you want to download, then click 'Download Selected'."
        },
        {
          q: "Can I choose video quality?",
          a: "Yes! For streaming content with multiple resolutions, click on a video to see available quality options before downloading."
        },
        {
          q: "What file formats are supported?",
          a: "We support MP4, WebM, MKV, MP3, M4A, HLS (M3U8), and many other common media formats."
        },
        {
          q: "Does it work with YouTube/Netflix/etc?",
          a: "We work with many sites, but cannot bypass DRM protection on services like Netflix, Disney+, etc. YouTube downloads may be limited by their terms of service."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "Extension icon doesn't show anything",
          a: "Make sure you're on a page with media content. Try refreshing the page and waiting a few seconds for detection to complete."
        },
        {
          q: "Downloads failing or incomplete",
          a: "Check your internet connection and available disk space. Some files may require cookies or authentication - try using the companion app."
        },
        {
          q: "Permission denied errors",
          a: "Ensure the extension has all required permissions enabled in chrome://extensions. Click 'Details' and check permissions."
        },
        {
          q: "High memory usage",
          a: "Clear your detected files list regularly. Go to extension settings and click 'Clear List' to free up memory."
        },
        {
          q: "Companion app won't connect",
          a: "Check your firewall settings and ensure both the app and extension are running. Restart both if needed."
        }
      ]
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          q: "Is my data safe?",
          a: "Absolutely! All data is processed locally on your device. We don't collect, store, or transmit any personal information or browsing data."
        },
        {
          q: "Do you track what I download?",
          a: "No. We have no analytics, no tracking, and no data collection. Everything happens locally on your computer."
        },
        {
          q: "Why do you need so many permissions?",
          a: "Each permission has a specific purpose for detecting and downloading media. See our Privacy Policy for detailed explanations."
        },
        {
          q: "Is this legal?",
          a: "The tool itself is legal. However, you are responsible for ensuring you have the right to download content. Respect copyright laws and website terms of service."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "Which browsers are supported?",
          a: "Chrome, Edge, Brave, Opera, and other Chromium-based browsers. Firefox support is coming soon."
        },
        {
          q: "Does it work on mobile?",
          a: "Currently, VenaApp is only available for desktop browsers due to browser extension limitations on mobile."
        },
        {
          q: "Can I use it with a VPN?",
          a: "Yes! VenaApp works perfectly with VPNs. Your privacy is maintained as all processing is local."
        },
        {
          q: "How do I report a bug?",
          a: "Open an issue on our GitHub repository or email support@venaapp.com with details about the problem."
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary-light/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Support Center
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Get help with VenaApp. Find answers to common questions or contact us directly.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Contact Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface p-8 rounded-xl shadow-md border border-border text-center">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email Support</h3>
                  <a 
                    href="mailto:support@venaapp.com" 
                    className="text-primary hover:underline text-lg"
                  >
                    support@venaapp.com
                  </a>
                  <p className="text-text-secondary mt-4 text-sm">
                    We typically respond within 24-48 hours
                  </p>
                </div>
                <div className="bg-surface p-8 rounded-xl shadow-md border border-border text-center">
                  <Github className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">GitHub Issues</h3>
                  <a 
                    href="https://github.com/AtutiBonface/BlackJuiceChromeExtension/issues" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-lg"
                  >
                    Report an Issue
                  </a>
                  <p className="text-text-secondary mt-4 text-sm">
                    For bug reports and feature requests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-surface-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Frequently Asked Questions
              </h2>
              
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openFaq === globalIndex;
                      
                      return (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-surface rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <button
                            onClick={() => toggleFaq(globalIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-surface-light transition-colors"
                          >
                            <span className="font-semibold text-foreground pr-4">
                              {faq.q}
                            </span>
                            <ChevronDown 
                              className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                                isOpen ? 'transform rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-4 text-text-secondary">
                                  {faq.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Common Issues & Solutions
              </h2>
              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Videos not appearing in the list
                  </h3>
                  <ul className="space-y-2 text-text-secondary list-disc list-inside">
                    <li>Refresh the page and wait a few seconds</li>
                    <li>Check if the video is playing before trying to detect</li>
                    <li>Some sites use DRM protection that prevents downloading</li>
                    <li>Try using the companion app for better detection</li>
                  </ul>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Extension not working after update
                  </h3>
                  <ul className="space-y-2 text-text-secondary list-disc list-inside">
                    <li>Disable and re-enable the extension</li>
                    <li>Clear the extension&apos;s cache and data</li>
                    <li>Restart your browser</li>
                    <li>Reinstall the extension if problems persist</li>
                  </ul>
                </div>
                <div className="bg-surface p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Downloads starting but not completing
                  </h3>
                  <ul className="space-y-2 text-text-secondary list-disc list-inside">
                    <li>Check your internet connection stability</li>
                    <li>Ensure you have enough disk space</li>
                    <li>Disable other download managers temporarily</li>
                    <li>Try the companion app for more reliable downloads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Requests */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-light/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Have an Idea?
              </h2>
              <p className="text-lg text-text-primary mb-8">
                We&apos;d love to hear your feature requests and suggestions for improving VenaApp!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/AtutiBonface/BlackJuiceChromeExtension/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-text-on-primary font-semibold rounded-lg shadow-md transition-all"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Submit Feature Request
                </a>
                <a
                  href="mailto:support@venaapp.com?subject=Feature Request"
                  className="inline-flex items-center justify-center px-6 py-3 bg-surface hover:bg-surface-light text-primary font-semibold rounded-lg border-2 border-primary shadow-md transition-all"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
