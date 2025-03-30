import { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: "Privacy Policy - FireAnime",
  description: "Privacy policy for the FireAnime streaming platform.",
}

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 30, 2024</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Matters</CardTitle>
            <CardDescription>
              This Privacy Policy explains how we collect, use, and protect your personal information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              At FireAnime, we take your privacy seriously. This Privacy Policy describes how your personal information
              is collected, used, and shared when you visit or make a purchase from our platform.
            </p>
            <p>
              By using FireAnime, you agree to the collection and use of information in accordance with this policy. We
              will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
          </CardContent>
        </Card>

        <Alert className="mb-8">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            This policy applies to all information collected through our website, mobile applications, and any related
            services, sales, marketing, or events.
          </AlertDescription>
        </Alert>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <p>
                We collect several different types of information for various purposes to provide and improve our Service
                to you.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">1.1 Personal Data</h3>
              <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Username</li>
                <li>IP</li>
                <li>Cookies and Usage Data</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2">1.2 Usage Data</h3>
              <p>
                We may also collect information on how the Service is accessed and used. This Usage Data may include
                information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser
                version, the pages of our Service that you visit, the time and date of your visit, the time spent on
                those pages, unique device identifiers, and other diagnostic data.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <div className="space-y-4">
              <p>FireAnime uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
                <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Cookies and Tracking Technologies</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>3.1 What are cookies?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is
                    stored in your web browser and allows the Service or a third-party to recognize you and make your
                    next visit easier and the Service more useful to you.
                  </p>
                  <p>
                    Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer
                    or mobile device when you go offline, while session cookies are deleted as soon as you close your web
                    browser.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>3.2 How we use cookies</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Authentication:</strong> We use cookies to identify you when you visit our website and as you navigate our website.</li>
                    <li><strong>Status:</strong> We use cookies to help us determine if you are logged into our website.</li>
                    <li><strong>Personalization:</strong> We use cookies to store information about your preferences and to personalize the website for you.</li>
                    <li><strong>Security:</strong> We use cookies as an element of the security measures used to protect user accounts, including preventing fraudulent use of login credentials.</li>
                    <li><strong>Analysis:</strong> We use cookies to help us to analyze the use and performance of our website and services.</li>
                    <li><strong>Cookie Consent:</strong> We use cookies to store your preferences in relation to the use of cookies more generally.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3.3 Your choices regarding cookies</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    If you prefer to avoid the use of cookies on the website, first you must disable the use of cookies
                    in your browser and then delete the cookies saved in your browser associated with this website. You
                    may use this option for preventing the use of cookies at any time.
                  </p>
                  <p>
                    If you do not accept our cookies, you may experience some inconvenience in your use of our website
                    and some features may not function properly.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <div className="space-y-4">
              <p>
                The security of your data is important to us, but remember that no method of transmission over the
                Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you
                place an order or enter, submit, or access your personal information. We offer the use of a secure server.
                All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology and then
                encrypted into our payment gateway providers database only to be accessible by those authorized with
                special access rights to such systems, and are required to keep the information confidential.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <div className="space-y-4">
              <p>
                We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to
                provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how
                our Service is used.
              </p>
              <p>
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">5.1 Analytics</h3>
              <p>
                We may use third-party Service Providers to monitor and analyze the use of our Service.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Google Analytics:</strong> Google Analytics is a web analytics service offered by Google that
                  tracks and reports website traffic. Google uses the data collected to track and monitor the use of our
                  Service. This data is shared with other Google services. Google may use the collected data to
                  contextualize and personalize the ads of its own advertising network.
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
            <div className="space-y-4">
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                identifiable information from anyone under the age of 13. If you are a parent or guardian and you are
                aware that your child has provided us with Personal Data, please contact us. If we become aware that we
                have collected Personal Data from children without verification of parental consent, we take steps to
                remove that information from our servers.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Data Protection Rights</h2>
            <div className="space-y-4">
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The right to access, update or delete the information we have on you</li>
                <li>The right of rectification - the right to have your information corrected if it is inaccurate or incomplete</li>
                <li>The right to object - the right to object to our processing of your Personal Data</li>
                <li>The right of restriction - the right to request that we restrict the processing of your personal information</li>
                <li>The right to data portability - the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format</li>
                <li>The right to withdraw consent - the right to withdraw your consent at any time where we relied on your consent to process your personal information</li>
              </ul>
              <p className="mt-4">
                Please note that we may ask you to verify your identity before responding to such requests.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Changes to This Privacy Policy</h2>
            <div className="space-y-4">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <div className="space-y-4">
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  By email:{" "}
                  <a href="mailto:admin@fireani.me" className="text-primary hover:underline">
                    admin@fireani.me
                  </a>
                </li>
                {/* <li>
                  By visiting the contact page on our website:{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact Us
                  </a>
                </li> */}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
