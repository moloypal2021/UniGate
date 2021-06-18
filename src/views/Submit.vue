<template>
  <div>
    <Navbar />

    <!-- Information Section Start -->
    <section class="md:fixed md:z-[-1] md:inset-0">
      <div class="md:block hidden">
        <img
          src="@/assets/images/hafcircle.png"
          alt=""
          class="w-32 sm:w-40 md:w-44 lg:w-64 absolute bottom-0 left-0 z-[-1]"
        />
      </div>
      <div
        class="
          container
          xl:
          w-full
          xl:max-w-7xl
          mx-auto
          px-6
          md:py-40
          sm:py-20
          py-16
          text-center
        "
      >
        <img
          src="@/assets/images/logo.svg"
          alt=""
          class="lg:h-11 md:h-10 sm:h-9 h-7 mx-auto mb-6"
        />
        <h2
          class="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            text-center text-dark-10
            mb-8
          "
        >
          Application Reference - 218xa2ff2
        </h2>
        <h1
          class="
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            text-blue-10
            font-bold
            mb-4
          "
        >
          Your application has been successfully submitted
        </h1>
        <h1
          class="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            text-blue-10
            max-w-xl
            mx-auto
            mb-6
          "
        >
          You will be contacted by one of our consultants within 1-2 working
          days
        </h1>
        <h1
          class="text-sm sm:text-base md:text-lg lg:text-xl text-dark-10 mb-6"
        >
          Link To Edit Your Application:
        </h1>
        <div
          class="
            max-w-xs
            sm:max-w-sm
            md:max-w-[490px]
            mx-auto
            bg-light-20
            rounded
            pl-6
            py-3
            mb-8
          "
        >
          <div class="flex items-center">
            <h1
              class="
                text-xs
                sm:text-sm
                md:text-base
                font-bold
                text-dark-10
                overflow-hidden
              "
            >
              https://www.unigateconsultants.com/edit/218xa2ff2
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 sm:w-5 md:w-6 lg:w-7 mx-6"
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
        <h2 class="text-sm md:text-base lg:text-lg text-center text-dark-10">
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