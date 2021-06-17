<template>
  <div>
    <Navbar />

    <!-- Information Section Start -->
    <section class="relative">
      <div class="">
        <img
          src="@/assets/images/hafcircle.png"
          alt=""
          class="w-64 absolute bottom-0 left-0 z-[-1]"
        />
      </div>
      <div
        class="
          container
          xl:
          w-full
          xl:max-w-7xl
          mx-auto
          xl:py-24
          lg:py-20
          md:py-16
          sm:py-14
          py-12
          text-center
        "
      >
        <img src="@/assets/images/logo.svg" alt="" class="h-16 mx-auto mb-12" />
        <h2
          class="
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            text-center text-dark-10
            mb-16
          "
        >
          Application Reference - 218xa2ff2
        </h2>
        <h1
          class="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-[43px]
            text-blue-10
            font-bold
            mb-10
          "
        >
          Your application has been successfully submitted
        </h1>
        <h1
          class="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-[40px]
            text-blue-10
            max-w-4xl
            mx-auto
            mb-16
          "
        >
          You will be contacted by one of our consultants within 1-2 working
          days
        </h1>
        <h1
          class="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-[40px]
            text-dark-10
            mb-10
          "
        >
          Link To Edit Your Application:
        </h1>
        <div class="max-w-5xl mx-auto bg-light-20 pl-6 py-4 mb-8">
          <div class="flex items-center">
            <h1
              class="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                font-bold
                text-dark-10
              "
            >
              https://www.unigateconsultants.com/edit/218xa2ff2
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 sm:w-9 md:w-10 lg:w-12 mx-6"
              viewBox="0 0 47.5 55"
            >
              <path
                id="Icon_material-content-copy"
                data-name="Icon material-content-copy"
                d="M40,2.5H10a5.015,5.015,0,0,0-5,5v35h5V7.5H40Zm7.5,10H20a5.015,5.015,0,0,0-5,5v35a5.015,5.015,0,0,0,5,5H47.5a5.015,5.015,0,0,0,5-5v-35A5.015,5.015,0,0,0,47.5,12.5Zm0,40H20v-35H47.5Z"
                transform="translate(-5 -2.5)"
                fill="#576dff"
              />
            </svg>
          </div>
        </div>
        <h2
          class="
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            text-center text-dark-10
          "
        >
          The link has also been sent to your provided email
        </h2>
      </div>
    </section>
    <!-- Information Section End -->
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Submit",
  components: {
    Navbar,
  },
};
</script>