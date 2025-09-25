// app/terms-of-service/page.jsx (if using Next.js App Router)
// or pages/terms-of-service.js (if using Pages Router)

const TermsOfServicePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 md:px-[140px] py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        TECHSPANCE LTD – Terms and Conditions
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            These Terms and Conditions govern all business dealings between
            TECHSPANCE LTD (“the Company,” “we,” “us”) and its clients (“you,”
            “your”). By engaging our services, you agree to these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Services</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Software development and custom solutions.</li>
            <li>Web design and development.</li>
            <li>Mobile application development for iOS and Android.</li>
            <li>
              Technical advice on digital transformation, optimization, and IT
              adoption.
            </li>
            <li>Ongoing technical support and system maintenance.</li>
            <li>Research and development in information technology.</li>
            <li>Training and education in information technology.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Quotations and Orders
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              All quotations are valid for fourteen (14) days unless otherwise
              stated.
            </li>
            <li>
              An order is confirmed when accepted in writing and, where
              required, accompanied by an initial payment.
            </li>
            <li>
              Any changes to the scope of work after confirmation may result in
              revised costs and timelines.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Pricing and Payment</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Prices are quoted in Nigerian Naira unless otherwise agreed.
            </li>
            <li>
              Payments are typically milestone-based, such as an initial
              deposit, interim payments, and a final balance upon completion.
            </li>
            <li>
              Late payments may attract interest at five percent (5%) per month
              on the outstanding amount.
            </li>
            <li>
              Ownership of deliverables remains with the Company until payment
              is received in full.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Delivery and Timelines
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Delivery dates are estimates and may be adjusted for unforeseen
              circumstances.
            </li>
            <li>
              The Company is not liable for delays caused by third-party
              suppliers, regulatory approvals, or client-side delays.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Client Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Clients must provide accurate and timely information.</li>
            <li>Clients must review and approve deliverables promptly.</li>
            <li>
              Clients must provide access to necessary resources when required.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Intellectual Property
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Intellectual property in projects remains with the Company until
              full payment is received.
            </li>
            <li>
              Pre-existing tools, frameworks, or third-party components remain
              the property of their respective owners.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Warranty and Liability
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Software projects carry a thirty (30) day warranty period for bug
              fixes and technical issues directly related to our work.
            </li>
            <li>
              The Company is not liable for indirect or consequential damages
              arising from the use of its services or products.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            9. Maintenance and Support
          </h2>
          <p>
            Ongoing support or maintenance for software and IT systems is
            subject to a separate agreement or subscription.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">10. Confidentiality</h2>
          <p>
            Both parties agree to maintain confidentiality of non-public
            business, financial, or technical information and not to disclose it
            without prior written consent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">11. Termination</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Either party may terminate an agreement with fourteen (14) days’
              written notice in the event of a material breach.
            </li>
            <li>
              Payments for work completed up to the termination date remain due.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Federal Republic of
            Nigeria. Disputes shall be subject to the jurisdiction of Nigerian
            courts.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">13. Amendments</h2>
          <p>
            The Company reserves the right to amend these Terms and will notify
            clients of material changes before they take effect.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">14. Contact</h2>
          <address className="not-italic">
            <p>TECHSPANCE LTD</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@techspance.com"
                className="text-blue-600 underline"
              >
                info@techspance.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+2348144213665" className="text-blue-600 underline">
                +2348144213665
              </a>
            </p>
          </address>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
