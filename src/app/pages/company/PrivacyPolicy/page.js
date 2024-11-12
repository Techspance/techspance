import React from 'react';

const page = () =>  {
    return (
        // Full width container
        <div className='w-full flex flex-col items-center pb-9 space-y-7'>
            <h1 className="text-darker-blue text-2xl md:text-3xl font-bold capitalize">Privacy Policy</h1>
            {/* Restricted width container: 65% */}
            <div className='md:w-[65%] md:ml-[7rem] mx-[2rem] flex flex-col md:self-start space-y-7'>
                {/* Introduction */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Introduction</h2>
                    <p className="text-l">Welcome to Techspance! We prioritize your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, use our services, or interact with us. By using our services, you agree to the terms outlined in this Privacy Policy.</p>
                </div>
                {/* Information We Collect */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Information We Collect</h2>
                    <ol className="flex flex-col space-y-5 list-decimal">
                        <li className='flex flex-col space-y-1'>
                            <div className='flex space-x-2'>
                                <span>1.</span>
                                <p>Personal Information: We may collect personal information you provide directly, such as:</p> 
                            </div>
                            <ul className='text-sm list-disc pl-[40px]'>
                                <li>Contact Details: Name, email address, phone number, and mailing address.</li>
                                <li>Payment Information: Payment card details or financial account details when you make a purchase.</li>
                                <li>Account Information: Username, password, and other details associated with your account.</li>
                            </ul>
                        </li>
                        <li className='flex flex-col space-y-1'>
                            <div className='flex space-x-2'>
                                <span>2.</span>
                                <p>Non-Personal Information: We also collect general information through cookies and similar technologies, including:</p> 
                            </div>
                            <ul className='text-sm list-disc pl-[40px]'>
                                <li>Device Information: Information about the device you use, including IP address, browser type, and operating system.</li>
                                <li>Usage Data: Pages visited, clicks, browsing patterns, and engagement with content.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
                {/* Use of Information */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Use of Information</h2>
                    <p className="text-l">We use your information for the following purposes:</p>
                    <ul className='text-sm list-disc pl-[20px]'>
                        <li>To Provide Services: Process transactions, provide support, and deliver requested services.</li>
                        <li>Communication: Send updates, newsletters, or promotional materials. You can opt-out of these communications.</li>
                        <li>Improve and Personalize Services: Analyze usage patterns, personalize content, and enhance functionality.</li>
                        <li>For Product Development: Use anonymized data to develop future products and features tailored to our audience’s needs.</li>
                    </ul>
                </div>
                {/* Legal Basis for Processing (GDPR Compliance) */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Legal Basis for Processing (GDPR Compliance)</h2>
                    <p className="text-l">Under GDPR, our lawful basis for processing your data includes:</p>
                    <ul className='text-sm list-disc pl-[20px]'>
                        <li>Consent: When you provide clear consent for us to process your personal data.</li>
                        <li>Contractual Necessity: Processing needed for a contract, such as a purchase.</li>
                        <li>Legal Obligation: Necessary to comply with a legal requirement.</li>
                        <li>Legitimate Interests: Processing for our legitimate business interests, such as improving services, while considering your rights and privacy.</li>
                    </ul>
                </div>
                {/* Cookies and Tracking Technologies */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Cookies and Tracking Technologies</h2>
                    <p className="text-l">We use cookies, web beacons, and similar technologies to:</p>
                    <ul className='text-sm list-disc pl-[20px]'>
                        <li>Understand site usage and interaction patterns.</li>
                        <li>Personalize and improve the user experience.</li>
                        <li>Provide social media features and analyze traffic.</li>
                    </ul>
                    <p className="text-l">You can adjust your browser settings to refuse cookies; however, this may impact certain functionalities of our website.</p>
                </div>
                {/* Data Security */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Data Security</h2>
                    <p className="text-l">We implement robust security measures, including encryption, firewalls, and access controls, to safeguard your information. While we strive to protect your data, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>
                </div>
                {/* Data Retention */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Data Retention</h2>
                    <p className="text-l">We retain your data only as long as necessary for the purposes outlined in this policy or as required by law. When no longer needed, we securely delete or anonymize your data.</p>
                </div>
                {/* Your Rights */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Your Rights</h2>
                    <p className="text-l">As a data subject under GDPR, you have the following rights:</p>
                    <ul className='text-sm list-disc pl-[20px]'>
                        <li>Access: Request access to the personal data we hold about you.</li>
                        <li>Rectification: Correct or update inaccurate information.</li>
                        <li>Erasure: Request the deletion of your data, except where retention is legally required.</li>
                        <li>Restriction: Limit the processing of your personal data.</li>
                        <li>Objection: Object to certain types of data processing.</li>
                        <li>Data Portability: Obtain a copy of your data in a structured format.</li>
                    </ul>
                    <p className="text-l">To exercise these rights, please contact us at info@techspance.com. We will respond within the timeframes mandated by GDPR.</p>
                </div>
                {/* Children’s Privacy */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Children’s Privacy</h2>
                    <p className="text-l">Our services are not intended for individuals under the age of 13. If we become aware of inadvertently collected personal data from a child, we will take steps to delete such information promptly.</p>
                </div>
                {/* Updates to Our Privacy Policy */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Updates to Our Privacy Policy</h2>
                    <p className="text-l">Techspance may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any significant updates by updating the policy's effective date and posting the revised policy on our website.</p>
                </div>
                {/* Contact Us */}
                <div className='flex flex-col space-y-1'>
                    <h2 className="text-[#154782] md:text-2xl text-xl font-bold capitalize">Contact Us</h2>
                    <p className="text-l">If you have questions, concerns, or would like to exercise your data rights, please contact us at:</p>
                    <p className='text-[#154782]'>Techspance</p>
                    <p className='text-[#154782]'>info@techspance.com</p>
                    <p className='text-[#154782]'>9A Road 1 Aho Estate, Ajibode, Ibadan, Nigeria, 200284</p>
                    <p className='text-[#154782]'>+2348144213665</p>
                </div>
            </div>
        </div>
    );
}

export default page;