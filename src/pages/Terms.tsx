import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-20">
        <section className="py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

                <p className="text-3xl font-bold text-primary">Terms of Service</p>
                <p className="text-sm text-foreground/60 mt-2">Last Updated: March 11, 2026</p>

            <div className='text-left'>
                <p>Welcome to https://kwierman.github.io! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.</p>
                <br/>
                <h2><strong>1. Acceptance of Terms</strong></h2>
                <p>By using our website, you signify your agreement to these Terms. If you do not agree to these Terms, please do not use our website.</p>
                <br/>
                <h2><strong>2. Changes to Terms</strong></h2>
                <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the website after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide and be bound by the modified Terms.</p>
                <br/>
                <h2><strong>3. Use of the Website</strong></h2>
                <ul>
                    <li>You must be at least [Age, e.g., 13 or 18] years old to use this website.</li>
                    <li>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</li>
                    <li>Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.</li>
                </ul>
                <br/>
                <h2><strong>4. Intellectual Property</strong></h2>
                <p>All content on this website, including text, graphics, logos, images, and software, is the property of [Your Company Name] or its content suppliers and protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.</p>
                <br/>
                <h2><strong>5. User Accounts</strong></h2>
                <ul>
                    <li>If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</li>
                    <li>You agree to accept responsibility for all activities that occur under your account or password.</li>
                    <li>We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.</li>
                </ul>
                <br/>
                <h2><strong>6. Disclaimer of Warranties</strong></h2>
                <p>The website is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website.</p>
                <br/>
                <h2><strong>7. Limitation of Liability</strong></h2>
                <p>In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the website; (ii) any conduct or content of any third party on the website; (iii) any content obtained from the website; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
                <br/>
                <h2><strong>8. Governing Law</strong></h2>
                <p>These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.</p>
                <br/>
                <h2><strong>9. Contact Us</strong></h2>
                <p>If you have any questions about these Terms, please contact us at [Your Contact Email Address].</p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}