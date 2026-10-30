"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  User,
  CheckCircle,
} from "lucide-react";
import { SectionHeading, Reveal } from "@/components/motion/Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdalqlvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In"
          highlight="Touch"
          subtitle="Let's discuss your next project or collaboration opportunity"
          light
        />

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Reveal direction="right" distance={50}>
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:shadow-blue-500/20">
                <h3 className="text-3xl font-semibold text-white mb-6">
                  Contact <span className="text-blue-400">Information</span>
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Ready to bring your ideas to life? Whether you need a mobile
                  app, web application, or full-stack solution, I'm here to help
                  you achieve your goals.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="group flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-blue-500/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Email</p>
                      <p className="text-white font-medium">
                        rehmanfarouq9@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-purple-500/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Phone</p>
                      <p className="text-white font-medium">+92 345 6920533</p>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl transition-all duration-300 hover:bg-gray-900/70 hover:border-green-500/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Location</p>
                      <p className="text-white font-medium">
                        Gujrat , Punjab , Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/Rehman532"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rehman-farouq-93727526b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Response time indicator */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-blue-400" size={20} />
                  <div>
                    <p className="text-blue-300 font-medium">Response Time</p>
                    <p className="text-gray-400 text-sm">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="left" distance={50} delay={0.12}>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:shadow-purple-500/20">
              <h3 className="text-3xl font-semibold text-white mb-8">
                Send <span className="text-purple-400">Message</span>
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-fade-up">
                    <label
                      htmlFor="name"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      <User size={16} className="inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-900/70 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="animate-fade-up">
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      <Mail size={16} className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-900/70 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="animate-fade-up">
                    <label
                      htmlFor="message"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      <MessageSquare size={16} className="inline mr-2" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-900/70 focus:scale-105 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
