<template>
  <div>
    <Header />
    <section
      class="h-[20rem] max-sm:h-[14rem] bg-primary flex flex-col justify-between bg-cover bg-no-repeat bg-[url('/imgs/hero-bg.webp')]"
    >
      <div class="grow flex justify-center items-center">
        <h1
          class="text-5xl text-white text-center leading-snug max-sm:text-3xl max-sm:px-20 font-josefin font-semibold"
        >
          Community Guidelines
        </h1>
      </div>
    </section>
    <main class="py-20 pb-52 max-sm:pb-20 container">
      <div class="max-w-[65vw] max-sm:max-w-full flex flex-col gap-14">
        <p class="text-primary text-lg max-sm:text-base mb-10">
          Checkmate is a space for creatives to hold each other accountable and
          learn from each other. We are committed to creating a welcoming and
          inclusive community where everyone feels safe and respected.
        </p>

        <div class="flex flex-col gap-4 mb-10">
          <h2
            class="text-2xl max-sm:text-xl text-primary font-josefin font-bold"
          >
            Values
          </h2>
          <ul
            class="flex flex-col gap-4 list-disc pl-4 text-lg max-sm:text-base"
          >
            <li>
              <strong class="font-bold">Accountability:</strong> We support each
              other in achieving our goals by providing encouragement and
              feedback.
            </li>
            <li>
              <strong class="font-bold">Respect:</strong> We treat each other
              with respect, regardless of our background, experience, or
              beliefs.
            </li>
            <li>
              <strong class="font-bold">Collaboration:</strong> We share our
              knowledge and resources to help each other grow and succeed.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-2xl text-primary font-josefin font-bold">
            Respect and Inclusivity
          </h2>
          <ul class="flex flex-col gap-4 text-lg max-sm:text-base">
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                Be Respectful:
              </strong>
              Treat all members with respect, kindness, and empathy. Avoid any
              form of harassment, discrimination, or hate speech based on race,
              gender, religion, nationality, age, or any other personal
              characteristic.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Cultural Sensitivity:</strong
              >
              Our community includes members from diverse backgrounds. Be
              culturally sensitive and avoid making assumptions about others'
              beliefs or values.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Inclusivity:</strong
              >
              Foster an inclusive atmosphere where everyone feels welcome to
              participate, regardless of their level of experience or expertise.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-2xl text-primary font-josefin font-bold">
            Accountability Partnerships
          </h2>
          <ul class="flex flex-col gap-4 text-lg max-sm:text-base">
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                Serious Commitment:
              </strong>
              Serious Commitment: If you're seeking an accountability partner,
              commit to the partnership seriously. Be reliable and supportive of
              your partner's goals.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Effective Communication:</strong
              >
              Communicate openly and regularly with your partner. Establish
              clear expectations and goals for the partnership.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Confidentiality:</strong
              >
              Respect the privacy and confidentiality of your accountability
              partner. Do not share personal information or progress without
              their consent.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-2xl text-primary font-josefin font-bold">
            Content and Discussions
          </h2>
          <ul class="flex flex-col gap-4 text-lg max-sm:text-base">
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                Relevant Content:
              </strong>
              Keep discussions and content related to productivity, tech, and
              accountability. Off-topic posts may be removed.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Quality Contributions:</strong
              >
              Contribute thoughtfully and provide valuable insights and
              feedback. Avoid spammy or low-effort contributions.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                No Self-Promotion:</strong
              >
              Do not use the community solely for self-promotion. Share your
              knowledge and experiences without excessive promotion of products
              or services.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-2xl text-primary font-josefin font-bold">
            Reporting and Moderation
          </h2>
          <ul class="flex flex-col gap-4 text-lg max-sm:text-base">
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                Report Misconduct:
              </strong>
              If you witness any violation of these guidelines, report it to the
              moderators. Do not engage in public disputes or confrontations.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Moderator Decisions:</strong
              >
              Respect the decisions of community moderators. Their role is to
              ensure the community remains a positive and safe place for all
              members.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-2xl text-primary font-josefin font-bold">
            Accountability for Violations
          </h2>
          <ul class="flex flex-col gap-4 text-lg max-sm:text-base">
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                Warnings and Bans:
              </strong>
              Violations of these guidelines may result in warnings, temporary
              suspensions, or permanent bans, depending on the severity and
              frequency of the offense.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Dispute Resolution:</strong
              >
              In case of conflicts or disagreements, try to resolve them through
              civil and private communication before involving moderators.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-2xl text-primary font-josefin font-bold">
            Community Growth and Feedback
          </h2>
          <ul class="flex flex-col gap-4 text-lg max-sm:text-base">
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                Feedback:
              </strong>
              Provide feedback on how to improve the community. We value your
              input and are committed to making this community better.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Promotion:
              </strong>
              Help the community grow by inviting like-minded individuals who
              would benefit from our accountability partner pairings, focus
              rooms and projects.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-4">
          <h2 class="text-2xl text-primary font-josefin font-bold">
            Legal and Ethical Compliance
          </h2>
          <ul class="flex flex-col gap-4 text-lg max-sm:text-base">
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
              >
                Respect Laws:
              </strong>
              Ensure that all activities within the community comply with local,
              national, and international laws.
            </li>
            <li>
              <strong
                class="font-bold underline decoration-double decoration-secondary"
                >Intellectual Property:
              </strong>
              Respect the intellectual property rights of others. Do not share
              copyrighted materials without proper authorization.
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-6">
          <p class="text-primary text-lg max-sm:text-base">
            By participating in the Checkmate community, you agree to abide by
            these guidelines. These guidelines are designed to create a
            supportive and productive environment for all members. Failure to
            comply may result in appropriate actions, including moderation and
            account suspension.
          </p>

          <p class="text-primary text-lg max-sm:text-base">
            These guidelines serve as a foundation for a respectful and thriving
            community. Regularly review them to stay informed about the
            expectations within the community.
          </p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
