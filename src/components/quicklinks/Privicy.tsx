import React from "react";
import Section from "../common/Section";
import { GoDotFill } from "react-icons/go";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

type Props = {};

const Privacy = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <div className="flex flex-col text-justify gap-4 text-slate-900">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Privacy Policy</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              {`  This is the privacy Policy of [www.constructionduty.com or Construction Duty Limited],
              Company Number [13098213] . Information hereby given is accurate and true. This
              website ("www.constructionduty.com") is operated by Construction Duty Limited.`}
            </p>
            <p>(‘We’, ‘Our’ , or ‘Us’ ).</p>
            <p>Our registered office is at [1 Pampisford Road, Purley ,England CR8 2NG].</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Your privacy is important to us</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>{`It is Construction Duty 's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, http://www.constructionduty.com/ , and other sites we own and operate.`}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Consent</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>{`   By using our website (constructionduty.com), you hereby consent to our Privacy Policy and agree to its terms.`}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Services</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>{`   The terms implemented on the services with quick to purchase a product from the website or via phone call will be subject to accept these terms by agreeing to the terms and condition applied on an email or live chat with the user and allowing the Construction Cards Helpline team to reach you for further for any query or sending any promotional offers related to your product you are looking for or product on-site like course, card, health safety and environment test etc. All the purchase related to the product is commenced by a phone, email or online are subject to the following both general and specific conditions.`}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Information we collect</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>{`Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services. This information describes how we collect, store, transfer and use personal data. It tells you about your privacy rights and how the law protects you. In the context of the law and this notice, ‘personal data’ is information that clearly identifies you as an individual or which could be used to identify you if combined with other information. Acting in any way on personal data is referred to as ‘processing’. This information applies to personal data collected through our website and through social media platforms and by an email or on phone.`}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Log Data</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>{`When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.`}</p>
            <p>
              Please be aware that while this information may not be personally identifying by
              itself, it may be possible to combine it with other data to personally identify
              individual persons.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Our process of accepting order</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              When you visit our website, our servers may automatically log the standard data
              provided by your web browser. It may include your device’s Internet Protocol (IP)
              address, your browser type and version, the pages you visit, the time and date of your
              visit, the time spent on each page, other details about your visit, and technical
              details that occur in conjunction with any errors you may encounter.
            </p>
            <p>
              Please be aware that while this information may not be personally identifying by
              itself, it may be possible to combine it with other data to personally identify
              individual persons.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Personal information</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              When you use our website, our services or buy from us, we ask you to provide personal
              data. This can be categorised into the following groups:
            </p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Name (First Name and Surname).</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Email</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Gender</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Post Code</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Date Of Birth</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Employee Status</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Phone/Mobile Number</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Home Mailing Address</p>
            </div>

            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>National Insurance Number</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Employee Address</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                Payment information, such as a debit or credit card number and expiry date and bank
                account details.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                Marketing preferences that tell us what types of marketing you would like to
                receive.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">In addition, we may also process:</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                Documentation that confirms your identity, such as an image of your passport or
                national insurance number (as mentioned above)
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>An image that shows your face, such as a passport photograph.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Documentation that confirms the qualifications you advertise as holding.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Documentation that confirms your employment.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">
              Types of personal data we collect from third parties
            </p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              We confirm some of the information you provide to us directly using data from other
              sources. We also add to the information we hold about you, sometimes to remove the
              need for you to provide it to us and sometimes in order to be able to assess the
              quality of the services you offer.The additional information we collect can be
              categorised as follows:
            </p>
            <p>The additional information we collect can be categorised as follows:</p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Information that confirms your identity.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>CITB (Central Industry Training Board).</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>CSCS (Construction Safety Certification Scheme).</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                You’re Employer / third party training provider or any relevant known reference.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Other sources .</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">
              Types of personal data we collect from your use of our services
            </p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              This includes our automation process of the websites and tool we use for us to collect
              information from our website (constructionduty.com) with latest technologies like as
              follows:
            </p>

            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Information you contribute to our community, including reviews.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Your replies to polls and surveys.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>We collect information provided by you on our automated chat-bots.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                Technical information about the hardware (mobile, laptops, desktops or tablets) and
                the software you use to access our website and use our services, including your
                Internet Protocol (IP) address, your browser type and version and your device’s
                operating system.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                usage information, including the frequency you use our services, the pages of our
                website that you visit, whether you receive messages from us and whether you reply
                to those messages .
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                Transaction information that includes the details of the products services you have
                bought from us and payments made to us for those services.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                Your preferences to receive marketing from us; how you wish to communicate with us;
                and responses and actions in relation to your use of our services.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">
              Legitimate reasons for processing your personal information
            </p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              We only collect and use your personal information when we have a legitimate reason for
              doing so. In which instance, we only collect personal information that is reasonably
              necessary to provide our services to you. To give you complete satisfaction with our
              terms and services which you are looking to opt for.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Collection and use of information</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              We at (constructionduty.com) may collect personal information from you when you do any
              of the following on our website:
            </p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Use a mobile device or web browser to access our content</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Contact us via email, social media, or on any similar technologies</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>When you mention us on social media.</p>
            </div>
            <p>
              We may collect, hold, use, and disclose information for the following purposes, and
              personal information will not be further processed in a manner that is incompatible
              with these purposes:
            </p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>To contact and communicate with you.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                For analytics, market research, and business development,including operating and
                improving our website, associated applications, and associated social media
                platforms.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                For advertising and marketing, including sending you promotional information about
                our products and services and information about third parties that we consider may
                be of interest to you.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                To enable you to access and use our website, associated applications, and associated
                social media platforms.
              </p>
            </div>

            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                Please be aware that we may combine information we collect about you with general
                information or research data we receive from other trusted sources
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Re-Marketing</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              Re-marketing involves placing a ‘tracking technology’ such as a cookie, a ‘web beacon’
              (also known as an ‘action tag’ or a ‘single-pixel GIF’) to track which pages you visit
              and to serve you relevant adverts for our services when you visit some other website.
            </p>
            <p>
              The benefit of re-marketing technology is that we can provide you with more useful and
              relevant adverts, and not show you ones repeatedly that you may have already seen. We
              may use a third-party advertising service to provide us with re-marketing services
              from time to time. If you have consented to our use of such tracking technologies, you
              may see advertisements for our products and services on other websites. We do not
              provide your personal data to advertisers or to third-party re-marketing service
              providers. However, if you are already a member of a website whose affiliated business
              provides such services that affiliated business may learn of your preferences in
              relation to your use of our website.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Security of your personal information</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              When we collect and process personal information, and while we retain this
              information, we will protect it within commercially acceptable means to prevent loss
              and theft, as well as unauthorized access, disclosure, copying, use, or modification.
              Although we will do our best to protect the personal information you provide to us
              according to The European Union General Data Protection Regulation (EU GDPR) replaces
              the UK Data Protection Act 1998 and EU Directive 95/46/EC, we advise that no method of
              electronic transmission or storage is 100% secure, and no one can guarantee absolute
              data security. We will comply with laws applicable to us in respect of any data
              breach. You are responsible for selecting any password and its overall security
              strength, ensuring the security of your own information within the bounds of our
              services.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">How long we keep your personal information</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              We keep your personal information only for as long as we need to. This time period may
              depend on what we are using your information for, in accordance with this privacy
              policy. If your personal information is no longer required, we will delete it or make
              it anonymous by removing all details that identify you. However, if necessary, we may
              retain your personal information for our compliance with a legal, accounting, or
              reporting obligation or for the next purchase you make after certain time, if it’s
              required to make your trust and credibility reminder with us.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">International transfers of personal information</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              If you placed an order with constructionduty.com either by phone or online then we
              have an automated invoice generator and order confirmations receipt with all the
              details provided by you in your email, we will intimate with you all the latest
              actions or modification made on your product or services with every update on email or
              via phone.The personal information we collect is stored and/or processed where we or
              our partners, affiliates, and third-party providers maintain facilities. Please be
              aware that the locations to which we store, process, or transfer your personal
              information may not have the same data protection laws as the country in which you
              initially provided the information. If we transfer your personal information to our
              operations team in other countries like India, Europe, and Singapore (i) we will
              perform those transfers in accordance with the requirements of applicable law; and
              (ii) we will protect the transferred personal information in accordance with this
              privacy policy.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">
              Your rights and controlling your personal information
            </p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              You always retain the right to withhold personal information from us, with the
              understanding that your experience of our website may be affected. We will not
              discriminate against you for exercising any of your rights over your personal
              information. If you do provide us with personal information you understand that we
              will collect, hold, use and disclose it in accordance with this privacy policy. You
              retain the right to request details of any personal information we hold about you.
            </p>
            <p>
              If we receive personal information about you from a third party, we will protect it as
              set out in this privacy policy. If you are a third party providing personal
              information about somebody else, you represent and warrant that you have such person’s
              consent to provide the personal information to us.
            </p>
            <p>
              If you have previously agreed to us using your personal information for direct
              marketing purposes, you may change your mind at any time. We will provide you with the
              ability to unsubscribe from our email-database or opt out of communications. Please be
              aware we may need to request specific information from you to help us confirm your
              identity.
            </p>
            <p>
              If you believe that any information we hold about you is inaccurate, out of date,
              incomplete, irrelevant, or misleading, please contact us using the details provided in
              this privacy policy. We will take reasonable steps to correct any information found to
              be inaccurate, incomplete, misleading, or out of date.
            </p>
            <p>
              If you believe that we have breached a relevant data protection law and wish to make a
              complaint, please contact us using the details below and provide us with full details
              of the alleged breach. We will promptly investigate your complaint and respond to you,
              in writing, setting out the outcome of our investigation and the steps we will take to
              deal with your complaint. You also have the right to contact a regulatory body or data
              protection authority in relation to your complaint.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Payment information</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>First option</p>
            <p>
              We store information about your debit or credit card or other means of payment when
              you first provide it to us.
            </p>
            <p>We take the following measures to protect your payment information:</p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>We keep your payment information encrypted on our servers.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>We do not keep all your payment information so as:</p>
            </div>
            <div className="flex  items-start  gap-2 ">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                To prevent the possibility of our duplicating a transaction without a new
                instruction from you;
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                To prevent any other third party from carrying out a transaction without your
                consent.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>Access to your payment information is restricted to authorised staff only.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                If we ask you questions about your payment information, we only show [partial detail
                OR the first four OR the last four digits of the debit or credit card number], so
                that you can identify the means of payment to which we refer.
              </p>
            </div>

            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>[Other...]</p>
            </div>
            <p>
              We automatically delete your payment information [after X days OR when a credit or
              debit card expires].
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Second option</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              Payment information is never taken by us or transferred to us either through our
              website or otherwise. Our employees and contractors never have access to it.
            </p>
            <p>
              At the point of payment, you are transferred to a secure page on the website of [World
              Pay / / PayPal / Stripe] or some other reputable payment service provider. That page
              may be branded to look like a page on our website, but it is not controlled by us.
            </p>
            <p>
              Because some jurisdictions do not allow limitations on implied warranties, or
              limitations of liability for consequential or incidental damages, these limitations
              may not apply to you.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Construction Duty (Communication)</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              We at Construction Duty have very fast responding methods by an email or phone (calls,
              business whatsapp or text messages) we collect the data you have given to us in order
              to reply with the information you need we have automated server which helps you to
              connect soon without any glitch. We only collect information form you with your
              consent related to product and services for which you are looking or eligible.
            </p>
            <p>
              We may keep personally identifiable information associated with your message, such as
              your name and email address so as to be able to track our communications with you to
              provide a high quality service.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl   ">Cookies</p>
            <hr className="w-32 h-2 bg-[#ff5e14] rounded-md" />
            <p>
              {`Cookies are small text files that are placed on your computer's hard drive by your web
              browser when you visit a website that uses them. They allow information gathered on
              one web page to be stored until it is needed for use at a later date.`}
            </p>
            <p>
              They are commonly used to provide you with a personalised experience while you browse
              a website, for example, allowing your preferences to be remembered.
            </p>
            <p>
              They can also provide core functionality such as security, network management, and
              accessibility; record how you interact with the website so that the owner can
              understand how to improve the experience of other visitors; and serve you
              advertisements that are relevant to your browsing history.
            </p>
            <p>
              Some cookies may last for a defined period of time, such as one visit (known as a
              session), one day or until you close your browser. Others last indefinitely until you
              delete them.
            </p>
            <p>
              Your web browser should allow you to delete any cookie you choose. It should also
              allow you to prevent or limit their use. Your web browser may support a plug-in or
              add-on that helps you manage which cookies you wish to allow operating.
            </p>
            <p>
              The law requires you to give explicit consent for use of any cookies that are not
              strictly necessary for the operation of a website.
            </p>
            <p>
              When you first visit our website, we ask you whether you wish us to use cookies. If
              you choose not to accept them, we shall not use them for your visit except to record
              that you have not consented to their use for any other purpose.
            </p>
            <p>
              If you choose not to use cookies or you prevent their use through your browser
              settings, you may not be able to use all the functionality of our website.
            </p>
            <p>We use cookies in the following ways:</p>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>To track how you use our website.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>To record whether you have seen specific messages we display on our website.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>To keep you signed in to our website.</p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>
                To record your answers to surveys and questionnaires on our site while you complete
                them.
              </p>
            </div>
            <div className="flex  items-start  gap-2">
              <div>
                <GoDotFill size={20} className=" w-3" />
              </div>
              <p>To record the conversation thread during a live chat with our support team.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Privacy;
