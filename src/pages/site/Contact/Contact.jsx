import React from "react";
import Form from "./Form";
import Info from "./Info";

const Contact = () => (
  <>
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <Form />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <Info />
      </div>
    </section>
  </>
);

export default Contact;