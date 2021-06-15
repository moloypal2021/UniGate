<template>
  <div
    class="w-full"
    :style="{
      background:
        'linear-gradient(180deg, rgba(0,0,0,0.5) 5%, rgba(0,0,0,1) 100%), url(' +
        require(`../assets/images/bg-1.png`) +
        ') no-repeat top',
      backgroundSize: 'cover !important',
    }"
  >
    <div
      class="
        container
        xl:
        w-full
        max-w-7xl
        mx-auto
        xl:px-6
        sm:px-8
        px-4
        xl:py-28
        lg:py-24
        md:py-20
        sm:py-16
        py-14
      "
    >
      <h1
        class="
          lg:text-7xl
          md:text-6xl
          sm:text-5xl
          text-3xl text-white
          font-bold
          max-w-6xl
          mx-auto
          text-center
          xl:mb-16
          lg:mb-14
          md:mb-12
          sm:mb-10
          mb-8
        "
      >
        Professional Educational Consultancy
      </h1>
      <div class="max-w-6xl mx-auto"></div>
      <h2
        class="
          xl:text-3xl
          lg:text-2xl
          md:text-xl
          sm:text-lg
          text-base text-white text-center
        "
      >
        Progress your educational career through us.
      </h2>
      <div class="flex flex-wrap items-center justify-center">
        <h3
          class="
            xl:text-2xl
            lg:text-xl
            md:text-lg
            sm:text-base
            text-sm text-white text-opacity-80
            md:py-5
            py-2
            xl:px-8
            px-4
          "
        >
          Postgraduate International Students
        </h3>
        <h3
          class="
            xl:text-2xl
            lg:text-xl
            md:text-lg
            sm:text-base
            text-sm text-white text-opacity-80
            md:py-5
            py-2
            xl:px-8
            px-4
          "
        >
          Bachelors International Students
        </h3>
        <h3
          class="
            xl:text-2xl
            lg:text-xl
            md:text-lg
            sm:text-base
            text-sm text-white text-opacity-80
            md:py-5
            py-2
            xl:px-8
            px-4
          "
        >
          Funding Students
        </h3>
      </div>
      <div
        class="
          xl:mt-16
          lg:mt-14
          md:mt-12
          sm:mt-10
          mt-8
          flex
          items-center
          justify-center
        "
      >
        <div class="flex items-center mx-2 sm:mx-3 my-3">
          <a
            href="#"
            class="
              py-2
              xl:px-8
              sm:px-5
              px-4
              lg:text-xl
              md:text-lg
              sm:text-base
              text-sm
              leading-normal
              text-white
              no-underline
              border-2 border-white
              rounded
            "
            >Contact Us
          </a>
        </div>
        <div class="flex items-center mx-2 sm:mx-3 my-3">
          <a
            href="#"
            class="
              py-2
              sm:px-6
              px-3
              lg:text-xl
              md:text-lg
              sm:text-base
              text-sm
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
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
