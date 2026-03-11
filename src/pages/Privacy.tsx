import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Privacy() {
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
                <p className="text-3xl font-bold text-primary">Privacy Policy</p>
                <p className="text-sm text-foreground/60 mt-2">Last Updated: March 11, 2026</p>
                <div className='items-left justify-left text-left'>
                <p>This Privacy Policy describes how https://kwierman.github.io ("we," "us," or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from https://kwierman.github.io (the "Site").</p>
                <br/>
                <h2><strong>1. Information We Collect</strong></h2>
                <p>We collect various types of information from and about users of our Site, including:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Information that can be used to identify you, such as your name, email address, postal address, phone number, and payment information.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use the Site, such as your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.</li>
                    <li><strong>Device Information:</strong> Information about the device you use to access our Site, including hardware model, operating system, and unique device identifiers.</li>
                </ul>
                <br/>
                <h2><strong>2. How We Collect Information</strong></h2>
                <p>We collect information in several ways:</p>
                <ul>
                    <li><strong>Directly from You:</strong> When you register for an account, make a purchase, subscribe to our newsletter, fill out a form, or communicate with us.</li>
                    <li><strong>Automatically:</strong> Through cookies, web beacons, and other tracking technologies as you navigate through the Site.</li>
                    <li><strong>From Third Parties:</strong> From third-party services that support our operations, such as payment processors or analytics providers.</li>
                </ul>
                <br/>
                <h2><strong>3. How We Use Your Information</strong></h2>
                <p>We use the information we collect for various purposes, including to:</p>
                <ul>
                    <li>Provide and maintain our Site and services.</li>
                    <li>Process transactions and send you related information, including purchase confirmations and invoices.</li>
                    <li>Manage your account and provide customer support.</li>
                    <li>Send you marketing and promotional communications, if you have opted in.</li>
                    <li>Improve our Site, products, and services.</li>
                    <li>Monitor and analyze usage and trends to improve your experience.</li>
                    <li>Detect, prevent, and address technical issues and security incidents.</li>
                    <li>Comply with legal obligations.</li>
                </ul>
                <br/>
                <h2><strong>4. Disclosure of Your Information</strong></h2>
                <p>We may share your personal information with:</p>
                <ul>
                    <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</li>
                    <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                    <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                    <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                </ul>
                <br/>
                <h2><strong>5. Cookies and Tracking Technologies</strong></h2>
                <p>We use cookies and similar tracking technologies to track the activity on our Site and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.</p>
                <br/>
                <h2><strong>6. Your Data Protection Rights</strong></h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                    <li>The right to access, update, or delete the information we have on you.</li>
                    <li>The right to rectify any inaccurate information.</li>
                    <li>The right to withdraw consent.</li>
                    <li>The right to object to our processing of your personal data.</li>
                    <li>The right to request restriction of processing your personal data.</li>
                    <li>The right to data portability.</li>
                </ul>
                <p>To exercise any of these rights, please contact us at kwierman@gmail.com.</p>
                <br/>
                <h2><strong>7. Security of Your Information</strong></h2>
                <p>We strive to use commercially acceptable means to protect your personal information, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we endeavor to protect your personal information, we cannot guarantee its absolute security.</p>
                <br/>
                <h2><strong>8. Links to Other Websites</strong></h2>
                <p>Our Site may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                <br/>
                <h2><strong>9. Children's Privacy</strong></h2>
                <p>Our Site is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under [Age]. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                <br/>
                <h2><strong>10. Changes to This Privacy Policy</strong></h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Site, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                <br/>
                <h2><strong>11. Contact Us</strong></h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: <a href='emailto:kwierman@gmail.com'>kwierman@gmail.com</a></li>
                    <li>By visiting this page on our website: <a href='/contact'>Contact Us</a> </li>
                </ul>
                </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}