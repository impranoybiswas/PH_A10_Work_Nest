import React from "react";
import MainSection from "../layouts/MainSection";

export default function About() {
  return (
    <MainSection>
      {/* Hero Section */}
      <section
      data-aos="zoom-in"
      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-4 text-center w-full rounded-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Work Nest
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Where talent meets opportunity — your go-to platform for seamless
            freelancing.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
      data-aos="fade-in"
      className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-bold text-indigo-600">Work Nest</span>,
              we aim to empower individuals and businesses by providing a
              secure, scalable, and smart freelancing platform. We believe in
              creating a space where freelancers thrive, clients succeed, and
              ideas flourish without borders.
            </p>
          </div>
          <img
            src="/assets/teamwork-rafiki.svg"
            alt="Team Collaboration"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </section>

      {/* Features / Values Section */}
      <section
      data-aos="fade-in"
      className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Work Nest?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Freelancers",
                desc: "Connect with skilled professionals who are vetted and trusted.",
              },
              {
                title: "Secure Payments",
                desc: "Our escrow system ensures both parties are protected and paid fairly.",
              },
              {
                title: "Global Talent",
                desc: "Work with top-tier freelancers and clients from around the world.",
              },
              {
                title: "Project Management Tools",
                desc: "Built-in tools to help manage tasks, milestones, and deadlines effortlessly.",
              },
              {
                title: "Transparent Communication",
                desc: "Chat, call, and share updates — all in one place.",
              },
              {
                title: "Support That Cares",
                desc: "We’re here for you, 24/7, whenever you need help.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-indigo-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section
      data-aos="fade-in"
      className="bg-gray-100 py-16 px-4 w-full rounded-md">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Creators</h2>
          <p className="text-gray-600 mb-6">
            Work Nest was built by a passionate team of developers, designers,
            and product thinkers committed to changing how the world works.
            Whether you're a startup or an independent creator, we’re here to
            support your journey.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section
      data-aos="fade-in"
      className="bg-indigo-600 text-white py-16 text-center px-4 w-full rounded-md">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to take your career to the next level?
          </h2>
          <p className="mb-6">
            Join thousands of freelancers and clients building the future of
            work on Work Nest.
          </p>
          <a
            href="/join-us"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </MainSection>
  );
}
