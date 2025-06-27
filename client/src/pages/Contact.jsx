import React, { useState } from "react";
import MainSection from "../layouts/MainSection";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message has been sent!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <MainSection>
      {/* Header Section */}
      <section
        data-aos="zoom-in"
        className="w-full rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white text-center mt-2"
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          We're here to help. Reach out with your questions, feedback, or ideas.
          Work Nest is just a message away.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          {submitted && (
            <div className="bg-green-100 text-green-800 p-4 rounded mb-4">
              ✅ Your message has been sent!
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded cursor-pointer hover:bg-indigo-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              We're always happy to hear from you. Whether you're a freelancer,
              a client, or just curious about Work Nest.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">📍 Office Address</h3>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">📞 Phone</h3>
            <p className="text-gray-600">+880 1234-567890</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">✉️ Email</h3>
            <p className="text-gray-600">support@worknest.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">🔗 Social</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Facebook
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                LinkedIn
              </a>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed (optional) */}
      <section className="w-full rounded-md px-6 pb-16">
        <iframe
          title="Google Map"
          className="w-full h-64 rounded-xl shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6346858333994!2d90.39945231543265!3d23.793240184567837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77582c9bb4b%3A0x75e65ab4bc5e0e7a!2sDhaka!5e0!3m2!1sen!2sbd!4v1625737572867!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </MainSection>
  );
}
