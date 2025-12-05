import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-text-secondary text-lg">
              Last Updated: December 6, 2025
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <p className="text-lg text-text-primary leading-relaxed">
                  Welcome to VenaApp. By using our browser extension and companion application, 
                  you agree to these Terms of Service. Please read them carefully.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    By downloading, installing, or using VenaApp (the &quot;Extension&quot; or &quot;App&quot;), 
                    you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                    do not use the Extension or App.
                  </p>
                  <p>
                    We reserve the right to modify these terms at any time. Continued use of the Extension 
                    or App after changes constitutes acceptance of the modified terms.
                  </p>
                </div>
              </section>

              {/* License and Usage */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. License and Usage
                </h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    VenaApp grants you a limited, non-exclusive, non-transferable, revocable license to 
                    use the Extension and App for personal, non-commercial purposes.
                  </p>
                  <p>
                    <strong className="text-foreground">You may:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Use the Extension and App on devices you own or control</li>
                    <li>Download media files you have legal rights to access</li>
                    <li>Use the App for personal media management</li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-foreground">You may not:</strong>
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Modify, reverse engineer, or decompile the Extension or App</li>
                    <li>Use the Extension or App for commercial purposes without permission</li>
                    <li>Redistribute or resell the Extension or App</li>
                    <li>Use the Extension to violate copyright laws or terms of service of websites</li>
                    <li>Remove or modify any copyright notices or attribution</li>
                  </ul>
                </div>
              </section>

              {/* User Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. User Responsibilities
                </h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    <strong className="text-foreground">Legal Compliance:</strong> You are solely responsible 
                    for ensuring that your use of VenaApp complies with all applicable laws, including 
                    copyright laws. VenaApp is a tool; you are responsible for how you use it.
                  </p>
                  <p>
                    <strong className="text-foreground">Respect Copyright:</strong> Only download content you 
                    have permission to access. Respect intellectual property rights and website terms of service.
                  </p>
                  <p>
                    <strong className="text-foreground">No Warranty:</strong> VenaApp is provided &quot;as is&quot; 
                    without warranties of any kind. We do not guarantee that the Extension or App will work on 
                    all websites or in all circumstances.
                  </p>
                </div>
              </section>

              {/* Prohibited Uses */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Prohibited Uses
                </h2>
                <p className="text-text-primary mb-4">
                  You agree not to use VenaApp to:
                </p>
                <ul className="space-y-2 text-text-primary list-disc list-inside ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Download DRM-protected content</li>
                  <li>Bypass payment systems or paywalls</li>
                  <li>Download content from websites that explicitly prohibit downloading</li>
                  <li>Distribute pirated content</li>
                  <li>Use automated systems to abuse websites</li>
                  <li>Interfere with website operations or security measures</li>
                </ul>
              </section>

              {/* Disclaimer of Warranties */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Disclaimer of Warranties
                </h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    THE EXTENSION AND APP ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT 
                    WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED 
                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                  <p>
                    WE DO NOT WARRANT THAT:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>The Extension or App will meet your requirements</li>
                    <li>The Extension or App will be uninterrupted, timely, secure, or error-free</li>
                    <li>The results obtained from using the Extension or App will be accurate or reliable</li>
                    <li>Any errors in the Extension or App will be corrected</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, VENAAPP AND ITS DEVELOPERS SHALL NOT BE LIABLE 
                    FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT 
                    NOT LIMITED TO:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Loss of profits, data, or use</li>
                    <li>Cost of procurement of substitute goods or services</li>
                    <li>Business interruption</li>
                    <li>Legal consequences arising from your use of the Extension or App</li>
                  </ul>
                </div>
              </section>

              {/* Indemnification */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Indemnification
                </h2>
                <p className="text-text-primary">
                  You agree to indemnify, defend, and hold harmless VenaApp and its developers from any 
                  claims, damages, losses, liabilities, and expenses (including legal fees) arising from 
                  your use of the Extension or App, your violation of these Terms, or your violation of 
                  any rights of another party.
                </p>
              </section>

              {/* Third-Party Websites */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Third-Party Websites
                </h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    VenaApp interacts with third-party websites. We are not responsible for:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>The content, privacy policies, or practices of third-party websites</li>
                    <li>Changes made by third-party websites that affect functionality</li>
                    <li>Your compliance with third-party website terms of service</li>
                  </ul>
                  <p>
                    You acknowledge that accessing third-party websites is at your own risk and subject 
                    to their terms and conditions.
                  </p>
                </div>
              </section>

              {/* Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Privacy
                </h2>
                <p className="text-text-primary">
                  Your privacy is important to us. Please review our{" "}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> to 
                  understand how we handle data. By using VenaApp, you agree to our data practices as 
                  described in the Privacy Policy.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Termination
                </h2>
                <div className="space-y-4 text-text-primary">
                  <p>
                    We reserve the right to terminate or suspend your access to VenaApp at any time, 
                    without notice, for any reason, including:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Violation of these Terms of Service</li>
                    <li>Fraudulent, abusive, or illegal activity</li>
                    <li>Extended periods of inactivity</li>
                  </ul>
                  <p>
                    You may terminate your use of VenaApp at any time by uninstalling the Extension and App.
                  </p>
                </div>
              </section>

              {/* Updates and Modifications */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. Updates and Modifications
                </h2>
                <p className="text-text-primary">
                  We may update VenaApp from time to time to add features, fix bugs, or improve performance. 
                  Updates may be automatic or require manual installation. We reserve the right to modify 
                  or discontinue any features at any time without notice.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  12. Governing Law
                </h2>
                <p className="text-text-primary">
                  These Terms shall be governed by and construed in accordance with applicable laws. 
                  Any disputes arising from these Terms or your use of VenaApp shall be resolved through 
                  binding arbitration or in courts of competent jurisdiction.
                </p>
              </section>

              {/* Severability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  13. Severability
                </h2>
                <p className="text-text-primary">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining 
                  provisions shall remain in full force and effect.
                </p>
              </section>

              {/* Entire Agreement */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  14. Entire Agreement
                </h2>
                <p className="text-text-primary">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between 
                  you and VenaApp regarding your use of the Extension and App.
                </p>
              </section>

              {/* Contact */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  15. Contact Information
                </h2>
                <div className="space-y-2 text-text-primary">
                  <p>If you have questions about these Terms of Service, please contact us:</p>
                  <p>Email: <a href="mailto:legal@venaapp.com" className="text-primary hover:underline">legal@venaapp.com</a></p>
                  <p>Support: <a href="mailto:support@venaapp.com" className="text-primary hover:underline">support@venaapp.com</a></p>
                  <p>GitHub: <a href="https://github.com/AtutiBonface/BlackJuiceChromeExtension" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/AtutiBonface/BlackJuiceChromeExtension</a></p>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="mb-12 bg-surface-light p-6 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Acknowledgment
                </h2>
                <p className="text-text-primary">
                  By using VenaApp, you acknowledge that you have read, understood, and agree to be bound 
                  by these Terms of Service. You also acknowledge that you are responsible for complying 
                  with all applicable laws and third-party terms of service when using VenaApp.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
