import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/Brainz-logo.png";
import { Button } from "./Button";
import { CustomCheckbox } from "./Checkbox";

const ConditionsModal = ({ isOpen, onAccept }) => {
  const [checkedOne, setCheckedOne] = useState(false);

  const handleContinue = (e) => {
    if (checkedOne) {
      onAccept();
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full md:p-[0] max-w-[1176px] text-center text-white transform overflow-hidden rounded-[20px] bg-primary-350  text-left align-middle shadow-xl transition-all">
                <div className="md:h-[682px] h-[580px] py-4 pr-4 md:px-[50px] scrollbar scrollbar-w-[6px] scrollbar-thumb-rounded-full scrollbar-thumb-[#104061] overflow-y-scroll">
                  <div className="flex flex-col justify-center items-center pt-[0] md:pt-7">
                    <Link href={"/"}>
                      <Image
                        src={logo}
                        alt="Logo"
                        width={104}
                        height={60}
                        draggable={false}
                        priority={true}
                      />
                    </Link>
                    <h1 className="text-2xl font-bold font font-basement md:text-3xl">
                      Terms & Conditions
                    </h1>
                    <p className="text-base font-normal font-inter text-grey-100">
                      You agree to our Terms of Use and License Terms.
                    </p>
                    <div className="text-grey-100 text-start rounded-[10px] pl-4 pr-[6px] py-3 mt-6  border border-[#51626e] ">
                      <div className="pr-[14px] h-64 scrollbar scrollbar-w-[6px] scrollbar-h-[16px] scrollbar-thumb-rounded-full scrollbar-thumb-[#104061] overflow-y-scroll">
                        <h1 className="mb-4 text-lg font-bold font-inter">
                          Terms of Service - PlayBrainz.com
                        </h1>
                        <h1 className="mb-5 text-lg font-normal font-inter">
                          Issued on June 4 2024
                        </h1>
                        <p className="mb-4 text-base font-normal font-inter">
                          These Terms and Conditions form a binding legal
                          agreement between You and Us and apply to your use of
                          our Platform, Website or games in any way, through any
                          electronic device (web, mobile, tablet or any other
                          device).
                        </p>
                        <p className="mb-4 text-base font-normal font-inter">
                          Please note that these Terms and Conditions include a
                          provision waiving the right to pursue any class, group
                          or representative claim and requiring You to pursue
                          past, pending, and future disputes between You and Us
                          through PlayBrainz’s escalation process unless You opt
                          out within the specified time frame.
                        </p>
                        <p className="mb-6 text-base font-normal font-inter">
                          You must read these Terms and Conditions carefully in
                          their entirety before checking the box for acceptance.
                          By checking the box for acceptance during the
                          registration process, or by accessing the Games or the
                          Platform, You confirm that you have read and agree to
                          be bound by these Terms and Conditions, which include
                          and are inseparably linked to our Privacy Policy and
                          other promotion-specific or game-specific terms
                          relevant to your Participation. If you do not agree
                          with any provision of these Terms and Conditions or
                          any other linked policy, rules or terms you may not
                          install or use the Platform.
                        </p>
                        <ul
                          role="list"
                          class="marker:text-sky-400 list-disc pl-5"
                        >
                          <li className="uppercase">DEFINITIONS</li>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal my-4">
                            <span>1.0.</span> Collective Action means any claim
                            as part of a class, group, collective, coordinated,
                            consolidated, mass, or representative proceeding.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>1.1.</span>Content – means text, graphics,
                            user interfaces, visual interfaces, photographs,
                            trademarks, logos, sounds, music, artwork, computer
                            code and other material used, displayed or available
                            as part of the Games and Platform.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.2.</span>Customer Account – means an
                            account held by a Registered Customer.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>1.3.</span>&quot;Competition Excluded
                            Jurisdiction(s)&quot; means:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>1.3.0.</span>Afghanistan, Algeria, Angola,
                            Belarus, Burma, Central African Republic, Cuba,
                            Democratic Republic of the Congo, Eritrea, Haiti,
                            Holy See, Iran, Iraq, Kyrgystan, Lebanon, Libya,
                            North Korea, Palestine State, Republic of Ireland,
                            Rwanda, Sierra Leone, Somalia, South Sudan, Sudan,
                            Syria, Venezuela, Yemen, Zimbabwe and the American
                            states of Nevada (USA), Washington (USA), Georgia
                            (USA), Minnesota (USA), Mississippi (USA), Montana
                            (USA), South Dakota (USA) and any other countries,
                            territories or jurisdictions in which it would be
                            illegal to play Games or redeem Prizes.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.4. </span>Fraudulent Conduct– means any of
                            the conduct described in clause 18.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.5. </span>Game(s) – means any one or more
                            PlayBrainz Game(s) available on the Platform. We
                            reserve the right to add and remove Games from the
                            Platform at our sole discretion.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.6. </span>Inactive Account means a Customer
                            Account which has not recorded any log in or log out
                            for a period exceeding 12 consecutive months.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.7. </span>&quot;Mail-in Member&quot; means
                            a registered user who has completed Mail-In
                            Registration (AMOE).
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.8. </span>Participate means playing any
                            Games or using our Platform in any manner
                            whatsoever, including any of the conduct described
                            in clause 2.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.9. </span>Payment Administration Agent
                            means any related body corporate, affiliate, or
                            third party we appoint to act as our agent.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.10.</span> Platform means any URL or mobile
                            application belonging to, or licensed to, PlayBrainz
                            and branded as part of the “PlayBrainz” family of
                            games, including the website located at
                            https://www.PlayBrainz.com, and all subdomains,
                            subpages and successor sites thereof, as well as all
                            Games, features, tools and services available
                            thereon.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.11.</span> Player or You, you, your or Your
                            means any person who Participates, whether or not a
                            Registered Customer.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.12.</span> Registered Customer means a
                            Player who has successfully registered a Customer
                            Account, whether that account is considered active
                            or not.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.13.</span> Service means the availability
                            and provision of the Games and the Website that
                            enable you to Participate.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.14.</span> Terms and Conditions means these
                            terms and conditions, as amended from time to time.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.15.</span> Third Party Websites means a
                            third party website not controlled by us.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.16.</span> PlayBrainz Games means any game
                            played.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.17.</span> PlayBrainz, We, we, Us, Our or
                            our means PlayBrainz
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span> 1.18.</span> Website means the website
                            located at https://PlayBrainz.com, any other related
                            sites operated by Us and all subdomains, subpages
                            and successor sites thereof.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            2. YOUR PARTICIPATION
                          </h1>
                          <p className="mb-4 text-base font-normal font-inter">
                            Restrictions
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            You hereby declare and warrant that:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.0.0.</span> You are over 18 years of age or
                            such higher minimum legal age of majority as
                            stipulated in the jurisdiction of your residence and
                            are, under the laws applicable to you, legally
                            allowed to participate in the Games offered on the
                            Platform. If you are not 18 years or older You may
                            not access the Service;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.0.1.</span>You participate in the Games
                            strictly in your personal capacity for recreational
                            and entertainment purposes only;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.0.2.</span>You participate in the Games on
                            your own behalf and not on the behalf of any other
                            person;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.0.3.</span>All information that You provide
                            to Us during the term of validity of these Terms and
                            Conditions is true, complete and correct, and You
                            will immediately notify Us of any change to such
                            information;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.0.4.</span>Money that You use to play
                            PlayBrainz games is not tainted with any illegality
                            and, in particular, does not originate from any
                            illegal activity or source;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.0.5.</span>You will not play PlayBrainz
                            games from a business or corporate account, but only
                            from an account held in your name;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.0.6.</span>You will not be involved in any
                            fraudulent, collusive, fixing or other unlawful
                            activity in relation to your or third parties’
                            participation in any of the Games and you will not
                            use any software-assisted methods or techniques
                            (including but not limited to bots designed to play
                            automatically) or hardware devices for your
                            participation in any of the Games. We reserve the
                            right to invalidate any participation in the event
                            of such behaviour; and
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.1.</span>It is a Player’s responsibility to
                            ensure that their Participation is lawful in their
                            jurisdiction. Any person who is knowingly in breach
                            of clause 2., including any attempt to circumvent
                            this restriction, for example, by using a VPN, proxy
                            or similar service that masks or manipulates the
                            identification of your real location, or by
                            otherwise providing false or misleading information
                            regarding your location or place of residence, or by
                            Participating through a third party or on behalf of
                            a third party located in a jurisdiction where it is
                            unlawful to Participate, is in breach of these Terms
                            and Conditions. You may be committing fraud and may
                            be subject to criminal prosecution.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.2.</span>Employees of PlayBrainz, any of
                            their respective affiliates, subsidiaries, parent or
                            holding companies, advertising agencies, or any
                            other company or individual involved with the
                            design, production, execution or distribution of the
                            Games and their immediate family (spouse, parents,
                            siblings and children, whether the relationship is
                            by birth, marriage or adoption) and household
                            members (people who share the same residence at
                            least 6 months of the year) are not eligible to
                            Participate.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.3.</span>Players who have excluded
                            themselves from participation are prohibited from
                            participation in games of chance as long as the
                            self-exclusion period is in place.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>2.4.</span>By accepting these Terms and
                            Conditions You agree that your Participation is at
                            your sole option, discretion, and risk. You will
                            have no claims whatsoever against PlayBrainz or any
                            of its partners, or respective directors, officers
                            or employees in relation to any losses You incur.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            3. LICENCE
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>3.0.</span>Subject to your agreement and
                            continuing compliance with these Terms and
                            Conditions, PlayBrainz grants You a personal,
                            non-exclusive, non-transferable, non-sublicensable,
                            revocable, limited licence to access and use the
                            Platform, through a supported Web browser or mobile
                            device, solely for your personal, private
                            entertainment and no other reason.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>3.1.</span>These Terms and Conditions do not
                            grant You any right, title or interest in the
                            Platform or Content.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>3.2.</span>You acknowledge and agree that your
                            licence to use the Platform is limited by these
                            Terms and Conditions and if you do not agree to, or
                            act in contravention of, these Terms and Conditions,
                            your licence to use the Platform (including the
                            Games and Content) may be immediately terminated.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>3.3.</span>Where the Platform or any Game is
                            deemed to be illegal under the laws of the
                            jurisdiction in which you reside or are situated,
                            you will not be granted any licence to, and must
                            refrain from accessing, the Platform or relevant
                            Game.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            4. YOUR CUSTOMER ACCOUNT
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.0.1.</span>Our system allows for customer
                            account per wallet address, including any Inactive
                            Accounts, on the Platform.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.1.</span>You are required to always keep
                            your registration details up to date. If you update
                            any of your personal information, contact Customer
                            Support via Discord-Arena and open a ticket in order
                            to update your details. If provided, the name that
                            you used at registration must be identical to that
                            listed on your government issued identification.
                            Please note that any changes to your personal
                            details may result in you having to submit
                            identification in order to verify your identity.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.2.</span>Security and Responsibility of Your
                            Customer Account
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            As part of the registration process, you will have
                            to choose a password to login into the Platform, if
                            offered, you may login to your Customer Account
                            using MetaMask. It is your sole and exclusive
                            responsibility to ensure that your Customer Account
                            login details and any payment methods are kept
                            secure and are only accessible by you. You accept
                            full responsibility for any unauthorised use of your
                            Customer Account and any activity linked to your
                            Customer Account, including by a minor (which in all
                            events is prohibited).
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.2.0.</span>You must not share your Customer
                            Account or seed phrase with another person, let
                            anyone else access or use your Customer Account or
                            do any other thing that may jeopardise the security
                            of your Customer Account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.2.1.</span>If you become aware of, or
                            reasonably suspect that security in your Customer
                            Account has been compromised, including loss, theft
                            or unauthorised disclosure of your password and
                            Customer Account details, you must notify us
                            immediately.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.2.2.</span>You are solely responsible for
                            maintaining the confidentiality of your password and
                            you will be held responsible for all uses of your
                            Customer Account, including any purchases made under
                            the Customer Account, whether those purchases were
                            authorised by you or not.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.2.3.</span>You are solely responsible for
                            anything that happens through your Customer Account,
                            whether or not you undertook those actions. You
                            acknowledge that your Customer Account may be
                            terminated if someone else uses it and engages in
                            any activity that breaches these Terms and
                            Conditions or is otherwise illegal.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.2.4.</span>We are not responsible for any
                            abuse or misuse of your Customer Account by third
                            parties due to your disclosure of your login details
                            to any third party, whether such disclosure is
                            intentional or accidental, active or passive.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.3.</span>Account Transfers
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            You are not allowed to transfer any existing balance
                            between Customer Accounts, or from your Customer
                            Account to other users, or to receive balance from
                            other Customer Accounts into your Customer Account,
                            or to transfer, sell and/or acquire Customer
                            Accounts.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.4.</span>Inactive Customer Accounts
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            We reserve the right to deactivate your Customer
                            Account if it is deemed to be an Inactive Account.
                            If no transactions have been recorded on your
                            Customer Account for 12 consecutive months, we
                            reserve the right to zero any balance with no offer
                            of any purchase refunds.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.5.</span>Closing of Customer Accounts
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            If you wish to close your Customer Account, you may
                            do so at any time by selecting the “Contact” link on
                            the Platform and submitting a request to close your
                            Customer Account. Closing your Customer Account will
                            forfeit all continued access to and right to use.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.5.0.</span>You will be able to open your
                            Customer Account again by sending a request to the
                            Customer Support team. All requests for the
                            re-opening of an account will be evaluated by our
                            Customer Support and Compliance teams, which shall
                            abide by strict customer protection guidelines.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.5.1</span>PlayBrainz will not be held
                            responsible for any losses or damages which occurred
                            as a result of circumventing our closed account
                            program. Losses during this period will not be
                            refunded.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.6.</span>Discretion to Refuse or Close
                            Accounts
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            We reserve the right to refuse a Customer Account to
                            anyone, or to close an already open Customer Account
                            in our sole discretion. In the event We choose to
                            close an account, depending on reasoning, any
                            existing balance may be refunded prior to the
                            closure. This is again at our sole discretion.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>4.7.</span>Our website offers you the
                            possibility of a voluntary self-exclusion. Please
                            see the Self-Exclusion Policy for further
                            information.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            5. GAMES
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.</span>Rules
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.0.</span>Games offered on the Platform may
                            have their own rules which are available on the
                            Platform. It is your responsibility to read the
                            rules of a Game before playing. You must familiarise
                            yourself with the applicable terms of play and read
                            the relevant rules before playing any Game.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.1.</span>All crypto exchange transaction
                            fees, charges or related costs that may be incurred
                            as a result of, or in relation to, your balance
                            funding are to be borne solely by you, including but
                            not limited to any losses or additional costs
                            arising from cryptocurrency exchange fluctuations.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.2.</span>You may participate in any Game
                            only if you have sufficient balance in your Customer
                            Account for such Participation. We will not extend
                            you any credit whatsoever.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.3.</span>From time to time, we may assign
                            minimum or maximum purchases as specified and
                            offered on the Platform.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.4.</span>Once a purchase has been made,
                            the funds will be drawn from your MetaMask account
                            as soon as practicable.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.6.</span>Funds that have been submitted
                            for play and accepted cannot be changed, withdrawn,
                            or cancelled and the balance will be drawn
                            instantly.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.7.</span>Void Games
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            We reserve the right to declare Participation in a
                            Game void, partially or in full, if, in our sole
                            discretion, we deem it obvious that there was an
                            error, mistake, misprint or technical error, fraud,
                            or other action invalidating play.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.8.</span>Final Decision
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            In the event of a discrepancy between the result
                            showing on a user’s device and the PlayBrainz server
                            software, the result showing on the PlayBrainz
                            server software will be the official and governing
                            result.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.8.1.</span>While every effort is made to
                            ensure the accuracy of the Return to Player
                            percentages (RTPs) displayed on our website, you can
                            always verify the current theoretical RTP of the
                            slot you’re playing from within its in-game menu.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.8.2.</span>We will retain all
                            communication related to participation in games for
                            as long as you use our Services or as necessary to
                            fulfill the purpose(s) for which it was collected,
                            provide our Services, resolve disputes, establish
                            legal defenses, conduct audits, pursue legitimate
                            business purposes, enforce our agreements, and
                            comply with applicable laws.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.8.3.</span>The following cryptocurrencies
                            can be used for making deposits: ETH, BTC, SOL,
                            USDC, USDT, DAI, LTC, DOGE, MATIC, BNB, BCH, XRP,
                            TRON and EOS. The value of bets placed and prizes
                            won using any of the cryptocurrencies listed above
                            on the website will be displayed in USD.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.9.</span>Competitions
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Competitions offered on the platform may have their
                            own entry requirements. It is your responsibility to
                            read the entry requirements and cost prior to
                            entering.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.10.</span>Competitions operate using
                            verified WEB3 compliant smart contracts.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.10.</span>Competitions are hosted within
                            the smart contract and offer full visibility to the
                            participants, as such, entries can only be made via
                            a direct wallet transaction.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.11.</span>Entries to competitions will
                            carry an ethereum blockchain ‘gas fee’. Gas fees are
                            a standard when operating on the Ethereum
                            blockchain.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.14.</span>Competition entries once
                            purchased will not be refunded.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.15.</span>We may implement limitations on
                            the amount of entry packages or total entries a
                            single account can buy.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.16.</span>A list of all participants can
                            be found on the competition page and within the
                            smart contract for each competition.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.17.</span>In the unlikely event of a
                            cancellation, participants can claim their entry
                            cost back from their profile page.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.18.</span>In the unlikely event of a
                            competition cancellation, all unclaimed funds will
                            be transferred to a PlayBrainz wallet after 30 days.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.19.</span>Failed entries and funds lost as
                            a result of adjusting the recommended gas
                            estimations are not the responsibility of
                            PlayBrainz.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.20.</span>Competitions with max entries
                            showing will remove entry buttons from the website
                            when the max entry number has been reached. It is
                            possible some further entries reach us after the
                            competition closes by way of delayed receipts.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.21.</span>Any evidence of attempts to
                            manipulate the mechanics of PlayBrainz Competitions
                            discovered may result in the removal from the
                            Competition draw and a closure of your PlayBrainz
                            account. This includes but not limited to
                            hotswapping an NFT to access &quot;Holders
                            Only&quot; games.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.22.</span>Some competitions will display
                            an entrants cap. This max cap is strictly an
                            approximation. When this cap is reached, the UI
                            closes and a call to draw the competition is sent
                            via the blockchain and is subject to blockchain
                            processing times. Any additional entries processed
                            prior to the draw call completing may be included in
                            the final draw.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.23.</span>If you suspect another user of
                            suspicious activity please open a ticket in Discord
                            - Arena.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.24.</span>PlayBrainz reserves the right to
                            amend Competition end times.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.25.</span>Competition max entries are on
                            an account basis.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.26.</span>Competitions may periodically
                            include minimum entry requirements that if not
                            reached will extend the draw time. Commonly referred
                            to as Overtime, these Competitions will state in the
                            description. More details can be found on the ARENA
                            Discord.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.0.27.</span>Holders Only Competitions will
                            allow 1 entry per allowed token ID. Once the token
                            as been used for an entry, it cannot be used to
                            entry again using a different wallet.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.1.3.</span>Users can obtain one entry per
                            competition by completing the mail in registration
                            process. The entry will be added to the draw in the
                            final hour before the competition completes.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>5.1.4.</span>We shall not be responsible for
                            late, lost, illegible, incomplete, stolen,
                            misdirected, mutilated or postage-due mail. The odds
                            of winning any Prize will be the same for Mail-In
                            Members as for Paying Members. All Mail-In Members
                            will be accorded equal opportunities to participate
                            and win in Games held on the Platform.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.</span>Swapping ETH into your PlayBrainz
                            balance
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.0.</span>You can participate in any or
                            PlayBrainz’s instant games if you have sufficient
                            ETH in your PlayBrainz balance. PlayBrainz will not
                            give you any credit whatsoever for participation in
                            any of its instant games. balance
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.1.</span>Swapping ETH into your PlayBrainz
                            balance may be restricted in certain territories. If
                            you do not see the option to swap, then you are
                            within a territory in which they are not accepted.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.2.</span>To swap funds into your PlayBrainz
                            wallet, you transfer funds from crypto-wallets using
                            the swap option within your PlayBrainz wallet. Swaps
                            can only be made with the wallet connected to your
                            PlayBrainz account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.3.</span>Swaps into your PlayBrainz balance
                            are shown in your PlayBrainz wallet instantly.
                            PlayBrainz does not take responsibility for any
                            delays caused due to Ethereum network confirmation
                            times or due to delays caused by any third party.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.4.</span>We reserve the right to use
                            additional procedures and means to verify your
                            swaps.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.5.</span>Note that gas fees are applied to a
                            swap into your PlayBrainz balance, as displayed by
                            your crypto wallet on confirmation.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.6.</span>Your PlayBrainz balance cannot be
                            transferred from your PlayBrainz wallet to the
                            PlayBrainz wallet of another user.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>6.7.</span>PlayBrainz can refuse any swaps at
                            its own discretion. Users that have their accounts
                            blocked, or suspended shall refrain from swapping.
                            In the event that a user attempts to swap when their
                            PlayBrainz account is closed or suspended,
                            PlayBrainz has the right to retain the funds.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>7.</span>Swapping ETH out of your PlayBrainz
                            balance
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>7.0.</span>Swaps out of your PlayBrainz
                            balance will be made to the crypto wallet you have
                            associated with your PlayBrainz account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>7.1.</span>PlayBrainz reserves the right to
                            carry out additional verification procedures for any
                            outbound swap.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>7.2.</span>PlayBrainz users who wish to
                            recover funds held in closed or suspended accounts,
                            must open a ticket in Discord - Arena with their
                            request.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>7.3.</span>PlayBrainz may suspend, or close a
                            users PlayBrainz account and withhold funds at any
                            point.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>7.4.</span>You acknowledge that the balance in
                            your PlayBrainz wallet is used instantly when
                            interacting with our instant games and we do not
                            provide return of goods, refunds.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>7.5.</span>Note that withdrawals include an
                            additional 0.005 ETH fee to cover transactional gas.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            8. PROMOTIONS
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>8.0.</span>All promotions, including contests
                            and special offers are subject to these Terms and
                            Conditions and to additional terms that may be
                            published at the time of the promotion.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>8.1.</span>In the event and to the extent of
                            any conflict between these Terms and Conditions and
                            any promotion-specific terms and conditions, the
                            promotion-specific terms and conditions will
                            prevail.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>8.2.</span>PlayBrainz reserves the right to
                            withdraw or modify such promotions without prior
                            notice to you.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>8.3.</span>If, in the reasonable opinion of
                            PlayBrainz, we form the view that a Registered
                            Customer is abusing any promotion, to derive any
                            advantage or gain for themselves or other Registered
                            Customers, including by way of Fraudulent Conduct,
                            we may, at our sole discretion, withhold, deny or
                            cancel any advantage, bonus or prize as we see fit.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>8.4.</span>Without limiting clause 9.3.,
                            unless restricted by applicable law, you confirm
                            that you grant PlayBrainz an irrevocable, perpetual,
                            worldwide, non-exclusive, royalty-free licence to
                            use in whatever way we see fit, and without further
                            acknowledgement of you as the author, any Content
                            you post or publish as part of a promotion, contest
                            or competition.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            9. FINANCIAL TERMS OF USE
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.0.</span>Verification Checks
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.0.0.</span>You agree that we are entitled to
                            conduct any identification, credit and other
                            verification checks that we may reasonably require
                            and/or that are required of us under applicable laws
                            and regulations or by relevant regulatory
                            authorities.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.0.1.</span>Until all required verification
                            checks are completed to our satisfaction, we are
                            entitled to restrict your Customer Account in any
                            manner that we may reasonably deem appropriate,
                            including by suspending or deactivating your
                            Customer Account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.0.2.</span>Where any identification, credit
                            or other verification check we require cannot be
                            completed to our satisfaction because you have not
                            provided any document we request from You in the
                            form that we require within 7 days’ of the date the
                            document was first requested, we will deactivate
                            your Customer Account. You will not be able to swap
                            funds into your balance at PlayBrainz until this
                            verification check has been successfully
                            completed.Credit Checks
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.0.3.</span>PlayBrainz reserves the right to
                            run external verification checks on all account
                            holders with third party verification agencies based
                            on the information provided on registration.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.1.</span>Expiry and Forfeiture
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.1.0.</span>Your PlayBrainz balance is valid
                            for 365 days from the date you last logged on to
                            your Customer Account and will thereafter
                            automatically expire.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.1.1.</span>Your PlayBrainz balance may be
                            forfeited if a Customer Account is deactivated for
                            any reason, or at our discretion.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>9.2.</span>Mistaken Credits
                          </p>

                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            If we mistakenly credit your Customer Account with
                            additional funds or prizes that do not belong to
                            you, whether due to a technical error, human error
                            or otherwise, the amount credited will remain the
                            property of PlayBrainz and will be deducted from
                            your Customer Account at the earliest opportunity.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            10. FRAUDULENT CONDUCT
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.</span>You may not, directly or
                            indirectly:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.0.</span>Hack into any part of the Games
                            or Platform through password mining, phishing, or
                            any other means;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.1.</span>Attempt to modify, reverse
                            engineer, or reverse-assemble any part of the Games
                            or Platform;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.2.</span>Knowingly introduce viruses,
                            Trojans, worms, logic bombs, spyware, malware, or
                            other similar material;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.3.</span>Circumvent the structure,
                            presentation or navigational function of any Game so
                            as to obtain information that is not publicly
                            available on the Platform;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.4.</span>Engage in any form of cheating
                            or collusion;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.5.</span>Use the Services and the systems
                            of PlayBrainz to facilitate any type of illegal
                            money transfer (including money laundering proceeds
                            of crime); or
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.6.</span>Participate in or take advantage
                            of, or encourage others to participate in or take
                            advantage of schemes, organisations, agreements, or
                            groups designed to share:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.6.0.</span>Special offers or packages
                            emailed to a specific set of players and redeemable
                            by URL; or
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.0.6.1.</span>Identification documents
                            (including, but not limited to, photographs, bills
                            and lease documents) for the purpose of misleading
                            PlayBrainz as to a Player’s identity.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.1.</span>You must not use the Platform for
                            any unlawful or fraudulent activity or prohibited
                            transaction (including Fraudulent Conduct) under the
                            laws of any jurisdiction that applies to you. We
                            monitor all transactions in order to prevent money
                            laundering.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.2.</span>If PlayBrainz suspects that you
                            may be engaging in, or have engaged in fraudulent,
                            unlawful or improper activity, including money
                            laundering activities or any conduct which violates
                            these Terms and Conditions, your access to the
                            Services will be deactivated immediately and your
                            Customer Account may be suspended. If your Customer
                            Account is deactivated or suspended under such
                            circumstances, PlayBrainz is under no obligation to
                            reverse any purchases you have made. In addition,
                            PlayBrainz may pass any necessary information on to
                            the relevant authorities, other online service
                            providers, banks, credit card companies, electronic
                            payment providers or other financial institutions.
                            You will cooperate fully with any PlayBrainz
                            investigation into such activity.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>10.3.</span>If you suspect any unlawful or
                            fraudulent activity or prohibited transaction by
                            another Player, please notify us immediately via the
                            means of communication listed in the Customer
                            Complaints procedure (described in clause 15.).
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            UNITED STATES LEGAL COMPLIANCE:
                          </h1>

                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            You hereby represent and warrant that (i) you are
                            not situated in a country that is subject to the
                            United States government embargo, or has been
                            designated by the United States government as a
                            &quot;terrorist supporting&quot; country, and (ii)
                            you are not listed on any United States government
                            list of prohibited or restricted parties.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            MEMBER ELIGIBILITY & WARRANTIES Subject To
                            Applicable Laws.
                          </h1>

                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            You are subject to the laws of the country, state,
                            city, or other legal entity (collectively
                            &quot;Jurisdiction(s)&quot;) in which you reside
                            and/or from which you access the Services. Access to
                            the Services may not be legal for some Jurisdictions
                            or for all residents of, or persons present in,
                            certain Jurisdictions. We have installed filtering
                            systems designed to limit access from known Excluded
                            Jurisdictions.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            It is your responsibility to comply with law in your
                            Jurisdiction. We do not make any representation or
                            warranty, express or implied, as to the lawfulness
                            of your participation in the Games, or that
                            materials on the Platform are appropriate for your
                            use. The information contained in the Agreement or
                            on the Platform does not constitute an offer,
                            solicitation, or invitation by us for the use of any
                            service in any Excluded Jurisdiction.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            We further reserve the right to require you to
                            provide proof that you are eligible to participate
                            on the Platform at any point in time. We also
                            reserve the right to refuse service and access to
                            any potential participant where we reasonably
                            believe that such participant is based in an
                            Excluded Jurisdiction or has otherwise breached or
                            is likely to breach the Agreement.
                          </p>
                          <h1 className="mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            VOID WHERE PROHIBITED OR RESTRICTED BY LAW.
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            If you open an Account and/or participate in any
                            Game offered on the Platform while located in an
                            Excluded Jurisdiction, you will be in violation of
                            the law of such jurisdiction and these Terms of
                            Service and will be subject to having your Account
                            suspended or terminated, and you will NOT BE
                            ELIGIBLE to claim any Prizes won.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>11.</span>INTELLECTUAL PROPERTY
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>11.0.</span>The computer software, the
                            computer graphics, the Platform and the user
                            interface that we make available to you is owned by,
                            or licensed to, PlayBrainz or its associates and
                            protected by copyright laws. You may only use the
                            software for your own personal, recreational uses in
                            accordance with all rules, terms and conditions we
                            have established and in accordance with all
                            applicable laws, rules and regulations.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>11.1.</span>You acknowledge that PlayBrainz is
                            the proprietor or authorised licensee of all
                            intellectual property in relation to any Content.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>11.2.</span>Your use of the Games and Platform
                            does not provide you with any intellectual property
                            rights in the Content, Games or Platform.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>11.3.</span>You grant Us, and represent and
                            warrant that you have the right to grant us, an
                            irrevocable, perpetual, worldwide, non-exclusive,
                            royalty-free licence to use in whatever way we see
                            fit, any information, images, videos, comments,
                            messages, music or profiles you publish or upload to
                            any website or social media page controlled and
                            operated by PlayBrainz.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>11.4.</span>You must not reproduce or modify
                            the Content in any way, including by removing any
                            copyright or trademark notice.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>11.5.</span>All trademarks and logos displayed
                            in the Games and Platform are the property of their
                            respective owners and are protected by applicable
                            trademark and copyright laws.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>12.</span>THIRD PARTY WEBSITES AND LINKS
                          </h1>

                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.0.</span>You acknowledge and agree that
                            PlayBrainz:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.0.0.</span>Is not responsible for Third
                            Party Websites; and
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.0.1.</span>Makes no guarantee as to the
                            content, functionality, or accuracy of any Third
                            Party Website.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.1.</span>You further acknowledge that some
                            Third Party Websites may be fraudulent in nature,
                            offering rewards which the operators of those
                            websites are not authorised to provide, in an effort
                            to induce you to reveal personal information
                            (including passwords, account information and credit
                            card details). You agree that PlayBrainz is not
                            responsible for any actions you take at the request
                            or direction of these, or any other Third Party
                            Websites.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.2.</span>Third Party Websites are subject
                            to the terms and conditions outlined by that third
                            party.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.3.</span>Any links to Third Party Websites
                            do not:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.3.0.</span>Indicate a relationship between
                            PlayBrainz and the third party; or
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.3.1.</span>Indicate any endorsement or
                            sponsorship by PlayBrainz of the Third Party
                            Website, or the goods or services it provides,
                            unless specifically indicated by PlayBrainz.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.4.</span>Where a website controlled and
                            operated by PlayBrainz contains links to various
                            social networking sites, such as Facebook®,
                            Instagram®, Discord® and Twitter®, you acknowledge
                            and agree that:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.4.0.</span>Any comments or content that you
                            post on such social networking sites are subject to
                            the terms and conditions of that particular social
                            networking site;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.4.1.</span>You will not post any comments
                            that are false, misleading or deceptive or
                            defamatory to us, our employees, agents, officers or
                            other players; and
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>12.4.2.</span>We are not responsible or liable
                            for any comments or content that you or others post
                            on social networking sites.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>13.</span>DISRUPTIONS AND CHANGE
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.0.</span>No warranties
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            The Platform is provided on an “as is” basis and to
                            the fullest extent permitted by law, we make no
                            warranty or representation, whether express or
                            implied, in relation to the satisfactory quality,
                            fitness for purpose, completeness or accuracy of the
                            Platform (including the Games and Content).
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.1.</span>Malfunctions
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.1.</span>PlayBrainz is not liable for any
                            downtime, server disruptions, lagging, or any
                            technical or political disturbance to Game play, nor
                            attempts by you to Participate by methods, means or
                            ways not intended by us.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.1.1.</span>PlayBrainz accepts no liability
                            for any damages or losses which are deemed or
                            alleged to have arisen out of or in connection with
                            any Platform or its content including, without
                            limitation, delays or interruptions in operation or
                            transmission, loss or corruption of data,
                            communication or lines failure, any person’s misuse
                            of a Platform or its content or any errors or
                            omissions in content.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.1.2.</span>In the event of a Platform
                            system malfunction all Game play on that Platform is
                            void.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.1.3.</span>In the event a Game is started
                            but fails to conclude because of a failure of the
                            system, PlayBrainz will use commercially reasonable
                            methods to reinstate the amount of funds played in
                            the Game to you by crediting it to your Customer
                            Account. PlayBrainz reserves the right to alter
                            Player balances and account details to correct such
                            mistakes.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.1.4.</span>PlayBrainz reserves the right to
                            remove any part of the Games from the Platform at
                            any time. Any part of the Games that indicate
                            incorrect behaviour affecting game data, balances,
                            that may be due to misconfiguration or a bug, will
                            be cancelled and removed from the Platform. Player
                            balances and account details may be altered by
                            PlayBrainz in such cases in order to correct any
                            mistake.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.1.4.</span>PlayBrainz reserves the right to
                            suspend, modify, remove or add Content to the
                            Platform at its sole discretion with immediate
                            effect and without notice to you. We will not be
                            liable to you for any loss suffered as a result of
                            any changes made or for any modification or
                            suspension of or discontinuance of the Platform
                            (including any game thereon) and you will have no
                            claims against PlayBrainz in such regard.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.2.</span>Service Suspension
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            We may temporarily suspend the whole or any part of
                            the Platform for any reason at our sole discretion.
                            We may, but will not be obliged to, give you notice
                            of such suspension. We will restore the Platform, as
                            soon as is practicable in our sole discretion, after
                            such temporary suspension.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>13.3.</span>Changes to Jurisdiction Regulation
                            PlayBrainz monitors legal changes taking place
                            across the world. In the event of any proposed legal
                            change in any region, we reserve the right to
                            immediately suspend all access to the Website for
                            any user playing from where the proposed changes are
                            occurring. In the event of such a change, all funds
                            shall be void with no financial compensation
                            offered.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>14.</span>VIRUSES
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>14.0.</span>Although we take all reasonable
                            measures to ensure that the Platform is free from
                            computer viruses we cannot and do not guarantee that
                            the Platform is free of such problems. It is your
                            responsibility to protect your systems and have in
                            place the ability to reinstall any data or programs
                            lost due to a virus.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>15.</span>PRIVACY POLICY
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>15.0.</span>PlayBrainz is committed to
                            protecting and respecting your privacy and complying
                            with all applicable data protection and privacy
                            laws.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>15.1.</span>Our Privacy Policy is inseparably
                            linked to these Terms and Conditions and its
                            acceptance is a prerequisite to account
                            registration.
                          </p>

                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>15.2.</span>If you have given consent when
                            registering to receive marketing communications from
                            PlayBrainz in respect of its offerings by way of
                            email, post, SMS and telephone notifications, you
                            may unsubscribe at any time by contacting Customer
                            Support via Discord-Arena and opening a ticket,
                            alternatively you may use the contact preferences
                            facility available online.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Initial Resolution: If unsatisfied with our Support
                            Team&apos;s resolution, you may escalate your
                            complaint.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Operations Team Escalation:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Your complaint will be reviewed by the Operations
                            Team upon request. If their response is
                            unsatisfactory, further escalation is available.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Senior Management Escalation: The final escalation
                            level is a review by Senior Management. Their
                            decision on the complaint is final.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>16.</span>USE OF LIVE CHAT SERVICES
                          </h1>

                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.0.</span>We may provide you with a Live
                            Chat service to talk to our Customer Support
                            representatives or to talk to other Players. This
                            may include use of our Facebook® wall. It is your
                            responsibility to use these services only for their
                            intended purposes. You are not permitted to use our
                            Live Chat services for illegal purposes.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.1.</span>Be careful what you post on any
                            Live Chat service. We review and moderate chats and
                            keep a log and record of statements. Your use of the
                            Live Chat service should be for recreational and
                            social purposes only.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.2.</span>Spamming on Live Chat is
                            prohibited. You are prohibited from intimidating,
                            harassing, or abusing other Players or PlayBrainz
                            employees and representatives.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.3.</span>You will not use any Live Chat
                            service to engage in any form of harassment or
                            offensive behaviour, including but not limited to,
                            threatening, derogatory, abusive or defamatory
                            statements, or racist, sexually explicit,
                            pornographic, obscene, hate speech, or offensive
                            language.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.4.</span>You will not use any Live Chat
                            service to infringe the privacy rights, property
                            rights, or any other rights of any person.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.5.</span>You will not submit any kind of
                            material or information on any Live Chat service
                            that is fraudulent or otherwise unlawful or violates
                            any law.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.6.</span>You will not use any Live Chat
                            service to distribute, promote or otherwise publish
                            any material containing any solicitation for funds,
                            advertising or solicitation for goods or services of
                            other forums.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.7.</span>You will not use any Live Chat
                            service to distribute, promote or otherwise publish
                            any kind of malicious code or do anything else that
                            might cause harm to the Platform or to other
                            Player’s systems in any way.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.8.</span>We reserve the right to monitor
                            anything and everything submitted by you to any Live
                            Chat service to ensure that it conforms to content
                            guidelines that are monitored by us and subject to
                            change from time to time.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.9.</span>If you breach any of the
                            provisions relating to a Live Chat service, we may
                            ban you from using that Live Chat service or all
                            Live Chat services and/or suspend or deactivate your
                            Customer Account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.10.</span>We reserve the right to remove
                            the Live Chat service from any Platform if abused.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.11.</span>We will not be liable if damage
                            arises out of the Live Chat service.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.12.</span>You agree to indemnify us against
                            any damage arising out of your illegal, unlawful or
                            inappropriate conduct or arising out of violation of
                            the provisions in this clause or any other rules on
                            the Platform applying to the Live Chat service.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.12.</span>You will not collude in any way
                            through the Live Chat service. Players are
                            encouraged to report any suspicious behaviour to
                            Customer Support via email.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>16.12.</span>You will not collude in any way
                            through the Live Chat service. Players are
                            encouraged to report any suspicious behaviour to
                            Customer Support via email.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>17.</span>COMPLAINTS AND CUSTOMER SUPPORT
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.0.</span>If you would like to contact our
                            Customer Support department or have a complaint
                            regarding our Platform (including any game), you may
                            contact us via Discord-Arena and open a ticket. If
                            your ticket is a complaint, please include the word
                            &quot;complaint&quot; at the beginning of the
                            &quot;How can we help you?&quot; section. Any
                            tickets which do not include this will NOT be
                            treated as an official complaint.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.1.</span>TO PROTECT YOUR PRIVACY, ANY EMAIL
                            COMMUNICATIONS BETWEEN YOU AND PLAYBRAINZ SHOULD BE
                            CARRIED OUT USING THE EMAIL ADDRESS THAT YOU HAVE
                            REGISTERED AGAINST YOUR CUSTOMER ACCOUNT HELD WITH
                            PLAYBRAINZ. FAILURE TO DO SO MAY RESULT IN OUR
                            RESPONSE BEING DELAYED.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.2.</span>The following information must be
                            included in any written communication with
                            PlayBrainz (including a complaint):
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.2.0.</span>your username;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.2.1.</span>your first and last name, as
                            registered on your Customer Account;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.2.2.</span>a detailed explanation of the
                            complaint/claim; and
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.2.3.</span>Any specific dates and times
                            associated with the complaint/claim (if applicable).
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.3.</span>Failure to submit a written
                            communication with the information outlined above
                            may result in a delay in our ability to identify and
                            respond to your complaint/claim in a timely manner.
                            The Customer Support department will investigate
                            official complaints immediately. The Customer
                            Support department will endeavour to respond to any
                            official complaints within 5 calendar days of
                            lodgement. The receipt of any compliants will be
                            clearly acknowledged by the team. Complaint will be
                            dealt with as soon as possible, but no later than
                            within eight weeks.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.4.</span>In some circumstances, the
                            Customer Support department will require up to 10
                            days to respond to a complaint. In this case, the
                            player will be informed of the delay within 3 days
                            of lodging the complaint.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>17.5.</span>You will be informed in writing
                            and duly substantiated of the findings following an
                            official complaint and of the conclusions will be
                            attached thereto.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>18.</span>DEACTIVATION / SUSPENSION OF ACCOUNT
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.0.</span>PlayBrainz hereby reserves the
                            right to deactivate or suspend your Customer Account
                            for any reason whatsoever at any time without
                            notifying you.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.</span>Without limiting clause 19.1., we
                            hereby reserve the right, at our sole discretion, to
                            deactivate or suspend your Customer Account
                            (notwithstanding any other provision contained in
                            these Terms and Conditions) where we have reason to
                            believe that you have engaged or are likely to
                            engage in any of the following activities:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.0.</span>You breached, or assisted
                            another party to breach, any provision of these
                            Terms and Conditions, or we have a reasonable ground
                            to suspect such breach;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.1.</span>You have more than one Customer
                            Account, including any Inactive Account, on any
                            Platform;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.2.</span>The details registered on your
                            Customer Account does not match the details on the
                            financial/bank account and/or the credit/debit
                            card(s) used to make purchases on the said Customer
                            Account;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.3.</span>Your communication with us
                            consists of harassment or offensive behaviour,
                            including (but not limited to) threatening,
                            derogatory, abusive or defamatory statements, or
                            racist, sexually explicit, pornographic, obscene or
                            offensive language;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.4.</span>Your Customer Account is deemed
                            to be an Inactive Account;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.5.</span>You become bankrupt;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.6.</span>You provide incorrect or
                            misleading information while registering a Customer
                            Account;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.7.</span>Your identity cannot be
                            verified;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.8.</span>You attempt to use your Customer
                            Account through a VPN, proxy or similar service that
                            masks or manipulates the identification of your real
                            location, or by otherwise providing false or
                            misleading information regarding your citizenship,
                            location or place of residence, or by playing Games
                            using the Platform through a third party or on
                            behalf of a third party;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.9.</span>You are not over 18 years of
                            age;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.10.</span>You are located in a
                            jurisdiction where Participation is illegal;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.11.</span>You have allowed or permitted
                            (whether intentionally or unintentionally) someone
                            else to Participate using your Customer Account;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.12.</span>You have played in tandem with
                            other Player(s) as part of a club, group, etc., or
                            played the Games in a coordinated manner with other
                            Player(s) involving the same (or materially the
                            same) selections;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.13.</span>You have failed our due
                            diligence procedures, or are found to be colluding,
                            cheating, money laundering or undertaking any kind
                            of fraudulent activity; or
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.14.</span>It is determined by PlayBrainz
                            that you have employed or made use of a system
                            (including machines, computers, software or other
                            automated systems such as bots) designed
                            specifically to gain an unfair advantage.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.15.</span>Where PlayBrainz determines
                            that it is under a legal obligation or to protect
                            PlayBrainz, you, other players, or other third
                            parties.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.16.</span>If PlayBrainz deactivates or
                            suspends your Customer Account for any of the
                            reasons referred to in clause 16.1. above, you will
                            be liable for any and all claims, losses,
                            liabilities, damages, costs and expenses incurred or
                            suffered by PlayBrainz (together “Claims”) arising
                            therefrom and you will indemnify and hold PlayBrainz
                            harmless on demand for such Claims.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.17.</span>If we have reasonable grounds
                            to believe that you have participated in any of the
                            activities set out in clause 16.1. above then we
                            reserve the right to withhold all or part of the
                            balance and/or recover from your Customer Account
                            any funds that are attributable to any of the
                            activities contemplated in clause 16.1. In such
                            circumstances, your details may be passed on to any
                            applicable regulatory authority, regulatory body or
                            any other relevant external third parties.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.18.</span>If your Customer Account is
                            deactivated as a result of closure of the Platform
                            or similar event, any temporary licences granted to
                            You shall immediately be terminated and no refunds
                            for purchases shall be due.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>18.1.19.</span>The rights set out in clause
                            16. are without prejudice to any other rights that
                            we may have against you under these Terms and
                            Conditions or otherwise.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>19.</span>INDEMNITY AND LIMITATION OF
                            LIABILITY
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.0.</span>Indemnity
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            You hereby agree to indemnify and hold harmless us,
                            our directors, officers, employees, shareholders,
                            agents and affiliates, our ultimate parent and
                            parent companies and any of our subsidiaries against
                            any and all costs, expenses, liabilities and damages
                            (whether direct, indirect, special, consequential,
                            exemplary or punitive or other, including attorney’s
                            fees arising from any participation by you,
                            including without limitation:
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.0.0.</span>Accessing or using the platform;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.0.1.</span>Re-use of any content at, or
                            obtained from, the platforms or any other source
                            whatsoever;
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.0.2.</span>Facilitating or making a payment
                            into your customer account;d. Playing the games
                            through any delivery mechanism offered; and
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.0.3.</span>Acceptance and use of any prize.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.1.</span>Limitation of Liability
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.1.0.</span>To the maximum extent permitted
                            by applicable law, under no circumstances whatever
                            will we or our affiliates, subsidiaries, partners,
                            officers, directors, employees, shareholders,
                            agents, licensors, subcontractors and suppliers, be
                            responsible or liable to you or to any other entity,
                            even if advised of the possibility of such damages,
                            under any legal theory, whether contract, tort or
                            otherwise, for any indirect, incidental,
                            consequential, special, exemplary, or punitive
                            damages, including any lost profits and lost
                            business opportunities, business interruption, lost
                            revenue, income, goodwill, use of data or other
                            intangible losses, in each case that result from or
                            relate in any manner to your participation or any
                            other act or omission by us.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.1.1.</span>To the fullest extent permitted
                            by applicable law, under no circumstances will we,
                            our affiliates, subsidiaries, partners, officers,
                            directors, employees, shareholders, agents,
                            licensors, subcontractors or suppliers, be liable to
                            you for more than the amount you have paid us in the
                            thirty (30) days immediately preceding the date on
                            which you first assert any such claim. You
                            acknowledge and agree that if you have not paid us
                            any amounts in the thirty (30) days immediately
                            preceding the date on which you first assert any
                            such claim, your sole and exclusive remedy for any
                            dispute with us is to stop using the platform and to
                            close your Customer Account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.1.2.</span>You recognize and agree that the
                            warranty disclaimers in clauses 13. and 13.2., and
                            the indemnities and limitations of liability in this
                            clause 19., are material and bargained-for bases of
                            these terms and that they have been taken into
                            account and reflected in the decision by you to
                            enter into these terms and conditions. Depending on
                            where you reside and use the Platform, some of the
                            limitations contained in this clause 19 may not be
                            permissible. In such case, they will not apply to
                            you, solely to the extent that they are prohibited.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.2.</span>Negligence and Wilful Misconduct
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Nothing in these Terms and Conditions will operate
                            so as to exclude any liability of PlayBrainz for
                            death or personal physical injury that is directly
                            and proximately caused by PlayBrainz’s gross
                            negligence or wilful misconduct.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>19.3.</span>Survival of ObligationsClause 19.
                            survives the termination of these Terms and
                            Conditions for any reason.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>20.</span>PLAYBRAINZ NOT A FINANCIAL
                            INSTITUTION
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>20.0.</span>Interest
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            You will not receive any interest on your balance
                            and you will not treat PlayBrainz as a financial
                            institution.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>20.0.</span>You will not receive any interest
                            on your balance and you will not treat PlayBrainz as
                            a financial institution.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>20.1.</span>No legal or tax advice
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            PlayBrainz does not provide advice regarding tax
                            and/or legal matters. Players who wish to obtain
                            advice regarding tax and legal matters are advised
                            to contact appropriate advisors. Players are
                            responsible for any and all tax liability from the
                            use of the Website.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>21.</span>DISPUTE RESOLUTION
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Please read this clause 21. carefully as it requires
                            you to escalate certain disputes and claims on an
                            individual basis and limits the manner in which you
                            can seek relief from PlayBrainz. 
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>21.0.</span>By agreeing to these Terms and
                            Conditions, you agree that any and all past, present
                            and future disputes, claims or causes of action
                            between you and PlayBrainz which arise out of, or
                            are related to, these Terms and Conditions, the
                            formation of these Terms and Conditions, the
                            validity or scope of these Terms and Conditions,
                            including this clause 21., your Participation or
                            other access to or use of the Platform, or any other
                            dispute between You and PlayBrainz, and whether
                            arising prior to or after your agreement to this
                            clause 21. (Dispute Resolution) (collectively,
                            “Disputes”), will be governed by the procedure set
                            out below.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>21.1.</span>Dispute Resolution
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>21.1.0.</span>We want to address any concerns
                            you may have without needing a formal legal case.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>21.1.1.</span>Before filing a claim against
                            PlayBrainz, you agree to try to resolve any
                            complaint in accordance with clause 15.. If your
                            complaint is not resolved after exhausting the
                            internal complaints process outlined in clause 15.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>21.1.2.</span>PlayBrainz agrees that it will
                            take all reasonable efforts to contact you and
                            resolve any claim it may possess prior to taking any
                            formal action.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>22.</span>REFERRALS
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.1.</span>A referral qualifies if registered
                            through the custom URL associated with your
                            PlayBrainz account and if the friend has
                            participated in at least 1 Competition.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.2.</span>You will be rewarded with 2.5% of
                            your referral’s entries (minus gas) on paid
                            Competition entries only.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.3.</span>The minimum eligible withdrawal
                            amount of ETH accumulated from the Refer a Friend
                            program is 0.1 ETH.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.4.</span>Withdrawals can be requested on
                            the withdrawals page (coming soon)
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.5.</span>You only have 1 active Referral
                            URL associated with your account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.6.</span>It is not PlayBrainz’s
                            responsibility if the Referral URL was not used
                            correctly.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.7.</span>PlayBrainz will not retroactively
                            assign referred status to any accounts.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.8.</span>Any referrals associated with your
                            PlayBrainz account via IP address or wallet transfer
                            do not qualify for Referral status.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.9.</span>PlayBrainz reserves the right to
                            refuse Referral payouts if it is discovered that
                            attempts have been made to circumvent the rules,
                            this includes but is not limited to the purchase of
                            ad space, or sponsorship using your unique referral
                            URL.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.10.</span>PlayBrainz reserves the right to
                            change or withdraw the promotion at any time.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.11.</span>PlayBrainz’s general terms and
                            conditions apply.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>22.11.</span>PlayBrainz’s general terms and
                            conditions apply.
                          </p>
                          <h1 className="flex flex-nowrap gap-1.5  mt-8 mb-5 text-lg font-normal uppercase font-inter">
                            <span>23.</span>OTHER
                          </h1>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.0.</span>Entire Agreement
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            These Terms and Conditions constitute the entire
                            agreement between You and Us with respect to your
                            Participation and, save in the case of fraud,
                            supersede all prior or contemporaneous
                            communications and proposals, whether electronic,
                            oral or written, between You and Us with respect to
                            your Participation.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.1.</span>Amendments
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.1.0.</span>PlayBrainz hereby reserves the
                            right to amend these Terms and Conditions, or to
                            implement or amend any procedures, at any time. Any
                            amendments will be published on the Platform and
                            such changes will be binding and effective
                            immediately.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.1.1.</span>Whenever we amend these Terms
                            and Conditions in a way that would limit your
                            current rights or which may be to your detriment, we
                            will notify you upon your next visit to the Platform
                            and you will be required to re-confirm your
                            acceptance prior to playing any Games. If you do not
                            agree to the amended Terms and Conditions, you must
                            stop using the Platform.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.2.</span>Tax
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            You are solely responsible for any taxes applicable
                            from your Participation.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.3.</span>Force Majeure
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            PlayBrainz will not be liable or responsible for any
                            failure to perform, or delay in performance of, any
                            of our obligations under these Terms and Conditions
                            that are caused by events outside of our reasonable
                            control.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.4.</span>No agency
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            Nothing in these Terms and Conditions will be
                            construed as creating any agency, partnership, trust
                            arrangement, fiduciary relationship or any other
                            form of joint enterprise between You and Us.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.5.</span>Severability
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            If any of the Terms and Conditions are determined by
                            any competent authority to be invalid, unlawful or
                            unenforceable to any extent, such term, condition or
                            provision will, to that extent, be severed from
                            these Terms and Conditions. All remaining terms,
                            conditions and provisions will continue to be valid
                            to the fullest extent permitted by law. In such
                            cases, the part deemed invalid or unenforceable will
                            be amended in a manner consistent with the
                            applicable law to reflect, as closely as possible,
                            PlayBrainz’s original intent.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.6.</span>Explanation of Terms and
                            Conditions
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.6.0.</span>We consider these Terms and
                            Conditions to be open and fair. If you need any
                            explanation regarding these Terms and Conditions or
                            any other part of our Platform contact Customer
                            Support via Discord-Arena and open a ticket.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.6.1.</span>The Terms and Conditions prevail
                            over any communication via email or chat.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.6.2.</span>All correspondence, telephone or
                            video conferences, and live chats between You and Us
                            may be recorded and retained and you consent to such
                            recording and retention.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.7.</span>Assignment These Terms and
                            Conditions are personal to You, and are not
                            assignable, transferable or sub-licensable by You
                            except with Our prior written consent. We reserve
                            the right to assign, transfer or delegate any of Our
                            rights and obligations hereunder to any third party
                            without notice to You.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.8.</span>Business Transfers In the event of
                            a change of control, merger, acquisition, or sale of
                            assets of PlayBrainz, your Customer Account and
                            associated data may be part of the assets
                            transferred to the purchaser or acquiring party. In
                            such an event, we will provide You with notice via
                            email or via Our Platform explaining your options
                            with regard to the transfer of your Customer
                            Account.
                          </p>
                          <p className="flex flex-nowrap gap-1.5 text-base font-inter font-normal mb-4">
                            <span>23.9.</span>LanguageThese Terms and Conditions
                            may be published in several languages for
                            information purposes and ease of access by players
                            but will all reflect the same principles. It is only
                            the English version that is the legal basis of the
                            relationship between You and Us and in case of any
                            discrepancy between a non-English version and the
                            English version of these Terms and Conditions, the
                            English version will prevail.
                          </p>
                        </ul>
                        <p className="w-full mb-3 text-base font-normal text-center mt-14 font-inter">
                          Copyright © 2024 PLAYBRAINZ
                        </p>
                        <p className="w-full text-base font-normal text-center font-inter">
                          Persons under the age of 18 are NOT permitted to
                          create accounts and/or participate in the games.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="bg-primary-400 pl-4 pr-[36px] py-4 w-full mt-4 rounded-[10px]">
                        <div className="relative flex items-center ">
                          <CustomCheckbox
                            checked={checkedOne}
                            setChecked={setCheckedOne}
                          />
                          <div className="ml-[16px]">
                            <p className="font-normal font-inter text-start">
                              You agree to our Terms of Use and License Terms.
                              In our Privacy Policy, we explain how we process
                              your personal data and what rights you have.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pt-8 pb-[14px]" onClick={handleContinue}>
                        <Button
                          disabled={!checkedOne}
                          variant={"outlined"}
                          size="text-lg"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConditionsModal;
