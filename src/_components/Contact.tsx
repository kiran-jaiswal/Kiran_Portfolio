import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import FadeInView from "./FadeInView";
import Toast from "./Toast";
const ContactInfo: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-primary-600/20 p-3 rounded-lg text-primary-500">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <div className="text-gray-400">{content}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/kiran-jaiswal",
      name: "GitHub",
    },
    // { icon: <Twitter size={20} />, href: 'https://twitter.com', name: 'Twitter' },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/kiran-jaiswal/",
      name: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/kiranjaiswall_/",
      name: "Instagram",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formState.name ||
      !formState.email ||
      !formState.message ||
      !formState.subject
    ) {
      setToast({
        message: "Please fill in all the fields.",
        type: "error",
      });
      return;
    }

    try {
      // Load EmailJS credentials from env
      const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_KEY;
      const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_KEY;
      const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      const emailTemplate = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        subject: formState.subject,
      };

      // Send the email
      await emailjs.send(serviceId, templateId, emailTemplate, publicKey);

      setToast({ message: "Message sent successfully!", type: "success" });

      // Clear form after success
      setFormState({ name: "", email: "", subject: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Email sending failed:", error);

      let errorMessage = "Failed to send message. Please try again.";

      // Custom error messages
      if (error?.text?.includes("User ID")) {
        errorMessage = "Invalid EmailJS Public Key.";
      } else if (error?.response?.status === 400) {
        errorMessage = "Invalid request. Please check the fields.";
      }

      setToast({ message: errorMessage, type: "error" });
    }
  };

  return (
    <section id="contact" className="bg-background-secondary section-container">
      <FadeInView>
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Interested in working together or have a question? Feel free to
            reach out. I'm always open to discussing new projects and
            opportunities.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <FadeInView direction="right">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <ContactInfo
              icon={<Mail size={24} />}
              title="Email"
              content={
                <a
                  href="mailto:kiranjaiswalkj2002@gmail.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  kiranjaiswalkj2002@gmail.com
                </a>
              }
            />

            <ContactInfo
              icon={<Phone size={24} />}
              title="Phone"
              content={
                <a
                  href="tel:+11234567890"
                  className="hover:text-primary-400 transition-colors"
                >
                  +91 638634XXXX
                </a>
              }
            />

            <ContactInfo
              icon={<MapPin size={24} />}
              title="Location"
              content="Jalandhar, Punjab, India"
            />

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background-accent hover:bg-primary-600 transition-colors w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>

        <FadeInView direction="left" delay={0.2}>
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background-primary border border-gray-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background-primary border border-gray-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background-primary border border-gray-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-background-primary border border-gray-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 w-full"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </FadeInView>
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
