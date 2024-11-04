import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className="pt-32 flex flex-col space-y-7 items-center">
      {/* Page Headings */}
      <div className="w-[80%] flex flex-col space-y-5 text-center">
        <h1 className="text-darker-blue text-2xl md:text-3xl font-bold capitalize">Frequently Ask Questions</h1>
        <p className="text-lighter-blue text-xl md:text-2xl font-normal">Your questions answered! Find all the information you need about working with Techspance.</p>
      </div>
      {/* Restricted width content */}
      <div className='md:w-[65%] md:ml-[7rem] flex flex-col md:self-start space-y-7 mx-[2rem]'>
        {/* General FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">General FAQs</h2>
          <ol className="flex flex-col space-y-5 list-decimal">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>1.</span>
                <h5>What services does Techspance offer?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">Techspance offers a wide range of services including UX design, website development, mobile app development, IT support, custom software solutions, and digital marketing. We specialize in creating tailored digital solutions for businesses looking to scale and succeed.</p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>2.</span>
                <h5>How can I get started with Techspance?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">Getting started with Techspance is simple. Just visit our "Contact Us" page, fill out the form, and provide details about your project or business needs. One of our experts will get in touch with you to discuss how we can help.</p>
            </li>
            <li className='flex flex-col space-y-1'> 
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>3.</span>
                <h5>How do you ensure the quality of your work?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">We have a rigorous quality assurance process to ensure that our deliverables meet the highest standards. Our team conducts thorough testing and reviews to identify and address any issues, ensuring the end product meets your expectations.</p>
            </li>
          </ol>
        </div>
        <hr className='border-[#C0C0C0]'></hr>

        {/* Project Process FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Project Process FAQs</h2>
          <ol className="flex flex-col space-y-5 list-decimal">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>4.</span>
                <h5>How does the project process work at Techspance?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">Our process begins with an initial consultation to understand your goals. Once we align on the objectives, we move forward with planning, design, development, testing, and finally, the deployment phase. Throughout, we maintain open communication to ensure the project stays on track.</p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>5.</span>
                <h5>Can I make changes to the project once it’s started?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">Yes! We understand that requirements may evolve during the development process. You can request changes, and we’ll assess the impact on the timeline and cost before proceeding.</p>
            </li>
            <li className='flex flex-col space-y-1'> 
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>6.</span>
                <h5>How long does it typically take to complete a project?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">The timeline for a project depends on its complexity and scope. We provide estimates during the initial consultation based on the specific requirements of your project.</p>
            </li>
          </ol>
        </div>
        <hr className='border-[#C0C0C0]'></hr>

        {/* Web Design FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Web Design FAQs</h2>
          <ol className="flex flex-col space-y-5 list-decimal">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>7.</span>
                <h5>Can you design a responsive website that looks great on all devices?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">Yes, we create responsive websites that are optimized for viewing on desktops, tablets, and smartphones, ensuring a seamless user experience across all platforms.</p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>8.</span>
                <h5>Do you offer SEO services to improve website visibility?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">Absolutely! We can help you optimize your website for search engines, using best practices to increase organic traffic and improve your online presence.</p>
            </li>
          </ol>
        </div>
        <hr className='border-[#C0C0C0]'></hr>

        {/* Mobile App Development FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Mobile App Development FAQs</h2>
          <ol className="flex flex-col space-y-5 list-decimal">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>9.</span>
                <h5>Can you develop mobile apps for both iOS and Android platforms?</h5> 
              </div>
              <p className="text-l font-medium pl-[26px]">Yes, we offer cross-platform mobile app development using frameworks like Flutter, allowing you to reach users on both iOS and Android with a single codebase.</p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>10.</span>
                <h5>How do you ensure the security of my mobile app?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">We follow industry best practices, including encryption, secure coding techniques, and regular security audits, to ensure that your mobile app is protected from vulnerabilities and threats.</p>
            </li>
          </ol>
        </div>
        <hr className='border-[#C0C0C0]'></hr>

        {/* Custom Software Development FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">Custom Software Development FAQs</h2>
          <ol className="flex flex-col space-y-5 list-decimal">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>11.</span>
                <h5>Can you create custom software tailored to my specific business needs?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">Yes, we specialize in developing custom software solutions that address your unique business requirements, helping you improve efficiency, productivity, and growth.</p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>12.</span>
                <h5>What technologies do you use for software development?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">We utilize a variety of modern programming languages and frameworks, including Python, JavaScript, Java, React, Angular, and Vue.js, ensuring that our solutions are scalable, efficient, and future-proof.</p>
            </li>
          </ol>
        </div>
        <hr className='border-[#C0C0C0]'></hr>

        {/* Technical & Support FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">
            Technical & Support FAQs
          </h2>
          <ol className="flex flex-col space-y-5 list-decimal">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>13.</span>
                <h5>What kind of support do you provide?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                We provide IT support services, including troubleshooting, system monitoring, and maintenance. We also offer ongoing support for the products we develop, ensuring they continue to run smoothly after launch.
              </p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>14.</span>
                <h5>Can you help me choose the right technology for my business?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                Yes, our IT consultants are experts in technology selection and implementation. We provide tailored advice to help you choose the right tools and technologies to achieve your business goals.
              </p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>15.</span>
                <h5>How do I contact customer support?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                You can reach our customer support team through the contact form on our website or by emailing support@techspance.com. We’re here to assist you with any queries or technical issues.
              </p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>16.</span>
                <h5>Do you offer ongoing IT support and maintenance services?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                Yes, we offer comprehensive IT support and maintenance packages to ensure that your systems are always running smoothly and efficiently.
              </p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>17.</span>
                <h5>Do you offer ongoing support after the project is completed?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                Yes, we offer ongoing support and maintenance packages to ensure your digital solution remains up-to-date and functioning optimally after the project is delivered.
              </p>
            </li>
          </ol>
        </div>
        <hr className='border-[#C0C0C0]'></hr>

        {/* Pricing & Payments FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">
            Pricing & Payments FAQs
          </h2>
          <ol className="flex flex-col space-y-5 list-decimal">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>18.</span>
                <h5>How much does a typical project cost?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                The cost of a project depends on various factors like project scope, complexity, and timeline. After an initial discussion, we will provide a customized quote tailored to your specific needs.
              </p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>19.</span>
                <h5>What payment methods do you accept?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                We accept various payment methods, including bank transfers and online payment solutions. Specific payment details will be provided as part of your project agreement.
              </p>
            </li>
          </ol>
        </div>
        <hr className='border-[#C0C0C0]'></hr>
        {/* Career FAQs */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-darker-blue text-xl md:text-3xl font-bold capitalize">
            Career FAQs
          </h2>
          <ol className="flex flex-col space-y-5">
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>20.</span>
                <h5>How can I join the Techspance team?</h5> 
              </div>
              <p className="text-l font-medium pl-[44px]">
                We’re always looking for talented individuals to join our team. Check out our "Careers" page to see current openings and submit your application.
              </p>
            </li>
            <li className='flex flex-col space-y-1'>
              <div className='flex space-x-2 text-lighter-blue text-xl'>
                <span>21.</span>
                <h5>Do you offer internships at Techspance?</h5> 
              </div>
              <p className="text-l font-medium pl-[38px]">
                Yes, we offer internship opportunities to budding developers, designers, and IT professionals. Our internships are a great way to gain hands-on experience while contributing to real projects.
              </p>
            </li>
          </ol>
        </div>

      </div>
      {/* Full width content */}
      <div className="w-full h-auto bg-primary flex flex-col items-center justify-center space-y-5 px-[10%] py-[3rem] text-white text-center text-opacity-90 md:px-[25%]">
        <h3 className="text-2xl font-bold capitalize">Have More Questions?</h3>
        <p className="text-xl font-light">
          If your question wasn’t answered above, feel free to reach out! Our team is here to help and provide all the information you need to work with Techspance.  
        </p>
        <Link className="font-bold border border-white px-[40px] py-2 rounded-3xl" href="../contact">Contact us</Link>
      </div>
  </div>
  )
}

export default page