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
            <div class="flex space-x-6 sm:space-x-10 items-center">
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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

          <!--  First Name ( As Per Your Passport ) -->
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
        </div>
        <div class="max-w-md">
          <label
            for="name"
            class="mb-2 text-sm sm:text-base md:text-lg text-dark-10"
            >Mode of Study</label
          >
          <div class="mb-3">
            <input
              type="radio"
              id="fulltime"
              name="modelofstudy"
              value="fulltime"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="fulltime"
              >Full-Time ( 01 Year )</label
            >
          </div>
          <div class="mb-3">
            <input
              type="radio"
              id="fulltimeplaceyear"
              name="modelofstudy"
              value="fulltimeplaceyear"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="fulltimeplaceyear"
              >Full-Time With Placement Year ( 02 Years )</label
            >
          </div>
          <div class="mb-3">
            <input
              type="radio"
              id="parttime"
              name="modelofstudy"
              value="parttime"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="parttime"
              >Part Time</label
            >
          </div>
          <div class="mb-3">
            <input
              type="radio"
              id="modelofstudy"
              name="modelofstudy"
              value="modelofstudy"
            />
            <label
              class="
                ml-0.5
                sm:ml-2
                text-dark-10 text-sm
                sm:text-base
                md:text-lg
              "
              for="modelofstudy"
              >Online/Distance Learning</label
            >
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