"use client";

import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Download, 
  Zap, 
  ShieldCheck, 
  Film, 
  Cookie, 
  ListVideo, 
  Search,
  Users,
  Star,
  Lock,
  Monitor
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Automatic Detection",
      description: "Instantly identifies video and audio files as you browse"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Real-Time Updates",
      description: "See intercepted media appear live without refreshing"
    },
    {
      icon: <Download className="h-12 w-12" />,
      title: "Batch Downloads",
      description: "Select and download multiple files at once"
    },
    {
      icon: <ListVideo className="h-12 w-12" />,
      title: "Quality Selection",
      description: "Choose from multiple resolutions for streaming content"
    },
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      title: "Privacy First",
      description: "No tracking, no data collection, all processing happens locally"
    },
    {
      icon: <Film className="h-12 w-12" />,
      title: "HLS/M3U8 Support",
      description: "Download streaming videos with adaptive quality"
    },
    {
      icon: <Cookie className="h-12 w-12" />,
      title: "Cookie Handling",
      description: "Access protected content you&apos;re authorized to view"
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "Clean Interface",
      description: "Intuitive popup with thumbnails and metadata"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Install the Extension",
      description: "Add VenaApp from Chrome Web Store in seconds"
    },
    {
      number: "2",
      title: "Browse Websites",
      description: "Visit any website with media content"
    },
    {
      number: "3",
      title: "Click the Icon",
      description: "See all detected media files instantly"
    },
    {
      number: "4",
      title: "Download",
      description: "Choose individual files or download in batches"
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Downloads" },
    { icon: <Film className="h-8 w-8" />, number: "50+", label: "Supported Sites" },
    { icon: <Star className="h-8 w-8" />, number: "4.8/5", label: "User Rating" },
    { icon: <Lock className="h-8 w-8" />, number: "100%", label: "Privacy Focused" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark py-20 md:py-32 overflow-hidden">
          {/* Background Pattern */}
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
                Download Media from Any Website
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Automatically detect and save videos, audio, and streaming content with one click. 
                Fast, private, and incredibly easy to use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-0"
                >
                  Add to Chrome
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg transition-all"
                >
                  Download Companion App
                  <Download className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Everything you need to download and manage media from the web
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
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

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-surface-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                How It Works
              </h2>
              <p className="text-lg text-text-secondary">
                Get started in four simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white text-2xl font-bold mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-light/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Companion App CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Advanced Features?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Download our companion app for faster downloads, queue management, 
                format conversion, and advanced settings.
              </p>
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-6 text-lg shadow-xl transition-all border-0"
              >
                Learn More About Companion App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
