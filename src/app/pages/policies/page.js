// app/privacy-policy/page.jsx (if using Next.js App Router)
// or pages/privacy-policy.js (if using Pages Router)

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-10 md:px-[140px] py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        TECHSPANCE LTD – Business Policies
      </h1>

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. General Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              TECHSPANCE LTD is committed to delivering high-quality software,
              IT solutions, and consulting services tailored to client needs.
            </li>
            <li>
              All projects are executed in line with agreed timelines,
              specifications, and professional standards.
            </li>
            <li>
              Clients are expected to provide timely feedback and necessary
              resources to ensure smooth project execution.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Payment Policy</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Payments are made in Nigerian Naira unless otherwise agreed.
            </li>
            <li>
              For software and consulting projects, payments are milestone-based
              (e.g., deposit, interim payments, and final balance).
            </li>
            <li>
              Full payment must be made before ownership of deliverables is
              transferred to the client.
            </li>
            <li>
              Delayed payments may attract interest charges of five percent (5%)
              per month on the outstanding balance.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Return and Refund Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Due to the nature of digital and customized services, returns are
              generally not applicable once services have been delivered or
              software has been deployed.
            </li>
            <li>
              Refunds are only considered under the following conditions:
              <ul className="list-decimal pl-6 mt-1 space-y-1">
                <li>If a client makes a duplicate payment by error.</li>
                <li>
                  If the Company is unable to initiate or deliver a project
                  after payment has been received, and no work has commenced.
                </li>
              </ul>
            </li>
            <li>
              Refund requests must be made in writing within seven (7) days of
              the event giving rise to the claim.
            </li>
            <li>
              Where partial work has been completed, refunds (if approved) will
              be prorated, with costs for completed work, expenses, or resources
              already committed deducted.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Project Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>A client may cancel a project by giving written notice.</li>
            <li>
              Payments for work already completed up to the cancellation date
              remain due.
            </li>
            <li>Deposits are non-refundable once work has commenced.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            5. Revision and Change Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Reasonable revisions are allowed during project execution,
              provided they are within the agreed scope.
            </li>
            <li>
              Major changes or new requests outside the original scope will
              require a separate quotation and may extend timelines.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            6. Confidentiality Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              All client information, documents, and data shared with the
              Company are treated as confidential.
            </li>
            <li>
              The Company will not disclose client information to third parties
              without prior written consent, except where legally required.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            7. Support and Maintenance Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Post-deployment support is provided for thirty (30) days for bug
              fixes and issues directly related to our work.
            </li>
            <li>
              Long-term maintenance or additional support is offered under
              separate agreements or subscriptions.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            8. Dispute Resolution Policy
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The Company seeks to resolve all disputes amicably through
              dialogue and negotiation.
            </li>
            <li>
              If resolution is not achieved, disputes shall be handled under the
              laws of the Federal Republic of Nigeria.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
