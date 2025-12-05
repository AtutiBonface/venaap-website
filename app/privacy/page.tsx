import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
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
                  VenaApp is committed to protecting user privacy. This policy explains our data 
                  practices for both the browser extension and companion desktop application.
                </p>
              </section>

              {/* Data Collection */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Data Collection
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• We detect media file URLs (videos/audio) from websites you visit</li>
                  <li>• We temporarily store detected media URLs locally on your device</li>
                  <li>• We access webpage metadata (titles, thumbnails, favicons) for display purposes only</li>
                  <li>• The companion app stores download preferences and history locally</li>
                </ul>
              </section>

              {/* Data Storage */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Data Storage
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• All extension data is stored locally in your browser using Chrome&apos;s storage API</li>
                  <li>• Companion app data is stored locally on your computer</li>
                  <li>• No data is transmitted to external servers</li>
                  <li>• No personal information is collected, stored, or processed</li>
                  <li>• No analytics or tracking services are used</li>
                </ul>
              </section>

              {/* Data Usage */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Data Usage
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• Detected media information is used solely to enable download functionality</li>
                  <li>• Website cookies are accessed only to facilitate downloads of protected content you&apos;re authorized to access</li>
                  <li>• Download history (if enabled in companion app) is stored locally for your convenience</li>
                  <li>• No data is used for advertising, profiling, or any purposes beyond the app&apos;s core functionality</li>
                </ul>
              </section>

              {/* Permissions Explained */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Permissions Explained
                </h2>
                <p className="text-text-primary mb-4">
                  The browser extension requests the following permissions:
                </p>
                <div className="space-y-4 text-text-primary">
                  <div>
                    <strong className="text-foreground">activeTab:</strong> Access current tab to extract video metadata (title, thumbnail)
                  </div>
                  <div>
                    <strong className="text-foreground">webRequest:</strong> Monitor network requests to detect media files
                  </div>
                  <div>
                    <strong className="text-foreground">storage:</strong> Store detected file lists and user preferences locally
                  </div>
                  <div>
                    <strong className="text-foreground">downloads:</strong> Initiate file downloads when you click download
                  </div>
                  <div>
                    <strong className="text-foreground">cookies:</strong> Access cookies for downloading protected media you&apos;re authorized to view
                  </div>
                  <div>
                    <strong className="text-foreground">scripting:</strong> Extract page metadata (titles, thumbnails, favicons)
                  </div>
                  <div>
                    <strong className="text-foreground">tabs:</strong> Associate detected media with correct source tab
                  </div>
                  <div>
                    <strong className="text-foreground">contextMenus:</strong> Provide right-click download options
                  </div>
                  <div>
                    <strong className="text-foreground">Host Permissions (&lt;all_urls&gt;):</strong> Detect media across all websites since sources are unpredictable
                  </div>
                </div>
                <p className="text-text-primary mt-4">
                  All permissions are used exclusively for the extension&apos;s core media detection and download functionality.
                </p>
              </section>

              {/* Third Party Access */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Third Party Access
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• We do not share any data with third parties</li>
                  <li>• We do not sell, rent, or transfer any user information</li>
                  <li>• No third-party analytics, tracking, or advertising services are used</li>
                  <li>• The application does not communicate with external servers</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Data Retention
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• Media file lists are stored locally until manually cleared by the user</li>
                  <li>• Users can delete all stored data at any time using the &quot;Clear List&quot; button in the extension</li>
                  <li>• Uninstalling the extension or companion app removes all associated data</li>
                </ul>
              </section>

              {/* User Control */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. User Control
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• Complete control over stored data through the extension interface</li>
                  <li>• Clear individual items or entire list anytime</li>
                  <li>• Disable automatic detection in settings</li>
                  <li>• Export or import settings (companion app)</li>
                  <li>• No account required - all features available without registration</li>
                </ul>
              </section>

              {/* Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  8. Security
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• All data processing happens locally on your device</li>
                  <li>• No cloud storage or remote servers</li>
                  <li>• No authentication or login systems</li>
                  <li>• Extension uses Chrome&apos;s secure storage APIs</li>
                  <li>• Companion app uses OS-level security features</li>
                </ul>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  9. Children&apos;s Privacy
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• VenaApp does not knowingly collect information from users under 13</li>
                  <li>• No age verification is performed as no personal data is collected</li>
                  <li>• Parents should supervise children&apos;s use of download tools</li>
                </ul>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  10. Changes to This Policy
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• We may update this privacy policy to reflect changes in functionality</li>
                  <li>• Updates will be posted on this page with a new &quot;Last Updated&quot; date</li>
                  <li>• Continued use after updates constitutes acceptance</li>
                </ul>
              </section>

              {/* Contact */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  11. Contact
                </h2>
                <div className="space-y-2 text-text-primary">
                  <p>For questions or concerns about privacy: <a href="mailto:privacy@venaapp.com" className="text-primary hover:underline">privacy@venaapp.com</a></p>
                  <p>For technical support: <a href="mailto:support@venaapp.com" className="text-primary hover:underline">support@venaapp.com</a></p>
                  <p>GitHub Issues: <a href="https://github.com/AtutiBonface/BlackJuiceChromeExtension" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/AtutiBonface/BlackJuiceChromeExtension</a></p>
                </div>
              </section>

              {/* Legal Compliance */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Legal Compliance
                </h2>
                <ul className="space-y-2 text-text-primary">
                  <li>• This extension complies with Chrome Web Store Developer Program Policies</li>
                  <li>• We do not sell or transfer user data to third parties</li>
                  <li>• We do not use or transfer user data for purposes unrelated to the extension&apos;s single purpose</li>
                  <li>• We do not use or transfer user data to determine creditworthiness or for lending purposes</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
