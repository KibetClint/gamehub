import 'react';

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-16 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="leading-relaxed">
            Welcome to <strong>Tournaments Hub</strong>. These Terms and Conditions govern your use of
            our website, services, and tournaments. By accessing or using our platform, you agree to
            be bound by all the terms outlined here. If you do not agree with any part of these terms,
            you must not use our services.
          </p>
        </section>

        {/* Eligibility */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
          <p className="leading-relaxed">
            By participating in any tournament, you represent that you are at least 18 years of age
            or have the permission of a legal guardian. You also confirm that you have the legal
            capacity to enter into a binding agreement. We reserve the right to request proof of age
            or identity at any time.
          </p>
        </section>

        {/* User Accounts */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>
          <p className="leading-relaxed">
            When creating an account, you agree to provide accurate, current, and complete
            information. You are responsible for maintaining the confidentiality of your account
            credentials and for any activities that occur under your account. If you suspect
            unauthorized use of your account, please contact us immediately.
          </p>
        </section>

        {/* Tournament Rules */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Tournament Rules</h2>
          <p className="leading-relaxed">
            Each tournament may have its own set of rules, eligibility requirements, entry fees,
            and prize structures. By joining a tournament, you agree to abide by all specific rules
            and guidelines provided. Failure to comply may result in disqualification, forfeiture of
            prizes, or further legal action where applicable.
          </p>
        </section>

        {/* Payments and Refunds */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Payments and Refunds</h2>
          <p className="leading-relaxed">
            Certain tournaments may require an entry fee. All payments are processed through our
            secure payment gateway. Refund policies vary depending on the tournament. Please review
            each event’s details for specific information regarding refunds, cancellations, and
            withdrawal deadlines.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
          <p className="leading-relaxed">
            All content, including text, graphics, logos, and software, is the property of
            <strong> Tournaments Hub</strong> or its licensors. You may not reproduce, distribute,
            or create derivative works from any part of our platform without express written
            permission.
          </p>
        </section>

        {/* User Conduct */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. User Conduct</h2>
          <p className="leading-relaxed">
            You agree not to engage in any activity that disrupts or interferes with our services,
            including cheating, using unauthorized software, or engaging in harassing or illegal
            behavior. We reserve the right to suspend or terminate your account for any violation of
            these Terms.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Limitation of Liability</h2>
          <p className="leading-relaxed">
            To the fullest extent permitted by law, <strong>Tournaments Hub</strong> shall not be
            liable for any direct, indirect, incidental, consequential, or exemplary damages
            resulting from your use of our platform or participation in our tournaments.
          </p>
        </section>

        {/* Indemnification */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Indemnification</h2>
          <p className="leading-relaxed">
            You agree to defend, indemnify, and hold harmless <strong>Tournaments Hub</strong> and
            its affiliates from any claims, damages, or demands arising out of your use of our
            services or your breach of these Terms.
          </p>
        </section>

        {/* Modifications */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Modifications to Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to update or modify these Terms at any time. Changes will become
            effective immediately upon posting the revised Terms on our website. Your continued use
            of our services constitutes acceptance of any updated Terms.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">11. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms and any disputes related to them or our services are governed by the laws of
            the jurisdiction where <strong>Tournaments Hub</strong> is headquartered, without regard
            to conflict of law principles.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">12. Contact Information</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="leading-relaxed mt-2">
            <strong>Email:</strong> support@tournamentshub.com <br />
            <strong>Address:</strong> 1234 Tournament Lane, Competition City, CC 56789
          </p>
        </section>

        {/* Acceptance */}
        <section className="mt-10 text-center">
          <p className="leading-relaxed">
            By using this website or participating in any tournament, you acknowledge that you have
            read, understood, and agreed to these Terms and Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
