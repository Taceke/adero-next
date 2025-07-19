'use client';

import { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    service: '',
    message: '',
  });
  // const [captchaToken, setCaptchaToken] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { ...formData };
  
    try {
      const res = await fetch('/api/contact_us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      const data = await res.json();
  
      if (data.success) {
        alert('Your message has been sent successfully!');
        setFormData({ fullname: '', email: '', service: '', message: '' });
      } else {
        alert('There was an error submitting your message.');
      }
    } catch (err) {
      console.error('Submit failed:', err);
      alert('Unexpected error occurred.');
    }
  };
  
  

  return (
    <div>
      <section className="flex flex-col justify-center text-center items-center h-2/5 gap-4 bg-gradient-to-bl from-[#FC466B] to-[#3F5EFB] snap-always snap-start">
        <h1 className="text-4xl text-white font-bold">Contact Us</h1>
        <p className="font-medium text-white">
          Feel free to contact us any time. We will get back to you as soon as we can.
        </p>
      </section>

      <section className="snap-always snap-start bg-gradient-to-tl from-[#FC466B] to-[#3F5EFB]">
        <div className="flex flex-col md:flex-row justify-evenly p-4 w-screen backdrop-blur-md">
          <form
            onSubmit={handleSubmit}
            className="grid content-start grid-cols-2 gap-4 p-4 rounded-md border-2 border-black backdrop-blur-md"
          >
            <div className="flex-col flex items-stretch">
              <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-white">
                Full Name
              </label>
              <input
                className="input px-4 py-2 rounded-md bg-gray-100 ring-primary ring-1 outline-primary focus:outline-double"
                placeholder="John Doe"
                type="text"
                name="fullname"
                required
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>

            <div className="flex-col flex items-stretch">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Email Address
              </label>
              <input
                className="input px-4 py-2 rounded-md bg-gray-100 ring-primary ring-1 outline-primary focus:outline-double"
                placeholder="johndoe@example.com"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="service" className="block mb-2 text-sm font-medium text-white">
                Service
              </label>
              <input
                type="text"
                name="service"
                className="w-full px-3 py-2 text-sm rounded-md shadow-sm ring-1 ring-inset ring-primary"
                placeholder="Select service"
                required
                value={formData.service}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                className="w-full h-64 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg ring-1 ring-primary"
                placeholder="Write anything regarding the selected service..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-span-2">
              {/* TODO: Insert reCAPTCHA component and get token */}
              <button
  type="submit"
  className="bg-cyan-700 p-2 rounded-md text-white cursor-pointer z-50"
  style={{ pointerEvents: 'all', zIndex: 50 }}
>
  Send message
</button>


            </div>
          </form>

          <div className="text-white p-4 flex-col flex gap-4 rounded-lg backdrop-blur-md">
            <h1 className="text-2xl font-medium">Contact Information</h1>
            <span className="md:max-w-96">
              Reach out to us by phone or visit our office whenever you like. We aim to respond to all queries within 24 hours during business days. We're here to assist you with any questions.
            </span>

            <div className="flex gap-4 border border-white items-center py-2 rounded-md">
              <img src="/images/icons/phone_icon.svg" alt="phone" className="size-12" />
              <span className="text-sm font-medium">
                <h1 className="font-medium text-white text-lg">Give us a call</h1>
                +251-912-609473
              </span>
            </div>

            <div className="flex gap-4 border border-white items-center py-2 rounded-md">
              <img src="/images/icons/email_icon.svg" alt="email" className="size-12" />
              <span className="text-sm font-normal">
                <h1 className="font-medium text-white text-lg">Email us</h1>
                contact@adero.tech
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
