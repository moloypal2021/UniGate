<template>
  <div>
    <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-dark-10 mb-6">
      Section A - Your Course
    </h2>
    <div class="grid lg:grid-cols-2 gap-x-40 xl:gap-x-96 gap-y-8">
      <div>
        <!-- Course Title -->
        <div class="mb-4">
          <label
            for="name"
            class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
          >
            Course Title
          </label>

          <div class="">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="BSc Computer Science"
              value="BSc Computer Science"
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

        <!-- Month & Year of Entry -->
        <div class="mb-4">
          <label
            for="name"
            class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
          >
            Month & Year of Entry
          </label>
          <div class="flex items-center">
            <div class="flex space-x-6 sm:space-x-10 items-center">
              <div>
                <input type="radio" id="January" name="entry" value="January" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="January"
                  >January</label
                >
              </div>
              <div>
                <input
                  type="radio"
                  id="September"
                  name="entry"
                  value="September"
                />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="September"
                  >September</label
                >
              </div>
            </div>
            <div class="ml-6 sm:ml-12 md:ml-24">
              <input
                type="text"
                name="entryYear"
                placeholder="2021"
                class="
                  text-sm
                  sm:text-base
                  relative
                  w-20
                  border-2
                  rounded
                  text-dark-10
                  bg-light-10
                  placeholder-gray-400
                  focus:border-dark-10
                  focus:outline-none
                  text-center
                  py-2
                  px-4
                  border-light-10
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>