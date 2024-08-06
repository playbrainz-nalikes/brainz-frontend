import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/images/Brainz-logo.png"
import { Button } from "./Button"
import { CustomCheckbox } from "./Checkbox"

const ConditionsModal = ({ isOpen, onAccept }) => {
  const [checkedOne, setCheckedOne] = useState(false)

  const handleContinue = (e) => {
    if (checkedOne) {
      onAccept()
    }
  }

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
          <div className="bg-black/25 fixed inset-0 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="shadow-xl w-full max-w-[1176px] transform overflow-hidden rounded-[20px] bg-primary-350 text-left text-center align-middle text-white transition-all md:p-[0]">
                <div className="h-[580px] overflow-y-scroll px-4 py-4 scrollbar scrollbar-thumb-[#104061] scrollbar-thumb-rounded-full scrollbar-w-[6px] md:h-[682px] md:px-[50px]">
                  <div className="flex flex-col items-center justify-center pt-[0] md:pt-7">
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
                    <h1 className="font font-basement text-2xl font-bold md:text-3xl">
                      Terms & Conditions
                    </h1>

                    {/* <p className="font-inter text-base font-normal text-grey-100">
                      You agree to our Terms of Use and License Terms.
                    </p> */}
                    <p className="font-inter text-base font-normal text-grey-100">
                      Updated July 24, 2024
                    </p>
                    <div className="mt-6 rounded-[10px] border border-[#51626e] py-3 pl-4 pr-[6px] text-start text-grey-100">
                      <div className="h-64 overflow-y-scroll pr-[14px] scrollbar scrollbar-thumb-[#104061] scrollbar-thumb-rounded-full scrollbar-w-[6px] scrollbar-h-[16px]">
                        <p className="mb-4 font-inter text-base font-normal">
                          These Terms & Conditions are entered into by and
                          between PlayBrainz, LLC, a Wyoming limited liability
                          company (“PlayBrainz,” “we” or “our”) and you (“you”
                          or “your”). You and PlayBrainz may also be referred to
                          individually as a “Party” and, collectively, as the
                          “Parties.”
                        </p>
                        <p className="mb-4 text-center">
                          IT IS ESSENTIAL THAT YOU READ THESE TERMS AND
                          CONDITIONS AS THEY DESCRIBE AND, IN SOME CASES, LIMIT
                          YOUR RIGHTS. YOUR USE OF THIS SITE AND THE GAME
                          “BRAINZ” INDICATES YOUR ACCEPTANCE OF THIS AGREEMENT.
                        </p>
                        <p className="mb-4 font-inter text-base font-normal">
                          PlayBrainz owns and operates the skill-based game
                          “Brainz” (the “Game”) which can be found at
                          “PlayBrainz.com” and such other related online
                          websites and applications as we may create and with
                          which we may partner (collectively, the “Site”) to
                          persons who purchase tickets to play the Game (each, a
                          “Player” and, collectively, “Players”).
                        </p>
                        <p className="mb-6 font-inter text-base font-normal">
                          These Terms & Conditions (“T&Cs”) set out the terms
                          and conditions on which we make the Site and, should
                          you choose to become a Player, the Game available to
                          you (collectively with the documents referred to
                          herein, this “Agreement”).
                        </p>
                        <p className="mb-6 font-inter text-base font-bold">
                          Your use of the Site (including playing the Game)
                          indicates that you accept the T&Cs. If you do not
                          accept the T&Cs, do not use the Site or play the Game.
                        </p>
                        <p className="mb-6 font-inter text-base font-normal">
                          We may revise this Agreement at any time by updating
                          this posting on the Site. You should check the Site
                          from time to time to review the current version of
                          these T&Cs because they are binding on you. Certain
                          provisions in this Agreement may be superseded by
                          expressly designated legal notices located on
                          particular pages of the Site. The Site and the Game
                          shall be collectively referred to herein as the
                          “Services.”
                        </p>
                        <p className="mb-6 font-inter text-base font-normal">
                          Any rights not expressly granted in these terms are
                          reserved.
                        </p>

                        <h1 className="font mb-3 text-center font-basement text-2xl font-bold md:text-3xl">
                          TERMS & CONDITIONS
                        </h1>

                        <ol
                          role="list"
                          class="custom-list marker:text-sky-400 pl-5"
                        >
                          <li className="mb-2 font-bold uppercase">
                            DEFINITIONS
                          </li>
                          <p className="my-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            In addition to such definitions as are included in
                            this Agreement, the following terms shall have the
                            meanings provided herein.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            “Affiliate” of a Party means (1) any corporation,
                            partnership, trust or other entity controlling,
                            controlled by or under common control with such
                            Party; (2) any executive officer, director, trustee
                            or general partner of any Party described in (1)
                            above; or (3) any spouse, lineal ancestor, lineal
                            descendant or member of the household of such Party.
                            For purposes of this definition, the term “control”
                            shall mean the control or ownership of fifty percent
                            (50%) or more of the voting securities in the Party
                            referred to.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            “Cause” means a violation of these T&Cs and/or, in
                            the sole discretion of PlayBrainz, a past or
                            imminent violation of any applicable law, rule or
                            regulation.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            “Documentation” means any websites, manuals, videos,
                            documentation, emails and other supporting materials
                            related to the Services including Player Resources.
                            Documentation is considered part of the Game.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            “Personal Information” means the contents of your
                            profile including names and contact information.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            “Player Resources” means videos, publications,
                            documentation, websites, apps or other benefits that
                            are available to Players.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            “USDT” means a type of cryptocurrency that is pegged
                            to the United States dollar.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            “Your Data” means all Personal Information input or
                            uploaded to the Site by you.
                          </p>
                          <li className="mb-2 font-bold uppercase">
                            AGREEMENT TO BE BOUND
                          </li>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            You agree to be bound by this Agreement by your use
                            of the Services. If you do not agree with or do not
                            wish to be bound by any provision hereof, cease
                            using the Services immediately.
                          </p>
                          <li className="mb-2 font-bold uppercase">
                            THE SERVICES, IN GENERAL
                          </li>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 3.1. </span>The Services are not available to
                            persons under 18 years of age.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 3.2. </span>Responsibility for the security
                            of any passwords issued rests solely with you and
                            you are responsible for all actions taken with your
                            username and password. You specifically agree that
                            PlayBrainz is NOT responsible for and shall not be
                            liable for any unauthorized access to your account
                            and information due to unauthorized access to your
                            username and password.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 3.3. </span>The Services include the
                            Documentation and such additional services and
                            support as PlayBrainz may, in its sole and absolute
                            discretion, provide.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 3.4. </span>PlayBrainz may, from time to
                            time, make modifications and/or upgrades to its
                            software and systems; though PlayBrainz is not
                            obligated to do so. Such modifications and/or
                            upgrades may alter, limit or eliminate certain
                            features of the Services.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 3.5. </span>We may, in our sole discretion,
                            restrict or terminate your access to and/or use of
                            the Game or terminate this Agreement in its entirety
                            with you without prior notice.
                          </p>

                          <li className="mb-2 font-bold uppercase">
                            YOUR USE OF THE SERVICES
                          </li>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 4.1. </span>You may play the Game by
                            purchasing tickets with USDT. You may purchase
                            tickets on the Site. Once purchased, tickets are
                            non-refundable.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 4.2. </span>All prizes shall be paid
                            exclusively in USDT or other cryptocurrency of our
                            choice. The number of coins to be claimed will be
                            the same as that on the date the prize is awarded
                            regardless of any change in the value of such coins
                            between the date the prize is won and the date the
                            prize is claimed. Awards may be claimed and received
                            directly in your wallet.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>4.3. </span>You will:
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(a) </span>be responsible for your compliance
                            with this Agreement;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(b) </span>use reasonable efforts to prevent
                            unauthorized access to the Services and Player
                            Resources, and notify PlayBrainz promptly of any
                            such unauthorized access or use;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(c) </span>use the Services only in accordance
                            with the Documentation and all applicable laws and
                            regulations; and
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(d) </span>be solely and exclusively
                            responsible for the security of the usernames and
                            passwords issued to you, and PlayBrainz shall be
                            entitled to rely on the authority of any person
                            using the username and password in providing
                            information to and taking all actions that the
                            authorized user would be entitled to take or direct.
                            You expressly agree that PlayBrainz shall not be
                            liable for any loss, injury or damage that may
                            result from the aforementioned reliance.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>4.4. </span>You will not, directly or
                            indirectly:
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(a) </span>make the Services and/or the Player
                            Resources available to or use the Services and/or
                            the Player Resources for the benefit of anyone other
                            than yourself;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(b) </span>sell, resell, license, sublicense,
                            distribute, rent and/or lease the Services and/or
                            the Player Resources, or include the Services and/or
                            the Player Resources in a service bureau or
                            outsourcing offering;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(c) </span>use the Services to store or
                            transmit malicious code or any illegal matter;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(d) </span>interfere with or disrupt the
                            integrity or performance of the Services and/or any
                            data contained therein;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(e) </span>attempt to gain unauthorized access
                            to the Services or Player Resources or any related
                            systems or networks;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(f) </span>hack or attempt to hack the
                            Services;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(g) </span>upload content that is
                            inappropriate, as determined by PlayBrainz in our
                            sole and absolute discretion, onto our servers;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(h) </span>permit direct or indirect access to
                            or use of the Services or the Player Resources in a
                            way that circumvents a contractual usage limit, if
                            any;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(i) </span>copy the Game or the Player
                            Resources or any part, feature, function or user
                            interface thereof;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(j) </span>frame or mirror any part of the
                            Game or the Player Resources other than as permitted
                            in the Documentation;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(k) </span>access, reproduce, record or copy
                            the Services and/or the Player Resources in order to
                            build a competitive product or service; and/or
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(l) </span>reverse engineer, disassemble or
                            decompile the Game or the Player Resources.
                          </p>
                          <li className="mb-2 font-bold uppercase">ACCESS</li>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 5.1 </span>While we endeavor to ensure that
                            the Services are available 24 hours a day, we shall
                            not be liable if, for any reason, the Services are
                            unavailable at any time or for any period.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 5.2 </span>Access to the Services may be
                            suspended temporarily and without notice in the case
                            of a system failure, maintenance or repair or for
                            any reasons beyond our control.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 5.3 </span>Any information about you that we
                            process will be collected and processed in
                            accordance with our privacy policy
                            (https://www.PlayBrainz.com/privacy-policy/). By
                            using the Services, you consent to such collection
                            and processing.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 5.4 </span>You may not misuse the Services
                            (including, without limitation, by hacking).
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 5.5 </span>We will cooperate fully with any
                            law enforcement authorities or court order
                            requesting or directing us to disclose the identity
                            of or locate anyone posting any material in breach
                            of this Agreement.
                          </p>

                          <li className="mb-2 font-bold uppercase">TITLE</li>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 6.1 </span>PlayBrainz owns or licenses all
                            rights, title and interest in and to the Services,
                            the Player Resources, Technology as well as any
                            trademarks, copyrights (including, without
                            limitation, photographs and graphical images), trade
                            secrets and inventions, whether or not any of the
                            foregoing are registered, and any ideas,
                            suggestions, proposals, research or test results
                            obtained through, from or as a result of your use of
                            the Services and/or feedback provided by you
                            regarding the Services (collectively, “PlayBrainz
                            Assets”). Your rights to the Services are limited to
                            the rights expressly granted to you in this
                            Agreement. PlayBrainz reserves all rights not
                            expressly granted in this Agreement. You agree that
                            you shall not attempt to claim, register or protect
                            any interest in or to the PlayBrainz Assets.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 6.2 </span>Without limiting the foregoing,
                            Technology included within or used in connection
                            with the Services shall at all times be the sole and
                            exclusive property of PlayBrainz.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 6.3 </span>Your use of the Services,
                            including purchase of tickets, does not transfer or
                            grant any rights in any PlayBrainz Assets. Player
                            expressly waives and disclaims any interest
                            whatsoever in the PlayBrainz Assets.
                          </p>

                          <li className="mb-2 font-bold uppercase">CONTENT</li>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 7.1 </span>
                            <div className="">
                              <p className="mb-4">
                                While we endeavor to ensure that the information
                                on the Site and/or Game is correct, we do not
                                warrant the accuracy or completeness of such
                                material. We may make changes to the material on
                                the Game at any time and without notice. The
                                material on the Site may be out of date, and we
                                make no commitment to update such material.
                              </p>
                              <p>
                                Notwithstanding anything to the contrary
                                contained herein, if the answer to any question
                                provided by the Game is incorrect and you do not
                                receive credit for a correct answer, upon your
                                proving the error, your sole remedy and our sole
                                obligation is to adjust your account to reflect
                                what would have been your holdings had the
                                question been handled correctly. Also, if you
                                receive credit for an incorrect answer, we
                                reserve the right to adjust your account to
                                reflect what would have been your holdings had
                                the question been handled correctly and you
                                waive any claims against us in such case.
                              </p>
                            </div>
                          </div>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 7.2 </span>THE CONTENTS OF THE SITE AND GAME
                            ARE PROVIDED “AS IS,” AND WE PROVIDE NO WARRANTIES
                            IN RESPECT OF SUCH CONTENTS. TO THE MAXIMUM EXTENT
                            PERMITTED BY LAW, PlayBrainz DISCLAIMS ALL
                            WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR
                            OTHERWISE, INCLUDING, WITHOUT LIMITATION, THE
                            IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                            PARTICULAR PURPOSE, NON-INFRINGEMENT AND THOSE
                            ARISING OUT OF COURSE OF DEALING, USAGE OR TRADE.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 7.3 </span>Links to third-party websites are
                            provided by us solely for your convenience. If you
                            use these links, you leave the Site. We have not
                            reviewed any of such third-party websites and do not
                            control and are not responsible for their content,
                            security or availability. We do not, therefore,
                            endorse or make any representations about them, any
                            material found on such sites or any consequences of
                            viewing or using such websites. If you decide to
                            access any of the third-party websites linked to the
                            Site, you do so entirely at your own risk and agree
                            that PlayBrainz shall not be liable for any loss,
                            injury and/or damages you may suffer and/or
                            experience as a result of accessing the third-party
                            website.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 7.4 </span>You are permitted to view, print
                            and download extracts from the Site for your own use
                            provided:
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(a) </span>no documents or related graphics on
                            the Site are modified in any way;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(b) </span>no graphics on the Site are used
                            separately from the corresponding text; and
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(c) </span>our copyright notices and this
                            permission notice appear in all copies.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 7.5 </span>Subject to the following, no part
                            of the Site and/or Game may be reproduced or stored
                            on any other website or included in any public or
                            private electronic retrieval system or service
                            without our prior written permission. If you would
                            like to link to the Site, you may do so provided:
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(a) </span>you do not replicate any page of
                            the Site;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(b) </span>you do not remove, distort or
                            otherwise alter the size or appearance of any logos
                            used by us on the Site;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(c) </span>you do not create a frame or any
                            other browser or border environment around the Site;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(d) </span>
                            you do not in any way imply that we are endorsing
                            any products or services other than our own;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(e) </span>you do not misrepresent your
                            relationship with us or present any other false
                            information about it;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(f) </span>you do not otherwise use any
                            trademarks owned by PlayBrainz (whether these are
                            registered or unregistered) which are displayed on
                            the Site without our express written permission;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(g) </span>you do not link from a website that
                            is not either owned by you or under your account
                            (e.g., your social media account); and
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(h) </span>your website does not contain
                            content that we, in our sole discretion, consider to
                            be distasteful, offensive or controversial, an
                            infringement of any intellectual property rights or
                            other rights of any other person or which does not
                            otherwise comply with all applicable laws and
                            regulations.
                          </p>

                          <li className="mb-2 font-bold uppercase">
                            DISCLAIMER
                          </li>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            To the maximum extent permitted by law, we hereby
                            disclaim and you hereby waive any claims against and
                            agree to not sue PlayBrainz, its Affiliates and
                            their respective owners, principals, officers,
                            employees, contractors, agents and vendors
                            (collectively, “PlayBrainz Parties”) based on,
                            relating to or arising from the use, inability to
                            use or results of the use of the Services, any
                            websites linked thereto and any materials posted
                            thereon including, without limitation any liability
                            for:
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(a) </span>excessive play by you and/or
                            excessive purchase of tickets;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(b) </span>subject to Section 7.01, there are
                            bugs, errors or inaccuracies in the Services or the
                            results produced by the Game;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(c) </span>loss of income or revenue;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(d) </span>loss of business;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(e) </span>loss of profits or contracts;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(f) </span>
                            loss of anticipated savings;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(g) </span>
                            loss of data;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(h) </span>loss of goodwill;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(i) </span>any unauthorized person uses your
                            username and/or password to access the Services with
                            any result, including making changes in
                            authorizations and/or loss of tickets or awards; the
                            Services are totally or partially inoperative or
                            inaccessible;
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(j) </span>the Services are totally or
                            partially inoperative or inaccessible;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(k) </span>use of the Services;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(l) </span>
                            viruses or other malicious software are transferred
                            to your computer or other device by using the
                            Services;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(m) </span>
                            third-party content, actions or inactions on or with
                            respect to the Services;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(n) </span>a suspension or other action taken
                            with respect to your account by us;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(o) </span>modification or deletion of certain
                            features from the Services;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(p) </span>deletion, corruption or destruction
                            of any of Your Data; and/or
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span>(q) </span>for any other loss, injury or
                            damage of any kind, however arising and whether
                            caused by tort (including negligence), breach of
                            contract or otherwise, even if foreseeable including
                            emotional distress or personal injury resulting
                            therefrom.
                          </p>

                          <li className="mb-2 font-bold uppercase">
                            INDEMNIFICATION
                          </li>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 9.1 </span>{" "}
                            <p>
                              Player and their successor(s)-in-interest
                              (collectively, “Player Indemnitors”) agree to and
                              shall indemnify, defend and hold harmless the
                              PlayBrainz Parties (with legal counsel reasonably
                              acceptable to PlayBrainz Parties) from and against
                              any and all actions, suits, claims, demands,
                              debts, liabilities, obligations, losses, damages,
                              costs, expenses, penalties or injury (including
                              reasonable attorneys’ fees and costs of any suit
                              related thereto) suffered or incurred by any of
                              them arising from (a) any misrepresentation by, or
                              breach of any covenant or warranty of Player
                              contained in this Agreement or any exhibit,
                              certificate, or other agreement or instrument
                              furnished or to be furnished by Player hereunder;
                              (b) any violation of this Agreement by Player; (c)
                              any suit, action, proceeding, claim or
                              investigation against PlayBrainz Parties which
                              arises from or which is based upon or pertaining
                              to (i) Player’s acts or omissions including
                              disclosure of information to PlayBrainz, (ii) the
                              Services, (iii) the unauthorized use of the
                              Player’s username and/or password including to
                              make any changes, revisions and/or modifications;
                              and (d) any matter with respect to which you waive
                              any claims, as provided in Section 8.
                            </p>
                          </div>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 9.2 </span>If Player Indemnitors shall have
                            an indemnification, defense and hold harmless
                            obligation, as above provided, and shall fail to
                            assume such obligation, then the respective
                            indemnitees shall have the right, but not the
                            obligation, to assume and maintain such defense
                            (including reasonable counsel fees and costs of any
                            suit related thereto) and to make any settlement or
                            pay any judgment or verdict as such indemnitees, in
                            its/their sole and absolute discretion, deem
                            necessary or appropriate; such costs of settlement,
                            payment, expense and costs, including reasonable
                            attorneys’ fees, to be reimbursed by the Player
                            Indemnitors upon demand by the respective
                            indemnitees.
                          </p>

                          <li className="mb-2 font-bold uppercase">
                            REPRESENTATIONS & WARRANTIES
                          </li>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 10.1 </span>You represent and warrant that:
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(a) </span>you are 18 years of age or older
                            and capable of entering into and agreeing to be
                            bound by this Agreement;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(b) </span>your entering into the agreement
                            represented by these T&Cs is not and does not cause
                            a violation of or conflict with any other agreement
                            to which you are a party;
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(c) </span>you are solely responsible for
                            compliance with local laws in connection with your
                            use of the Services; and
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(d) </span>it is legal for you to view and
                            play the Game in the jurisdiction to which you are
                            subject.
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 10.2 </span>You are using the Services with
                            no intent to broadcast, republish, misrepresent,
                            edit, copy, display or in any way use the Services
                            for any purpose other than in connection with your
                            professional practice.
                          </p>

                          <li className="mb-2 font-bold uppercase">TERM</li>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 11.1 </span>The Services shall commence on
                            the date of your first use of the Site and shall
                            continue until terminated by either you or us.
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 11.2 </span>You may terminate this Agreement
                            at any time by written notice to
                            customerservices@PlayBrainz.com. You will not
                            receive any refund, credit or allowance for tickets
                            purchased and not used.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 11.3 </span>PlayBrainz may terminate the
                            Services and/or this Agreement at any time upon
                            written notice. If we terminate the Services and
                            this Agreement without Cause, unused tickets you
                            have purchased will be refunded in USDT for the
                            value of the unused tickets. If we suspend Services
                            or terminate with Cause, the price paid for unused
                            tickets shall not be returned, refunded or credited
                            to you. In the event you dispute PlayBrainz’s
                            determination of Cause, such dispute shall be
                            addressed as provided in Section 12 provided that
                            your sole and maximum remedy shall be a refund of
                            the purchase price paid for the unused tickets; and
                            in no case will you be entitled to damages resulting
                            from any such suspension or termination.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 11.4 </span>Notwithstanding the foregoing, if
                            either Party gives the other a termination notice,
                            the receiving Party may, in its sole and absolute
                            discretion, terminate the Agreement at any time
                            prior to the effective date of the terminating
                            Party’s notice.
                          </p>

                          <li className="mb-2 font-bold uppercase">
                            GOVERNING LAW; DISPUTE RESOLUTION
                          </li>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 12.1 </span>This Agreement will be governed
                            by and interpreted in accordance with the laws of
                            the State of Wyoming, USA, without giving effect to
                            any principles of conflict of laws.
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 12.2 </span>Arbitration
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(a) </span>Amicable Dispute Resolution. In the
                            event of a dispute between the Parties hereunder
                            (each, a “Dispute”) that cannot be settled amicably,
                            such Dispute shall be resolved by arbitration, as
                            provided herein below. Notwithstanding the
                            foregoing, nothing in this section shall prevent a
                            Party from seeking interim injunctive or other
                            equitable relief in any court of competent
                            jurisdiction to preserve the status quo or to
                            prevent irreparable harm pending resolution of any
                            Dispute.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(b) </span>Procedure. Any claim, dispute or
                            controversy arising out of or relating to this
                            Agreement and not resolved amicably shall be
                            submitted by the Parties to binding arbitration in
                            San Francisco, California by a single (1) arbitrator
                            in accordance with the rules of the American
                            Arbitration Association (“AAA”), governed by the
                            laws of the State of Wyoming. Each Party shall have
                            full rights of discovery in any such proceeding.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-10 font-inter text-base font-normal">
                            <span>(i) </span>Decision Final. The Parties agree
                            to exercise their respective rights under AAA Rules
                            to cause any arbitration proceeding under this
                            section to be finalized and a decision rendered by
                            the arbitrator as soon as reasonably practicable,
                            but in no event more than six (6) months after
                            commencement of such arbitration proceeding.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-10 font-inter text-base font-normal">
                            <span>(ii) </span>Confidentiality. Except as
                            otherwise required by law, the Parties and
                            arbitrator shall maintain as confidential all
                            information and documents obtained during the
                            arbitration process, including the resolution of the
                            dispute.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-10 font-inter text-base font-normal">
                            <span>(iii) </span>Jurisdiction. Each Party
                            irrevocably and unconditionally (i) consents to the
                            jurisdiction of any such proceeding and waives any
                            objection that it may have to personal jurisdiction
                            or the laying of venue of any such proceeding; and
                            (ii) knowingly and voluntarily waives its rights to
                            have disputes tried and adjudicated by a judge and
                            jury except as otherwise expressly provided herein.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-10 font-inter text-base font-normal">
                            <span>(iv) </span>Final Judgment. Any award rendered
                            by the arbitrator(s) shall be final and binding upon
                            the Parties. Judgment upon the award may be entered
                            in any court of competent jurisdiction.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(c) </span>Equitable Relief. Notwithstanding
                            anything to the contrary in this Agreement, a breach
                            of this Agreement may cause irreparable harm to the
                            affected Party for which monetary damages are not a
                            sufficient remedy. In such event, the affected Party
                            may, without waiving any other rights or remedies
                            and without posting a bond or other security, seek
                            an injunction, specific performance or other
                            equitable remedy.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 pl-5 font-inter text-base font-normal">
                            <span>(d) </span>In the event of a request to a
                            court of competent jurisdiction for equitable
                            relief, THE PARTIES HERETO HEREBY IRREVOCABLY AND
                            UNCONDITIONALLY WAIVE, TO THE FULLEST EXTENT
                            PERMITTED BY APPLICABLE LAW, ANY RIGHT THAT THEY MAY
                            HAVE TO TRIAL BY JURY OF ANY CLAIM OR CAUSE OF
                            ACTION, OR IN ANY LEGAL PROCEEDING, DIRECTLY OR
                            INDIRECTLY BASED UPON OR ARISING OUT OF THIS
                            AGREEMENT OR THE TRANSACTIONS CONTEMPLATED BY THIS
                            AGREEMENT (WHETHER BASED ON CONTRACT, TORT OR ANY
                            OTHER THEORY). EACH PARTY (A) CERTIFIES THAT NO
                            REPRESENTATIVE, AGENT OR ATTORNEY OF THE OTHER PARTY
                            HAS REPRESENTED, EXPRESSLY OR OTHERWISE, THAT SUCH
                            OTHER PARTY WOULD NOT, IN THE EVENT OF LITIGATION,
                            SEEK TO ENFORCE THE FOREGOING WAIVER AND (B)
                            ACKNOWLEDGES THAT IT AND THE OTHER PARTY HAVE BEEN
                            INDUCED TO ENTER INTO THIS AGREEMENT BY, AMONG OTHER
                            THINGS, THE MUTUAL WAIVERS AND CERTIFICATIONS IN
                            THIS SECTION. EACH PARTY HERETO CONSENTS TO SERVICE
                            OF PROCESS BY CERTIFIED MAIL AT ITS ADDRESS LISTED
                            HEREIN.
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 12.3 </span>You agree that you may bring a
                            claim against PlayBrainz only in your capacity as an
                            individual User, not as the member of or participant
                            in any group or class.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 12.4 </span>The non-prevailing Party in any
                            arbitration or court proceeding shall pay the other
                            Party’s costs and expenses (including reasonable
                            attorneys’ fees) and reimburse the other Party for
                            its portion of the arbitration costs. In the event
                            that neither Party wins the arbitration totally,
                            reimbursement shall be made proportionally in
                            accordance with the AAA Rules. If a Party fails to
                            proceed with arbitration, unsuccessfully challenges
                            the arbitration award, or fails to comply with the
                            arbitration award, the other Party shall be entitled
                            to costs, including reasonable attorneys’ fees and
                            disbursements, for having to compel arbitration or
                            defend or enforce the award.
                          </p>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 12.5 </span>The exercise of any right or
                            remedy herein provided shall be without prejudice to
                            any other right or remedy provided herein, at law,
                            or in equity.
                          </p>

                          <li className="mb-2 font-bold uppercase">
                            LIMITATION OF LIABILITY
                          </li>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            To the extent permitted by law, in no event shall
                            PlayBrainz have any liability to you for any
                            indirect, special, incidental, punitive, or
                            consequential damages (including for loss of profit,
                            revenue or data) arising out of or in connection
                            with the Services or this Agreement, however caused,
                            and under whatever cause of action or theory of
                            liability brought (including under any contract,
                            negligence, indemnification or other tort theory of
                            liability) even if advised of the possibility of
                            such damages. To the extent permitted by applicable
                            law, PlayBrainz’s total cumulative liability to you
                            or any third-party arising out of or in connection
                            with the Services or this Agreement, from all causes
                            of action and all theories of liability, will be
                            limited to and will not exceed the lesser of One
                            Hundred US Dollars ($100.00) or the amount paid by
                            you to PlayBrainz during the Twelve (12) months
                            immediately preceding the claim. The Parties agree
                            that this section represents a reasonable allocation
                            of risk.
                          </p>

                          <li className="mb-2 font-bold uppercase">NOTICE</li>

                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            All notices upon you shall be effective when posted
                            to the Site and/or sent by email to the email
                            address you used when you registered or as you
                            subsequently modified it.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            All notices to PlayBrainz must be by email.
                          </p>
                          <div className="mb-4 flex flex-nowrap gap-5 font-inter text-base font-normal">
                            <p>PlayBrainz:</p>
                            <div className="flex flex-col">
                              <p>PlayBrainz, LLC</p>
                              <p>Email: info@PlayBrainz.com</p>
                            </div>
                          </div>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            Either Party may, at any time, change its mail or
                            delivery address by giving the other Party written
                            notice.
                          </p>
                          <p className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            The effective date of any written notice personally
                            delivered or sent by a recognized overnight courier
                            shall be the date of receipt if received on the
                            recipient’s business day, otherwise the next
                            business day of the recipient. The effective date of
                            any email notice shall be the next business day
                            after the email is sent.
                          </p>

                          <li className="mb-2 font-bold uppercase">
                            MISCELLANEOUS
                          </li>

                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.1 </span>
                            <div>
                              <div className="">No Waiver.</div>
                              <div className="">
                                No waiver by PlayBrainz of any breach by you of
                                any condition or provision of this Agreement
                                shall be deemed a waiver of any similar or
                                dissimilar provision or condition at the same or
                                any prior or subsequent time, nor shall the
                                failure of or delay by PlayBrainz in exercising
                                any right, power, or privilege under this
                                Agreement operate as a waiver to preclude any
                                other or further exercise thereof or the
                                exercise of any other such right, power, or
                                privilege.
                              </div>
                            </div>
                          </div>

                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.2 </span>
                            <div>
                              <div className="">
                                No Third-Party Beneficiaries.
                              </div>
                              <div className="">
                                This Agreement shall be binding upon and inure
                                to the benefit of the Parties and their
                                respective permitted successors, heirs, personal
                                representatives and assigns. Subject to the
                                foregoing sentence, this Agreement is for the
                                exclusive benefit of the Parties and there shall
                                be no third-party beneficiary to any of the
                                provisions of this Agreement except the
                                indemnitees (other than the Parties) described
                                herein.
                              </div>
                            </div>
                          </div>

                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.4 </span>
                            <div>
                              <div className="">Assignment.</div>
                              <div className="">
                                You may not assign any of your rights or
                                obligations hereunder, whether by operation of
                                law or otherwise. PlayBrainz may assign this
                                Agreement, in part or whole, without your
                                consent to an Affiliate or in connection with a
                                merger, acquisition, corporate reorganization or
                                sale of all or substantially all of its assets
                                or equity. Subject to the foregoing and Section
                                11.01, this Agreement shall bind and inure to
                                the benefit of the Parties, their respective
                                successors and permitted assigns.
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.5 </span>
                            <div>
                              <div className="">Amendment. </div>
                              <div className="">
                                PlayBrainz may amend this Agreement at any time,
                                in its sole and absolute discretion. Your
                                continued use of the Services after the
                                effective date of any such modification shall be
                                conclusive evidence of your consent to be bound
                                by such modification.
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.6 </span>
                            <div>
                              <div className="">Force Majeure. </div>
                              <div className="">
                                Neither Party will be responsible for any
                                failure or delay in its performance under this
                                Agreement (except for any payment obligations)
                                due to causes beyond its reasonable control,
                                including, without limitation, acts of God,
                                strikes, lockouts, riots, acts of war,
                                epidemics, pandemics, communication line
                                failure, governmental orders (including
                                quarantines and business closures) and power
                                failures.
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.7 </span>
                            <div>
                              <div className="">Severability. </div>
                              <div className="">
                                If any provision of this Agreement is held by a
                                court of competent jurisdiction to be contrary
                                to law, such provision shall be modified and
                                interpreted so as to best accomplish the
                                objectives of the original provision to the
                                fullest extent allowed by law and the remaining
                                provisions of this Agreement shall remain in
                                full force and effect.
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.8 </span>
                            <div>
                              <div className="">Interpretation. </div>
                              <div className="">
                                If this Agreement is ever construed, whether by
                                a court or arbitrator, such court or arbitrator
                                will not construe this Agreement, or any
                                provision hereof, against any Party as the
                                drafter. This Agreement is written in English
                                and, notwithstanding the translation or
                                translatability into other languages, the
                                English language version of this Agreement shall
                                be controlling.
                              </div>
                              <div className="">
                                For purposes of this Agreement: (a) the words
                                “include,” “includes,” and “including” are
                                deemed to be followed by the words “but not
                                limited to” or “without limitation” which shall
                                have the same meaning; (b) the word “or” is not
                                exclusive; and (c) the words “herein,” “hereof,”
                                “hereby,” “hereto,” and “hereunder” refer to
                                this Agreement as a whole.
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.9 </span>
                            <div>
                              <div className="">Headings.</div>
                              <div className="">
                                The headings used herein are for convenience
                                only and shall not be deemed to define, limit or
                                construe the contents of any provision of this
                                Agreement. The meanings given to terms defined
                                herein will be equally applicable to both the
                                singular and plural forms of such terms.
                                Whenever the context may require, any pronoun
                                includes the corresponding masculine, feminine
                                and neuter forms. References to “Section” mean a
                                section of this Agreement.
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.10 </span>
                            <div>
                              <div className="">Entire Agreement. </div>
                              <div className="">
                                This Agreement constitutes the entire agreement
                                and understanding of the Parties with respect to
                                the subject matter of this Agreement, and
                                supersedes any and all prior understandings and
                                agreements, whether oral or written, between the
                                Parties with respect to the subject matter of
                                this Agreement.
                              </div>
                            </div>
                          </div>
                          <div className="mb-4 flex flex-nowrap gap-1.5 font-inter text-base font-normal">
                            <span> 15.11 </span>
                            <div>
                              <div className="">Survival. </div>
                              <div className="">
                                Those provisions of this Agreement that by their
                                terms or sense are intended to survive
                                termination or expiration of this Agreement will
                                survive and remain in full force and effect,
                                including, without limitation, Sections 6, 8, 9
                                and 12-15.
                              </div>
                            </div>
                          </div>
                        </ol>
                        <p className="mb-3 mt-14 w-full text-center font-inter text-base font-normal">
                          Copyright © 2024 PLAYBRAINZ
                        </p>
                        <p className="w-full text-center font-inter text-base font-normal">
                          Persons under the age of 18 are NOT permitted to
                          create accounts and/or participate in the games.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="mt-4 w-full rounded-[10px] bg-primary-400 py-4 pl-4 pr-[36px]">
                        <div className="relative flex items-center">
                          <CustomCheckbox
                            checked={checkedOne}
                            setChecked={setCheckedOne}
                          />
                          <div className="ml-[16px]">
                            <p className="text-start font-inter font-normal">
                              You agree to our Terms of Use and License Terms.
                              In our Privacy Policy, we explain how we process
                              your personal data and what rights you have.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="pb-[14px] pt-8" onClick={handleContinue}>
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
  )
}

export default ConditionsModal
