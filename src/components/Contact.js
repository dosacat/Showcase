import React from "react";


const Contact = () => {

  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-black">
        <h2 className="text-3xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-[#b2102f] pb-2">
          Contact Me
        </h2>
        <p>
          Reach out to me for collaborations!
        </p>

    <form id="contact-form" action="https://formspree.io/f/meqwevgr" method="POST">
        <div className="my-4">
          <input maxLength="12" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" name="name"/>
          <input type="hidden" name="_captcha" value="false"/>
        </div>
        <div className="mb-4">
            <input maxLength="50" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Your Email" name="email" />
        </div>
        <div className="mb-4">
            <input maxLength="50" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Subject" name="subject" />
        </div>

        <div className="mb-4">
            <textarea maxLength="250" className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" name="message" type="text" placeholder="Your message" rows="5" ></textarea>
        </div>
        <button type="submit" className="bg-[#b2102f] text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
      </div>
    </section>
  );
};

export default Contact;
