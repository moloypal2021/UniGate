<template>
  <!-- Navbar Component Start -->
  <Navbar>
    <!-- Menus -->
    <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
      <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <a
          href="/about"
          class="
            flex-no-grow flex-no-shrink
            relative
            py-2
            xl:px-4
            px-2
            xl:text-base
            md:text-sm
            leading-normal
            text-dark-10
            no-underline
            flex
            items-center
          "
          >How The Process Works?</a
        >
        <a
          href="#"
          class="
            flex-no-grow flex-no-shrink
            relative
            py-2
            xl:px-4
            px-2
            xl:text-base
            md:text-sm
            leading-normal
            text-dark-10
            no-underline
            flex
            items-center
          "
          >Courses</a
        >
        <a
          href="#"
          class="
            flex-no-grow flex-no-shrink
            relative
            py-2
            xl:px-4
            px-2
            xl:text-base
            md:text-sm
            leading-normal
            text-dark-10
            no-underline
            flex
            items-center
          "
          >FAQs
        </a>

        <div class="flex items-center lg:mx-3 my-3">
          <a
            href="./contact.html"
            class="
              flex-no-grow flex-no-shrink
              relative
              py-2
              px-6
              xl:text-base
              md:text-sm
              leading-normal
              text-white
              no-underline
              border-2 border-dark-10
              bg-dark-10
              rounded
            "
            >Save & Return Later
          </a>
        </div>
      </div>
    </div>
  </Navbar>
  <!-- Navbar Component End -->

  <!-- Main Section Start  -->
  <section
    class="container w-full xl:max-w-7xl mx-auto px-6 md:pt-32 sm:pt-28 pt-24"
  >
    <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-dark-10 mb-6">
      Application Form
    </h2>
    <p class="text-base sm:text-lg md:text-xl text-dark-10">
      Fill out the application form so we can better assist you with your
      journey for your dream university. You may return to this application to
      edit it later through the link generated after submitting the application
    </p>
  </section>
  <SectionA />
  <SectionB />
  <SectionC />
  <!-- Main Section End  -->
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import SectionA from "@/components/ApplicationForm/SectionA.vue";
import SectionB from "@/components/ApplicationForm/SectionB.vue";
import SectionC from "@/components/ApplicationForm/SectionC.vue";

export default {
  name: "ApplicationForm",
  components: {
    Navbar,
    SectionA,
    SectionB,
    SectionC,
  },
};
</script>