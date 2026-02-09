'use client';
import { CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen  text-[#737789] px-6 md:px-20 py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <h2 className="text-[#252c4b] font-bold text-xl md:text-2xl mb-3">
          BrainerX
        </h2>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#252c4b] mb-12 leading-tight">
          Privacy Policy
        </h1>

        {/* Section 1 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            1. Information we collect :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed mb-6">
            When you use our website or services, we may collect the following
            information from you:
          </p>
          <ul className="space-y-6 ml-6">
            <li className="flex gap-4">
              <CheckCircle className="text-[#252c4b] min-w-[24px] w-6 h-6" />
              <p className="text-[18px] font-medium leading-relaxed">
                <span className="font-semibold text-[#252c4b]">
                  Personal information:
                </span>{' '}
                This includes your name, email address, phone number, and other
                information you provide to us when you sign up for our services.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckCircle className="text-[#252c4b] min-w-[24px] w-6 h-6" />
              <p className="text-[18px] font-medium leading-relaxed">
                <span className="font-semibold text-[#252c4b]">
                  Usage information:
                </span>{' '}
                This includes information about how you use our mobile app and
                services, including your clicks, topics that interest you in our
                app, and the pages you visit.
              </p>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            2. How we use your information :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed mb-6">
            We use your personal information to provide our services to you, to
            communicate with you about our services, and to improve our services.
            We may also use your information to send you marketing communications,
            if you have opted in to receive them.
          </p>
          <p className="text-[18px] font-medium leading-relaxed">
            We use usage information to analyze how our mobile app and services
            are used, to diagnose problems with our product and services, and to
            improve our app and services.
          </p>
        </div>

        {/* Section 3 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            3. How we protect your information :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            We use reasonable security measures to protect your personal
            information from unauthorized access, use, or disclosure. However, no
            method of transmission over the Internet or method of electronic
            storage is 100% secure, and we cannot guarantee the absolute security
            of your personal information.
          </p>
        </div>

        {/* Section 4 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            4. Sharing of information :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed mb-6">
            We do not sell, rent, or share your personal information with third
            parties, except as described in this Privacy Policy. We may share your
            personal information with our service providers who need access to
            your personal information to provide services to us.
          </p>
          <p className="text-[18px] font-medium leading-relaxed">
            We may also share your personal information if we believe in good
            faith that disclosure is necessary to comply with applicable law,
            regulation, legal process, or governmental request.
          </p>
        </div>

        {/* Section 5 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            5. Your rights :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            You have the right to access, correct, or delete your personal
            information that we hold about you. You may also have the right to
            object to or restrict our processing of your personal information, and
            to receive a copy of your personal information in a structured,
            machine-readable format.
          </p>
        </div>

        {/* Section 6 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            6. Changes to this Privacy Policy :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            We may update this Privacy Policy from time to time. If we make
            material changes to this Privacy Policy, we will notify you by email
            or by posting a notice on our website.
          </p>
        </div>

        {/* Section 7 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            7. Contact us :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, or if
            you want to exercise your rights regarding your personal information,
            please contact us via this website, our mobile app, or the information
            above.
          </p>
        </div>
      </div>
    </main>
  );
}
