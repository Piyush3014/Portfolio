import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    // This grabs the key from your .env file
    formData.append("access_key", import.meta.env.FORM_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("Message Sent Successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" name="name" placeholder="Your Name" 
          className="p-3 bg-slate-800 rounded border border-slate-700" required 
        />
        <input 
          type="email" name="email" placeholder="Your Email" 
          className="p-3 bg-slate-800 rounded border border-slate-700" required 
        />
        <textarea 
          name="message" placeholder="Your Message" 
          className="p-3 bg-slate-800 rounded border border-slate-700 h-32" required 
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold transition-all"
        >
          Send Message
        </button>
      </form>
      <p className="text-center mt-4 text-slate-400">{status}</p>
    </section>
  );
};

export default Contact;