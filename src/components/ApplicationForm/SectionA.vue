<template>
  <div>
    <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-dark-10 mb-6">
      Section A - Your Course
    </h2>
    <div class="grid lg:grid-cols-2 gap-x-64 gap-y-8">
      <div>
        <div class="flex flex-col mb-4">
          <label
            for="name"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
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
</template>