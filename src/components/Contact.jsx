function Contact() {
  return (
<section className="p-8 bg-white rounded-lg shadow-md space-y-8">
  <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Left Column: Contact Info */}
    <div className="space-y-6 text-gray-700">
      <div className="flex items-start gap-3">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7-1.5 1.5A2.12 2.12 0 006 16.5L10 20l1.5-1.5A2.12 2.12 0 0013 18l7-3-7-10H7L5 5H3z" />
        </svg>
        <p><strong>Phone:</strong> +91 9407002782, +91 8839476554</p>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4m8-4a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:prateekdubey2810@gmail.com" className="text-blue-600 hover:underline">
            prateekdubey2810@gmail.com
          </a>
        </p>
      </div>

      <div className="flex items-start gap-3">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v6m0 0l-3-3m3 3l3-3" />
        </svg>
        <p><strong>Address:</strong> Dewas, Madhya Pradesh, India</p>
      </div>
    </div>

    {/* Right Column: Contact Form */}
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Send Message
      </button>
    </form>
  </div>

  {/* Embedded Google Map */}
  <div className="mt-6 w-full">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.021702963843!2d75.8949496149653!3d22.754732485089915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e30f9e14770f%3A0x84edfa11ba007c3e!2sDewas%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1651654802430!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-md shadow-sm"
    ></iframe>
  </div>
</section>


  );
}

export default Contact;
