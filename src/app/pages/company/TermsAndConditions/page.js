import React from 'react';
import Link from "next/link";

const page = () =>  {
    return (
        // Full width container
        <div className='md:px-[3rem] px-[1.4rem] flex flex-col items-center justify-center pt-32 pb-9 space-y-7'>
            <h1 className="text-darker-blue text-2xl md:text-3xl font-bold">Terms and Conditions</h1>
            {/* // Restricted width container */}
            <div className='md:w-[70%] flex flex-col space-y-3'>
                {/* 1. Introduction */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">1. Introduction</h2>
                    <p className="text-l">Welcome to Techspance. These Terms and Conditions (“Terms”) govern your access and use of Techspance’s website and services, including any products or software we offer now or in the future. By accessing our site or using our services, you agree to comply with these Terms. If you do not agree, please discontinue use.</p>
                </div>
                {/* 2. Definitions */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">2. Definitions</h2>
                    <ul className='text-sm list-disc pl-[20px]'>
                        <li>Company: Refers to Techspance.</li>
                        <li>User: Refers to any individual or entity using the Techspance website, services, or products.</li>
                        <li>Services: All services provided by Techspance, including but not limited to software development, website design, IT consulting, and support.</li>
                        <li>Products: Software, applications, or digital products developed and launched by Techspance.</li>
                    </ul>
                </div>
                {/* 3. Acceptance of Terms */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">3. Acceptance of Terms</h2>
                    <p className="text-l">By using our website and services, you agree to these Terms. Please do not use our services if you disagree with any part of these Terms.</p>
                </div>
                {/* 4. Services Offered */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">4. Services Offered</h2>
                    <p className="text-l">Techspance provides a range of technology services, including custom software development, web design, mobile app development, and IT consulting. We also launch software products and applications to meet emerging market needs. We reserve the right to modify or discontinue any of our services or products at our discretion.</p>
                </div>
                {/* 5. User Responsibilities */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">5. User Responsibilities</h2>
                    <p className='text-l'>As a user of Techspance:</p>
                    <ul className='text-sm list-disc pl-[20px]'>
                        <li>You agree not to misuse our website or services, including, but not limited to, attempting to hack or distribute malware.</li>
                        <li>You will abide by all applicable local, national, and international laws when using Techspance’s services.</li>
                    </ul>
                </div>
                {/* 6. Intellectual Property Rights */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">6. Intellectual Property Rights</h2>
                    <p className='text-l'>All content, branding, and intellectual property on the Techspance website, services, and products are owned by Techspance. Users are prohibited from copying, modifying, distributing, or reselling our content or products without explicit permission.</p>
                </div>
                {/* 7. Payment Terms */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">7. Payment Terms</h2>
                    <p className='text-l'>For paid services, Techspance provides cost estimates and invoices before work commences. Fees are due as specified in the invoice and must be paid within the agreed timeline. Refund policies, if applicable, will be outlined in the service agreement. Subscription services, including those for product support, are billed on a recurring basis as per the terms of the subscription.</p>
                </div>
                {/* 8. Termination of Service */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">8. Termination of Service</h2>
                    <p className='text-l'>Techspance reserves the right to suspend or terminate services for users who violate these Terms or fail to meet payment obligations. Users may also discontinue services; however, they are still responsible for any outstanding balances.</p>
                </div>
                {/* 9. Limitation of Liability */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">9. Limitation of Liability</h2>
                    <p className='text-l'>Techspance is not liable for any damages arising from the use of or inability to use our website, services, or products, as permitted by law. Additionally, Techspance is not responsible for third-party content or links accessible through our site.</p>
                </div>
                {/* 10. Privacy Policy */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">10. Privacy Policy</h2>
                    <p className='text-l'>Our Privacy Policy governs the collection and use of user data. Please review our <Link href="../PrivacyPolicy" className="text-darker-blue font-medium">Privacy Policy</Link> to understand how we handle user information.</p>
                </div>
                {/* 11. Product Launches and Updates */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">11. Product Launches and Updates</h2>
                    <p className='text-l'>Techspance frequently releases new products and software updates. By using Techspance services, you agree to be notified of these launches, and you may opt-in to updates and enhancements when relevant to your purchased services or interests.</p>
                </div>
                {/* 12. Changes to Terms */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">12. Changes to Terms</h2>
                    <p className='text-l'>Techspance reserves the right to modify these Terms. Changes will be posted on this page, and users are encouraged to review Terms periodically.</p>
                </div>
                {/* 13. Governing Law and Jurisdiction */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">13. Governing Law and Jurisdiction</h2>
                    <p className='text-l'>These Terms shall be governed by the laws of Nigeria. Disputes arising under these Terms will be resolved in the courts of Nigeria.</p>
                </div>
                {/* 14. Contact Information */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">14. Contact Information</h2>
                    <p className='text-l'>For questions or concerns about these Terms, please contact Techspance at:</p>
                    <ul className='text-sm list-disc pl-[20px]'>
                        <li>Email: info@techspance.com</li>
                        <li>Phone: +2348144213665</li>
                    </ul>
                </div>    
            </div>
            
        </div>
    );
}

export default page;