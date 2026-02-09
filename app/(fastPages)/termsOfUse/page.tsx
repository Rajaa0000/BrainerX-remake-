'use client';
import { CheckCircle } from 'lucide-react';

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-gray-10 text-[#737789] px-6 md:px-20 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <h2 className="text-[#252c4b] font-bold text-xl md:text-2xl mb-3">
          BrainerX
        </h2>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#252c4b] mb-12 leading-tight">
          Terms of Use
        </h1>

        {/* Intro */}
        <div className="m-0 py-4">
          <p className="text-[18px] font-medium leading-relaxed mb-4">
            Welcome to <span className="text-[#252c4b] font-semibold">BrainerX</span>! These Terms of Use (“Agreement”) constitute a legal agreement between you and BrainerX, and govern your use of our website and services.
          </p>
          <p className="text-[18px] font-medium leading-relaxed">
            By using our mobile app or services, you agree to be bound by this Agreement. If you do not agree to this Agreement, you may not use our mobile app or services.
          </p>
        </div>

        {/* Section 1 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            1. Use of our mobile app and services :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed mb-4">
            You may use our mobile app and services only for lawful purposes and in accordance with this Agreement. You agree not to use our mobile app or services:
          </p>
          <ul className="space-y-4 ml-6">
            <li className="flex gap-4">
              <CheckCircle className="text-[#252c4b] min-w-[24px] w-6 h-6" />
              <p className="text-[18px] font-medium leading-relaxed">
                In any way that violates any applicable federal, state, local, or international law or regulation.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckCircle className="text-[#252c4b] min-w-[24px] w-6 h-6" />
              <p className="text-[18px] font-medium leading-relaxed">
                To engage in any conduct that restricts or inhibits anyone’s use or enjoyment of our mobile app or services, or which may harm BrainerX or other users of our app or services.
              </p>
            </li>
            <li className="flex gap-4">
              <CheckCircle className="text-[#252c4b] min-w-[24px] w-6 h-6" />
              <p className="text-[18px] font-medium leading-relaxed">
                To impersonate or attempt to impersonate BrainerX, a BrainerX employee, another user, or any other person or entity.
              </p>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            2. Intellectual property :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            Our mobile app and services, including all content, graphics, logos, and trademarks, are the property of BrainerX or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use any of our intellectual property without our prior written permission.
          </p>
        </div>

        {/* Section 3 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            3. Disclaimers and limitations of liability :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            Our mobile app and services are provided “as is” without any warranty of any kind, either express or implied. We do not guarantee that our mobile app or services will be error-free or uninterrupted, or that they will meet your requirements or expectations. We are not liable for any damages arising from your use of our products or services.
          </p>
        </div>

        {/* Section 4 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            4. Payment and billing :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            If you purchase any of our services, you agree to pay the fees associated with those services. We may change our fees at any time, but we will provide notice of any fee changes before they take effect.
          </p>
        </div>

        {/* Section 5 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            5. Termination :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            We may terminate this Agreement at any time for any reason without notice. Upon termination, you must immediately stop using our mobile app and services.
          </p>
        </div>

        {/* Section 6 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            6. Governing law and jurisdiction :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            This Agreement shall be governed by and construed in accordance with the laws of Algeria, without regard to its conflict of laws provisions. Any dispute arising out of or relating to this Agreement shall be resolved in the state or federal courts located in Algeria.
          </p>
        </div>

        {/* Section 7 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            7. Changes to this Agreement :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            We may update this Agreement from time to time. If we make material changes to this Agreement, we will notify you by email or by posting a notice on our website or mobile app.
          </p>
        </div>

        {/* Section 8 */}
        <div className="m-0 py-4">
          <h2 className="text-[#252c4b] font-bold text-2xl mb-4">
            8. Contact us :
          </h2>
          <p className="text-[18px] font-medium leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, or if you want to exercise your rights regarding your personal information, please contact us via this website, our mobile app, or the information above.
          </p>
        </div>
      </div>
    </main>
  );
}
