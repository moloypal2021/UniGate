<template>
  <div>
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
              href="#"
              class="
                flex-no-grow flex-no-shrink
                relative
                py-2
                xl:px-8
                px-5
                xl:text-base
                md:text-sm
                leading-normal
                text-dark-10
                no-underline
                border-2 border-dark-10
                rounded
              "
              >Contact Us
            </a>
          </div>
          <div class="flex items-center lg:mx-3 my-3">
            <a
              href="./application-form"
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
                border-2 border-blue-10
                bg-blue-10
                rounded
              "
              >Application Form
            </a>
          </div>
        </div>
      </div>
    </Navbar>

    <!-- Navbar Component End -->

    <!-- Heros Component Start -->
    <Hero />
    <!-- Heros Component End -->

    <!-- Feature Component End -->
    <Feature />
    <!-- Feature Component End -->

    <!-- Contact Component End -->
    <Contact />
    <!-- Contact Component End -->

    <!-- Contact Component End -->
    <Footer />
    <!-- Contact Component End -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Feature from "@/components/Feature.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Feature,
    Contact,
    Footer,
  },
};
</script>
