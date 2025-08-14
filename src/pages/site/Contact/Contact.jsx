import React from "react";
import Form from "./Form";
import Info from "./Info";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => (
  <>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-coffee to-light-coffee text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 font-karla">Get in Touch</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </section>

    {/* Main Content */}
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-3 gap-12">
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 font-karla">Send us a Message</h2>
            <Form />
          </div>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 font-karla">Contact Information</h3>
            <Info />
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-karla flex items-center">
                <FaMapMarkerAlt className="text-coffee mr-3" />
                Find Us
              </h3>
            </div>
            <div className="h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8971754607!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 font-karla">Visit Our Coffee Shop</h2>
        <p className="text-lg text-gray-600 mb-8">
          Experience our premium coffee in person. We're always happy to welcome new friends!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <FaClock className="text-coffee text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Opening Hours</h3>
            <div className="text-gray-600 space-y-1">
              <p>Mon - Fri: 7:00 AM - 9:00 PM</p>
              <p>Sat - Sun: 8:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <FaMapMarkerAlt className="text-coffee text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Quick Directions</h3>
            <p className="text-gray-600">
              Located in the heart of San Francisco, easily accessible by public transport and car.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
