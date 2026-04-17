import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | TVS Certified",
  description:
    "Understand how TVS Mobility collects, uses, and protects your personal information across our website and applications.",
};

const lastUpdated = "April 13, 2026";

export default function PrivacyPage() {
  return (
    <main className="bg-white text-[#0A1F44]">
      <Container className="py-12 lg:py-16">
        <header className="mb-8 space-y-3">
          {/* <p className="text-sm font-semibold uppercase tracking-wide text-[#72BF44]">Privacy Policy</p> */}
          <h1 className="text-3xl font-bold lg:text-4xl">Privacy Policy</h1>
          {/* <p className="text-sm text-zinc-600">Last updated: {lastUpdated}</p> */}
        </header>

        <div className="space-y-8 text-justify text-base leading-7 text-[#0A1F44]">
          <p className="text-lg">
            This Privacy Policy <strong>
              (“Privacy Policy”) 
              </strong>describes how TVS Certified Private Limited <strong>
                (“the Company” or “We” or Us”) 
                </strong> collects, uses, discloses and protects Personal Information of individuals that the Company collects in connection with the Company’s services, this website or TVS Certified mobile app.
          </p>
          {sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg font-extrabold uppercase tracking-wide">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}

const sections = [
  {
    title: "I.Introduction and scope:",
    content: (
<>
<p>
 Any person logging on to or using this website or TVS Certified mobile app <strong>("User or You")</strong>  is deemed to have read the terms and conditions mentioned herein and agreed to the collection and processing of their Personal Information as described herein.
</p>
<p>
If You do not agree to the collection and processing of Your Personal Information, You are free to not provide the Personal Information sought by Us for collection and processing, in which case We shall have the option not to provide the services for which the said Personal Information was sought.


</p>
</>
    ),
  },
  {
    title: " II.Personal Information Collected by Us:",
    content: (
      <>
      <p>
        <i>
          What is Personal Information:
        </i>
      </p>
        <div>
        “Personal Information” means any information relating to a natural person which, either directly or indirectly, in combination with other information, is capable of identifying such person, which can include the following:
        </div>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
        Information about the individual’s personal identity inter alia as name.
        </li>
        <li>
        His/her contact details such as address, postal code, telephone or mobile number and facsimile;
        </li>
       
        <li>
     User ID information such as username, email address and other security-related information used by an individual in relation to access and use this website or TVS Certified mobile app and its content, user id of social networks, etc.
        </li>
       
      </ol>
      <p>
        <i>
          Personal Information directly provided by the User:
        </i>
      </p>
      <ol className="list-decimal space-y-2 pl-5" >
  <li>
    When You access or use any of the services on the Company website or TVS Certified mobile app, We collect sign-up and account information such as Your name, phone number, physical address and e-mail ID.
  </li>

  <li>
    When You sign-up for Our services and use the TVS Certified, We may collect Sensitive Personal Data or Information (as defined in Section 3 of the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011) such as Your password for security purposes and You authorize Us to do so by agreeing to this Privacy Policy.
  </li>

  <li>
    When You register for an event, webinar or contest, We collect Your contact information, such as Your full name, email, phone and location. When You register through a registration form on Our Website, We may collect information such as IP address and location.
  </li>

  <li>
    When You request customer support, We collect Your name, device information or any other Personal Information You may provide Us in the course of such interaction.
  </li>

  <li>
    When You submit certain information to Our services, such as filling out a survey about Your user experience or feedback, We collect Personal Information You have provided as part of it.
  </li>

  <li>
    When You enter information in the landing pages of this website which is used by marketing teams, We collect Your contact information, such as Your full name, email, phone and location.
  </li>

  <li>
    When You apply for an employment opportunity with Us through Our online recruitment system, We collect Your contact information, such as name, email address, mailing address, phone number; any other information You volunteer, including during any interview or Your interactions with Us and contained in the resume that You submit to Us.
  </li>

  <li>
    We collect supply chain management data, including Personal Information of individual contractors, agents and of account managers, resellers and staff of third-party suppliers who provide services to Us.
  </li>

  <li>
    We may collect Personal Information about You that Our Affiliates share with Us.
  </li>
</ol>
   <p>
        <i>
        Personal Information not provided directly by You:
        </i>
      </p>
      <ol className="list-decimal space-y-2 pl-5">
  <li>
    When You are a visitor of this website, We collect Your device and Your usage of Our website or emails (such as Internet Protocol (IP) addresses or other identifiers as described in the section “Cookie Policy”).
  </li>

  <li>
    When You use and interact with Our services, We collect Your device type, and the operating system version and Your usage of Our services through log files and other technologies, some of which may qualify as Personal Information.
  </li>

  <li>
    We may collect Your Personal Information (a) from third party sources that share such information with Us, such as providers of lists of potential service users without breach of any confidentiality clause; or (b) that is available on public platforms.
  </li>

  <li>
    When You subscribe to Our services, We may collect transaction confirmation and completion details from Our banking and credit card partners.
  </li>

  <li>
    When You use certain services on the TVS Certified mobile app, We collect insurance policy details of the vehicles that insurers may share with Us.
  </li>

  <li>
    We may also collect or receive Your Personal Information from other sources such as Our business or channel partners through whom You create or access Your account.
  </li>

  <li>
    When You authorize Us to connect with a third-party service, We will access and store Your Personal Information that the third-party service makes available to Us, which may include Your email address, location or profile information.
  </li>
</ol>
      </>
    ),
  },
  {
    title: "III.Purposes for Which Personal Information will be Collected and Used:",
    content: (
     <>
        <p>
        <i>
        We collect and use Your Personal Information to:
        </i>
      </p>
      <ol className="list-decimal space-y-2 pl-5">
  <li>
    Enable Your access to and use of Our services and process the transaction and to fulfill listing requests with Inspection & Auction yard.
  </li>

  <li>
    Respond to User’s requests for service brochures, to customize and improve communication content, or for marketing or brand promotion.
  </li>

  <li>
    For analysis and development activities (including data analytics, surveys and/or profiling) to improve Our services and facilities in order to enhance Your relationship with Us or for Your benefit, or to improve any of our Service(s) for Your benefit. It may also be used to provide User with helpful offers and information on TVS Certified products and services.
  </li>

  <li>
    Provide support in relation to Your use of Our Services (for example, mailing information in response to Your request for a service request or to follow up on a query or complaint).
  </li>

  <li>
    To organize events or for other marketing/promotional activities and ensure that any event, webinar or contest You register for is conducted in a secure and effective manner.
  </li>

  <li>
    Investigate and prevent fraudulent transactions, unauthorized access to this website and/or TVS Certified app, and other illegal activities.
  </li>

  <li>
    Evaluate You for any position that You have applied for or that We may consider You at the time that You submitted Your resume or on a later date.
  </li>

  <li>
    Perform Our obligations or receive products/services in accordance with any contract that We may have with You or Your organization.
  </li>

  <li>
    Manage Our relationship with You or Your organization.
  </li>
</ol>
     </>
    ),
  },
  {
    title: "IV.Sharing of Personal Information:",
    content: (<>
      <p>
       Like many businesses, Company uses a range of service providers to help us maximize the quality and efficiency of our services and our business operations. This means that individuals and organizations outside of Company, such as mail houses, will sometimes have access to Personal Information held by Company and may use it on behalf of Company. We require our service providers to adhere to strict data protection requirements.
      </p>
      <div>
      <i>We may share Your Personal Information with:</i>
      </div>
      <ol  className="list-decimal space-y-2 pl-5">
  <li>
    Our Affiliates, companies that We will acquire in the future when they are made Our Affiliates, and third-party service providers so that they may offer You Our services, support in connection with Our services and/or to send information or updates on the services.
  </li>

  <li>
    Credit reference agencies to prevent fraudulent purchases.
  </li>

  <li>
    Our third-party service providers that host and maintain this website, Our applications, backup, storage, payment processing, analytics and other services. These third-party service providers may have access to or use Your Personal Information for the purpose of providing these services to Us.
  </li>

  <li>
    Third-party providers who assist Us in marketing and promotions.
  </li>

  <li>
    Third-party organisers or sponsors that assist Us with the organisation of events, webinars, contests.
  </li>

  <li>
    External recruiters and organizations like those that do employee background checks on Our behalf and on behalf of Our group entities.
  </li>

  <li>
    Third parties whose products We use in maintaining a record of and evaluating You for the position applied.
  </li>

  <li>
    Third parties involved in a corporate transaction. If Company becomes involved in a merger, acquisition, or any form of sale of some or all its assets, then, in accordance with applicable laws, Company will use reasonable efforts to notify You of any transfer of Personal Information to an unaffiliated third party.
  </li>

  <li>
    Law enforcement authorities, government authorities, courts, dispute resolution bodies, regulators, auditors, and any party appointed or requested by applicable regulators to carry out investigations or audits of Our activities.
  </li>

  <li>
    Professional advisors who advise and assist Us in enforcing Our contracts and policies, handling Our claims, effective management of Our company and in relation to any disputes We may become involved in.
  </li>
</ol>
    </>
    ),
  },
  {
    title: "V.Retention of Personal Information",
    content: (
      <>
      <p>
        We retain the Personal Information collected for as long as it is necessary to fulfill the purposes for which it is collected, or for as long as we are required to retain them in accordance with applicable law or regulation.
      </p>
      <p>
        In the absence of a need to retain Personal Information, We will either delete it or aggregate it, or, if this is not possible then We will securely store Your Personal Information and isolate it from any further use until deletion is possible. 
      </p>
      </>
    ),
  },
  {
    title: "VI.Security of Information:",
    content: (
      <p>
       We use We use appropriate and reasonable security measures to protect the Personal Information that We collect and Process. Such measures include SSL encryption; the industry standard security measures for transactions made over the internet. Further, data is secured in a secure data center environment and We use sophisticated detection and intrusion technologies to ensure that there are no network security breaches.

      </p>
    ),
  },
  {
    title: "VII.Your Rights",
    content: (
      <>
      <div>
            <i>You are entitled to the following rights:</i>
      </div>
      <ol className="list-decimal space-y-2 pl-5">
  <li>
    You can request Us for access and correction of Your Personal Information.
  </li>

  <li>
    You can request Us to delete Your Personal Information and We will take all reasonable steps to delete it unless We need to keep it for legal or statutory reasons as mentioned above.
  </li>

  <li>
    If We have collected and used Your Sensitive Personal Data or Information (SPDI) with Your consent, then You can withdraw Your consent at any time. Withdrawing Your consent will not affect the lawfulness of any Our use of Your Personal Information prior to Your withdrawal, nor will it affect use of Your Personal Information conducted in reliance on lawful grounds other than consent.
  </li>

  <li>
    You have the right to opt-out of marketing communications We send You at any time by contacting Us.
  </li>
</ol>
<div>
  If You seek to exercise Your rights under this clause, please contact Us at the details provided in clause 10. We will verify any requests before acting on the request and respond to all requests We receive from individuals wishing to exercise their data protection rights within a reasonable timeframe in accordance with applicable laws.


</div>
      </>
    ),
  },
  {
    title: "VIII.Cookie Policy",
    content: (
      <>
      <p>
New technologies are emerging on the Internet that help us deliver customized visitor experiences. We may use cookies and other tracking devices on this website & TVS Certified mobile apps. Using cookies on our sites provides benefits to You, such as allowing you to maintain account login information or contact information on forms between visits, or locating a nearby service center.
      </p>
      <p>
        The use of cookies also allows to measure site activity to provide a better user experience. Cookies and other tracking devices may be used to tell us the time and length of visit, the pages You look at on our site, the site You visited just before coming to ours, and the name of your internet service provider.


      </p>
      <p>
        We may collect Personal Information automatically from You through cookies or similar technology. We primary deploy two types of cookies:
      </p>
      <ol className="list-decimal space-y-2 pl-5">
  <li>
    <i>Essential Cookies:</i> We set essential cookies that enable core functionality such as security, network management, and accessibility. You may not opt-out of these cookies. However, You may disable these by changing Your browser or device settings, but this may affect how the website or TVS Certified app functions.
  </li>

  <li>
    <i>Analytics, Customisation and Advertising Cookies:</i> We also set cookies to collect information that is used either in aggregate form to help Us understand how Our website or TVS Certified app are being used or how effective marketing campaigns are, to help customise the website or TVS Certified app for You or to make advertising messages more relevant to You. We set these cookies to help Us improve Our website and TVS Certified app by collecting and reporting information on how You use it. The cookies collect information in a way that does not directly identify anyone.
  </li>
</ol>
<p>
  The list of cookies and opt-out mechanism will, as required by applicable law, be displayed when You visit Our website.


</p>
      </>
    ),
  },
  {
    title: "IX.Geographic Scope of Site",
    content: (
      <p>
    Company controls and operates this web site from India. Unless otherwise specified on or by this web site, this web site is intended to promote only those services that are provided by TVS Certified in India and its territories, and TVS Certified makes no representation that materials in this web site or the products described thereby are appropriate or available for use in other locations. The Company stores data in India primarily but may transfer Your Personal Information outside India in compliance with applicable laws in India. All visitors to this web site are responsible for compliance with all Indian laws applicable to them with respect to the content and operation of this website or TVS Certified mobile app.
      </p>
    ),
  },
  {
    title: "X.Contacting Our Grievance Officer",
    content: (
      <>
      <p>
    If Company becomes aware of any ongoing concerns or problems concerning privacy practices, We will take these issues seriously and work to address these concerns. If You have any further queries relating to our Privacy Policy, or You have a problem or complaint, please e-mail Our Grievance Officer in the following manner:
      </p>
      <p>
        Kind Attention: Grievance Officer
      </p>
      <p>
        E-mail ID: contact@tvs.in
      </p>
      </>
    ),
  },
  {
    title: "XI.Future changes",
    content: (
      <p>
      These Privacy Policies may be reviewed and revised. Changes to the Privacy Policy will be made by posting an updated version of the policy on this website and/or TVS Certified  mobile app, and You shall be notified only if there are material changes to this Privacy Policy. We request our visitors/members to consider the updated policy displayed on this web site and/or TVS Certified mobile app only.
      </p>
    ),
  },
];
