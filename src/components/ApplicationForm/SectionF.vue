<template>
  <div class="">
    <div class="container w-full xl:max-w-7xl mx-auto px-6 pt-10 pb-16">
      <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-dark-10 mb-6">
        Section F - Documents
      </h2>
      <p class="text-base sm:text-lg md:text-xl text-dark-10 mb-12">
        Please provide copies of genuine documents. Any documents that are found
        to be forged or fake will cause your visa to be refused with a 10 year
        penalty and a non-refundable CAS fees. <br />
        You can edit the application after submission in-case you do not have
        all the documents on you.
      </p>
      <div class="grid lg:grid-cols-2 gap-x-12 gap-y-8">
        <div class="max-w-md">
          <!--  University Degree -->
          <div class="mb-4">
            <label
              for="name"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              University Degree
            </label>

            <div class="">
              <input
                id="universityDegree"
                name="universityDegree"
                type="file"
                placeholder="Choose File"
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
                  appearance-none
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