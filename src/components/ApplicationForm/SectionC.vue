<template>
  <div class="container w-full xl:max-w-7xl mx-auto px-6 py-16">
    <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-dark-10 mb-6">
      Section C - Visa Details
    </h2>
    <div class="grid lg:grid-cols-2 gap-x-12 gap-y-8">
      <div class="max-w-md">
        <!--  Which country are you living in? -->
        <div class="relative mb-4">
          <label
            class="block text-dark-10 font-medium text-sm sm:text-base mb-2"
            for="countryliving"
          >
            Which country are you living in?
          </label>
          <select
            class="
              py-3
              px-6
              text-sm
              sm:text-base
              w-full
              bg-light-10
              text-dark-10
              border-0
              focus:outline-none
              rounded-lg
              appearance-none
            "
            name="countryliving"
            placeholder="select"
            type="text"
          >
            <option value="">Select</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <div
            class="
              absolute
              inset-y-0
              right-4
              mt-8
              pl-3
              flex
              items-center
              pointer-events-none
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5"
              viewBox="0 0 30.995 17.997"
            >
              <path
                data-name="Icon feather-chevron-down"
                d="M3.536 3.536l11.962 11.962L27.46 3.536"
                fill="none"
                stroke="#576dff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="5"
              />
            </svg>
          </div>
        </div>

        <!-- Have you been in the UK Before? -->
        <div class="mb-4">
          <label
            for="UKBefore"
            class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
          >
            Have you been in the UK Before?
          </label>
          <div class="flex flex-wrap items-center">
            <div class="mr-4">
              <input
                type="radio"
                id="UKBeforeYes"
                name="UKBefore"
                value="UKBeforeYes"
              />
              <label
                class="
                  ml-0.5
                  sm:ml-2
                  text-dark-10 text-sm
                  sm:text-base
                  md:text-lg
                "
                for="UKBeforeYes"
                >Yes</label
              >
            </div>
            <div class="mr-4">
              <input
                type="radio"
                id="UKBeforeNo"
                name="UKBefore"
                value="UKBeforeNo"
              />
              <label
                class="
                  ml-0.5
                  sm:ml-2
                  text-dark-10 text-sm
                  sm:text-base
                  md:text-lg
                "
                for="UKBeforeNo"
                >No</label
              >
            </div>
          </div>
        </div>

        <!-- Have you previously been refused a visa to UK? -->
        <div class="mb-4">
          <label
            for="refusedavisa"
            class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
          >
            Have you previously been refused a visa to UK?
          </label>
          <div class="flex flex-wrap items-center">
            <div class="mr-4">
              <input
                type="radio"
                id="refusedavisaYes"
                name="refusedavisa"
                value="refusedavisaYes"
              />
              <label
                class="
                  ml-0.5
                  sm:ml-2
                  text-dark-10 text-sm
                  sm:text-base
                  md:text-lg
                "
                for="refusedavisaYes"
                >Yes</label
              >
            </div>
            <div class="mr-4">
              <input
                type="radio"
                id="refusedavisaNo"
                name="refusedavisa"
                value="refusedavisaNo"
              />
              <label
                class="
                  ml-0.5
                  sm:ml-2
                  text-dark-10 text-sm
                  sm:text-base
                  md:text-lg
                "
                for="refusedavisaNo"
                >No</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-md">
        <!-- Will You Require a Tier 4 (Student Visa) ? -->
        <div class="mb-4">
          <label
            for="requireatier4"
            class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
          >
            Will You Require a Tier 4 (Student Visa) ?
          </label>
          <div class="flex flex-wrap items-center">
            <div class="mr-4">
              <input
                type="radio"
                id="requireatier4Yes"
                name="requireatier4"
                value="requireatier4Yes"
              />
              <label
                class="
                  ml-0.5
                  sm:ml-2
                  text-dark-10 text-sm
                  sm:text-base
                  md:text-lg
                "
                for="requireatier4Yes"
                >Yes</label
              >
            </div>
            <div class="mr-4">
              <input
                type="radio"
                id="requireatier4No"
                name="requireatier4"
                value="requireatier4No"
              />
              <label
                class="
                  ml-0.5
                  sm:ml-2
                  text-dark-10 text-sm
                  sm:text-base
                  md:text-lg
                "
                for="requireatier4No"
                >No</label
              >
            </div>
          </div>
        </div>

        <!--   Date Of Birth -->
        <div class="mb-4">
          <label
            for="name"
            class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
          >
            Date Of Birth
          </label>

          <div class="relative">
            <input
              id="date"
              name="date"
              type="text"
              placeholder="MM/YY"
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
            <div class="absolute flex right-0 top-0 h-full w-10">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  text-blue-10 text-lg
                  h-full
                  w-full
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5"
                  viewBox="0 0 28.397 31.552"
                >
                  <path
                    id="Icon_material-date-range"
                    data-name="Icon material-date-range"
                    d="M16.966,19.2H13.81v3.155h3.155Zm6.31,0H20.121v3.155h3.155Zm6.31,0H26.431v3.155h3.155ZM32.741,8.155H31.164V5H28.009V8.155H15.388V5H12.233V8.155H10.655A3.141,3.141,0,0,0,7.516,11.31L7.5,33.4a3.154,3.154,0,0,0,3.155,3.155H32.741A3.164,3.164,0,0,0,35.9,33.4V11.31A3.164,3.164,0,0,0,32.741,8.155Zm0,25.241H10.655V16.043H32.741Z"
                    transform="translate(-7.5 -5)"
                    fill="#576dff"
                  />
                </svg>
              </div>
            </div>
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
</template>