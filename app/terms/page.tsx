import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Terms of Service - FireAnime",
  description: "Terms and conditions for using the FireAnime streaming platform.",
}

export default function TermsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: March 30, 2025</p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to FireAnime</CardTitle>
            <CardDescription>Please read these Terms of Service carefully before using our platform</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              By accessing or using the FireAnime service, website, and software applications (collectively, the
              "FireAnime Service" or "our Service"), you are entering into a binding contract with FireAnime. Your
              agreement with us includes these Terms of Service and our Privacy Policy. If you do not agree to these
              Terms, you must not access or use the FireAnime Service.
            </p>
            <p>
              We may make changes to these Terms from time to time. If we make changes, we will notify you by revising
              the date at the top of these Terms and, in some cases, we may provide you with additional notice. We
              encourage you to review these Terms whenever you access the FireAnime Service to stay informed about our
              practices.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Using FireAnime</h2>
            <div className="space-y-4">
              <p>
                The FireAnime Service provides a platform for users to discover and watch anime content. You may use the
                FireAnime Service only if you can form a binding contract with FireAnime, and only in compliance with
                these Terms and all applicable laws.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">1.1 FireAnime Accounts</h3>
              <p>
                To access certain features of the FireAnime Service, you must register for an account. When you create
                an account, you must provide accurate and complete information. You are solely responsible for the
                activity that occurs on your account, and you must keep your account password secure.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">1.2 Age Requirements</h3>
              <p>
                You must be at least 13 years of age to use the FireAnime Service. If you are under 18 years of age, you
                must have your parent or legal guardian's permission to use the Service and to accept these Terms.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Content and Conduct</h2>
            <div className="space-y-4">
              <p>
                Our Service allows you to access anime content that is hosted and/or made available by third parties.
                The content that appears on or through the FireAnime Service is protected by copyright, trademark, and
                other laws. You acknowledge and agree that the FireAnime Service and its contents are protected by
                copyrights, trademarks, service marks, patents, or other proprietary rights and laws.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">2.1 Prohibited Conduct</h3>
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Copying, distributing, or disclosing any part of the FireAnime Service in any medium, including
                  without limitation by any automated or non-automated "scraping"
                </li>
                <li>
                  Using any automated system, including without limitation "robots," "spiders," "offline readers," etc.,
                  to access the FireAnime Service
                </li>
                <li>
                  Attempting to interfere with, compromise the system integrity or security, or decipher any
                  transmissions to or from the servers running the FireAnime Service
                </li>
                <li>Uploading invalid data, viruses, worms, or other software agents through the FireAnime Service</li>
                <li>Collecting or harvesting any personally identifiable information from the FireAnime Service</li>
                <li>
                  Using the FireAnime Service for any commercial solicitation purposes without proper authorization
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Rights and Ownership</h2>
            <div className="space-y-4">
              <p>
                All rights, title, and interest in and to the FireAnime Service are and will remain the exclusive
                property of FireAnime and its licensors. The FireAnime Service is protected by copyright, trademark, and
                other laws of both the United States and foreign countries. Nothing in these Terms gives you a right to
                use the FireAnime name or any of the FireAnime trademarks, logos, domain names, and other distinctive
                brand features.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Subscriptions and Payments</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>4.1 Subscription Plans</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    FireAnime offers both free and premium subscription plans. The specific features and limitations of
                    each plan are described on our website. We reserve the right to modify, terminate, or otherwise
                    amend our offered subscription plans.
                  </p>
                  <p>
                    Premium features require payment of a subscription fee. By subscribing to a premium plan, you agree
                    to pay the subscription fee indicated for your selected plan.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>4.2 Billing and Cancellation</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    The subscription fee will be billed at the beginning of your subscription and on each renewal date
                    thereafter, unless you cancel your subscription. You may cancel your subscription at any time, and
                    cancellation will be effective at the end of your current billing period.
                  </p>
                  <p>
                    We reserve the right to change our subscription fees. If we change our fees, we will provide notice
                    of the change on the website or by email, at our option, at least 14 days before the change is to
                    take effect. Your continued use of the premium features after the fee change becomes effective
                    constitutes your agreement to pay the changed amount.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>4.3 Refunds</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Payments are nonrefundable and there are no refunds or credits for partially used periods. Following
                    any cancellation, however, you will continue to have access to the premium features through the end
                    of your current billing period.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
            <div className="space-y-4">
              <p>
                We may terminate or suspend your account and access to the FireAnime Service immediately, without prior
                notice or liability, for any reason, including if you breach these Terms. Upon termination, your right
                to use the FireAnime Service will immediately cease.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Disclaimer of Warranties</h2>
            <div className="space-y-4">
              <p>
                THE FIREANIME SERVICE AND ITS CONTENT ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT
                LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF
                DEALING OR USAGE OF TRADE.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <div className="space-y-4">
              <p>
                IN NO EVENT SHALL FIREANIME, ITS AFFILIATES, OR ITS LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR
                USE THE SERVICE.
              </p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <div className="space-y-4">
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:admin@fireani.me" className="text-primary hover:underline">
                  admin@fireani.me
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

