<template>
  <div class="bg-light-30">
    <div class="container w-full xl:max-w-7xl mx-auto px-6 py-8">
      <h2 class="text-lg sm:text-xl lg:text-2xl font-bold text-dark-10 mb-6">
        Section B - Personal Details
      </h2>
      <div class="grid lg:grid-cols-2 gap-x-12 gap-y-8">
        <div class="max-w-md">
          <!--  First Name ( As Per Your Passport ) -->
          <div class="mb-4">
            <label
              for="name"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              First Name ( As Per Your Passport )
            </label>

            <div class="">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
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

          <!-- Your Title -->
          <div class="mb-4">
            <label
              for="yourtitle"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Your Title
            </label>
            <div class="flex flex-wrap items-center">
              <div class="mr-4">
                <input type="radio" id="mr" name="yourtitle" value="mr" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="mr"
                  >Mr</label
                >
              </div>
              <div class="mr-4">
                <input type="radio" id="Mrs" name="yourtitle" value="Mrs" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Mrs"
                  >Mrs</label
                >
              </div>
              <div class="mr-4">
                <input type="radio" id="Miss" name="yourtitle" value="Miss" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Miss"
                  >Miss</label
                >
              </div>
              <div class="mr-4">
                <input type="radio" id="Dr" name="yourtitle" value="Dr" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Dr"
                  >Dr</label
                >
              </div>
              <div class="mr-4">
                <input
                  type="radio"
                  id="Professor"
                  name="yourtitle"
                  value="Professor"
                />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Professor"
                  >Professor</label
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
                type="date"
                placeholder="DD/MM/YY"
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

          <!--  Nationality -->
          <div class="relative mb-4">
            <label
              class="block text-dark-10 font-medium text-sm sm:text-base mb-2"
              for="name"
            >
              Nationality
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
              name="Nationality"
              placeholder="John"
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

          <!--  Postal Code -->
          <div class="mb-4">
            <label
              for="postalCode"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Postal Code
            </label>

            <div class="">
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="E6 5NE"
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

          <!--  Email Address -->
          <div class="mb-4">
            <label
              for="email"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Email Address
            </label>

            <div class="">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="johnsmith@gmail.com"
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
          <!--  Last Name ( As per your Passport ) -->
          <div class="mb-4">
            <label
              for="lastName"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Last Name ( As per your Passport )
            </label>

            <div class="">
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Smith"
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

          <!-- Gender -->
          <div class="mb-4">
            <label
              for="gender"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Gender
            </label>
            <div class="flex flex-wrap items-center">
              <div class="mr-4">
                <input type="radio" id="Male" name="gender" value="Male" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Male"
                  >Male</label
                >
              </div>
              <div class="mr-4">
                <input type="radio" id="Female" name="gender" value="Female" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Female"
                  >Female</label
                >
              </div>
              <div class="mr-4">
                <input type="radio" id="Other" name="gender" value="Other" />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Other"
                  >Other</label
                >
              </div>
              <div class="mr-4">
                <input
                  type="radio"
                  id="Prefer Not To Say"
                  name="gender"
                  value="Prefer Not To Say"
                />
                <label
                  class="
                    ml-0.5
                    sm:ml-2
                    text-dark-10 text-sm
                    sm:text-base
                    md:text-lg
                  "
                  for="Prefer Not To Say"
                  >Prefer Not To Say</label
                >
              </div>
            </div>
          </div>

          <!--  Country of Birth -->
          <div class="relative mb-4">
            <label
              class="block text-dark-10 font-medium text-sm sm:text-base mb-2"
              for="countryofbirth"
            >
              Country of Birth
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
              name="countryofbirth"
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

          <!--  Permanent Address -->
          <div class="mb-4">
            <label
              for="permanentaddress"
              class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >
              Permanent Address
            </label>

            <div class="">
              <input
                id="permanentaddress"
                name="permanentaddress"
                type="text"
                placeholder="House/Flat No, ABC Street, City"
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

          <!--  Mobile Number -->
          <div class="">
            <label
              class="block text-dark-10 font-medium text-sm sm:text-base mb-2"
              for="name"
            >
              Mobile Number
            </label>
            <div class="flex space-x-3">
              <input
                class="
                  py-3
                  px-6
                  text-sm
                  sm:text-base
                  w-20
                  bg-light-10
                  text-dark-10
                  border-0
                  focus:outline-none
                  rounded-lg
                "
                name="phn"
                placeholder="+44"
                type="text"
              />
              <input
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
                "
                name="number"
                placeholder="XXXXXXXXXX"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-calendar-picker-indicator {
  color: orange;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -10;
  right: 0;
  opacity: 0;
}
</style>