<template>
  <div class="bg-light-30">
    <div class="container w-full xl:max-w-7xl mx-auto px-6 pt-10 pb-16">
      <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-dark-10 mb-6">
        Section D - English Language Qualifications
      </h2>
      <div class="grid lg:grid-cols-2 gap-x-12 gap-y-8">
        <div class="max-w-md">
          <!--  Name of Test -->
          <div class="mb-4">
            <label
              for="name"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Name of Test
            </label>

            <div class="">
              <input
                id="nameOfTest"
                name="nameOfTest"
                type="text"
                placeholder="GCSE English (grades A - C), IELTS or equivalent"
                class="
                  text-sm
                  sm:text-base
                  relative
                  w-full
                  border-2
                  rounded
                  text-dark-10
                  bg-light-10
                  placeholder-gray-400
                  focus:border-dark-10
                  focus:outline-none
                  py-2
                  px-4
                  border-light-10
                "
              />
            </div>

            <span
              class="
                flex
                items-center
                font-medium
                tracking-wide
                text-red-500 text-xs
                sm:text-sm
                md:text-base
                mt-1
                ml-1
              "
            >
              Invalid username field !
            </span>
          </div>
        </div>
        <div class="max-w-md">
          <!--  Overall Result -->
          <div class="mb-4">
            <label
              for="name"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Overall Result
            </label>

            <div class="">
              <input
                id="overallResult"
                name="overallResult"
                type="text"
                placeholder="Score"
                class="
                  text-sm
                  sm:text-base
                  relative
                  w-full
                  border-2
                  rounded
                  text-dark-10
                  bg-light-10
                  placeholder-gray-400
                  focus:border-dark-10
                  focus:outline-none
                  py-2
                  px-4
                  border-light-10
                "
              />
            </div>

            <span
              class="
                flex
                items-center
                font-medium
                tracking-wide
                text-red-500 text-xs
                sm:text-sm
                md:text-base
                mt-1
                ml-1
              "
            >
              Invalid username field !
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>