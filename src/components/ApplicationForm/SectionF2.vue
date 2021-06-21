<template>
  <div class="bg-light-30">
    <div class="container w-full xl:max-w-7xl mx-auto px-6 py-10">
      <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-dark-10 mb-6">
        Section F - Other Information
      </h2>
      <p class="text-base sm:text-lg md:text-xl text-dark-10 mb-12">
        You must inform us about any convictions you have that are not
        ‘protected’ as defined by the Rehabilitation of Offenders Act 1974
        (Exceptions) Order 1975 (as amended in 2013).
      </p>
      <!-- Do you have a unspent conviction? -->
      <div class="mb-12">
        <label
          for="conviction"
          class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
        >
          Do you have a unspent conviction?
        </label>
        <div class="flex flex-wrap items-center">
          <div class="mr-4">
            <input
              type="radio"
              id="convictionYes"
              name="conviction"
              value="convictionYes"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="convictionYes"
              >Yes</label
            >
          </div>
          <div class="mr-4">
            <input
              type="radio"
              id="convictionNo"
              name="conviction"
              value="convictionNo"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="convictionNo"
              >No</label
            >
          </div>
        </div>
      </div>

      <p class="text-base sm:text-lg md:text-xl text-dark-10 mb-12">
        The University welcomes applications from disabled international
        students and we encourage you to declare your disability and your
        support needs as soon as possible. Telling us about your disability will
        not affect your selection as a student, but will enable us to work with
        you to assess your needs, plan your stay at the University and inform
        you to what extent we can meet your requirements.
      </p>

      <!-- Do you have a disability or medical condition that require any additional support? -->
      <div class="">
        <label
          for="medicalCondition"
          class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
        >
          Do you have a disability or medical condition that require any
          additional support?
        </label>
        <div class="flex flex-wrap items-center">
          <div class="mr-4">
            <input
              type="radio"
              id="medicalConditionYes"
              name="medicalCondition"
              value="medicalConditionYes"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="medicalConditionYes"
              >Yes</label
            >
          </div>
          <div class="mr-4">
            <input
              type="radio"
              id="medicalConditionNo"
              name="medicalCondition"
              value="medicalConditionNo"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="medicalConditionNo"
              >No</label
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
