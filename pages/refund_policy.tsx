import Head from 'next/head'
import React from 'react'
import { Footer, Navbar } from '../components'

function refund_policy() {
    return (
        <>
            <Head>
                <title>Delanki Pvt Ltd | Refund Policy</title>
            </Head>
            <section className='flex flex-col gap-10 justify-between min-h-screen w-full dark:bg-slate-900'>
                <Navbar />
                <div className='policy max-w-4xl rounded-lg p-5 md:p-10 xl:px-20 !m-5 lg:!mx-auto border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 filter backdrop-blur-lg'>
                    <h1 className='mb-10'>Refund Policy for Delanki Pvt Ltd</h1>
                    <p>Last updated: July 22, 2023</p>
                    <p>Thank you for shopping at Delanki Pvt Ltd.</p>
                    <p>The following terms are applicable for any products that You purchased with Us.</p>
                    <h3>Interpretation and Definitions</h3>
                    <h2>Interpretation</h2>
                    <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                    <h2>Definitions</h2>
                    <p>For the purposes of this Return and Refund Policy:</p>
                    <ul>
                        <li>
                            <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Delanki Pvt Ltd.</p>
                        </li>
                        <li>
                            <p><strong>Subscription</strong> refer to the items offered for sale on the Service.</p>
                        </li>
                        <li>
                            <p><strong>Orders</strong> mean a request by You to purchase Subscription from Us.</p>
                        </li>
                        <li>
                            <p><strong>Service</strong> refers to the Website.</p>
                        </li>
                        <li>
                            <p><strong>Website</strong> refers to Delanki Pvt Ltd, accessible from <a href="https://delanki.vercel.app" rel="external nofollow noopener" target="_blank">https://delanki.vercel.app</a></p>
                        </li>
                        <li>
                            <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                        </li>
                    </ul>
                    <h3>Your Purchased Subscription Cancellation Rights</h3>
                    <p>You are entitled to cancel Your purchased Subscription within 7 days without giving any reason for doing so.</p>
                    <p>The deadline for cancelling a purchased Subscription is 7 days from the date on which You received the Subscription or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.</p>
                    <p>In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:</p>
                    <ul>
                        <li>By visiting this page on our website: <a href="https://delanki.vercel.app/#connect" rel="external nofollow noopener" target="_blank">https://delanki.vercel.app/#connect</a></li>
                    </ul>
                    <p>We will reimburse You no later than 14 days from the day on which We receive the returned Subscription. We will use the same means of payment as You used for the purchased Subscription, and You will not incur any fees for such reimbursement.</p>
                    <h3>Conditions for Returns</h3>
                    <p>In order for the Subscription to be eligible for a return, please make sure that:</p>
                    <ul>
                        <li>The Subscription were purchased in the last 7 days</li>
                    </ul>
                    <p>The following Subscription cannot be returned:</p>
                    <ul>
                        <li>The supply of Subscription made to Your specifications or clearly personalized.</li>
                        <li>The supply of Subscription which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                        <li>The supply of Subscription which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                        <li>The supply of Subscription which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                    </ul>
                    <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
                    <p>Only regular priced Subscription may be refunded. Unfortunately, Subscription on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p>
                    <h3>Returning Subscription</h3>
                    <p>You are responsible for the cost and risk of returning the Subscription to Us. You should send the Subscription information to our contact mail and customer support</p>
                    <p>We cannot be held responsible for Subscription damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Subscription or proof of received return delivery.</p>
                    {/* <h2>Contact Us</h2>
                    <p>If you have any questions about our Returns and Refunds Policy, please contact us:</p>
                    <ul>
                        <li>By visiting this page on our website: <a href="https://delanki.vercel.app/#connect" rel="external nofollow noopener" target="_blank">https://delanki.vercel.app/#connect</a></li>
                    </ul> */}
                </div>
                <Footer />
            </section>
        </>
    )
}

export default refund_policy