<template>
  <div class="bg-white shadow py-1">
    <nav
      class="
        container
        relative
        lg:flex
        lg:items-center
        w-full
        xl:max-w-7xl
        mx-auto
        xl:px-6
        sm:px-8
        px-4
      "
    >
      <div class="flex flex-no-shrink items-center h-20">
        <!-- Logo  -->
        <a
          href="./index.html"
          class="
            flex-no-grow flex-no-shrink
            relative
            py-2
            px-4
            pl-0
            leading-normal
            text-black
            dark:text-white
            no-underline
            flex
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 sm:h-6 md:h-7 lg:h-8"
            viewBox="0 0 387.619 44.354"
          >
            <g data-name="Group 2">
              <g data-name="Group 1">
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path
                      data-name="Path 1"
                      d="M9.388 23.143c0 3.26-.677 6.411.17 9.077 1.087 3.4.388 6.672.724 9.975a1.77 1.77 0 01-1.7 2.148 1.692 1.692 0 01-2.039-1.782c-.058-2.774-.608-5.734.156-8.28 1.065-3.553.395-7.03.724-10.5a1.668 1.668 0 00-1.344-1.963c-1.923-.7-3.792-1.528-6.085-2.467 1.547-.659 2.756-1.206 3.984-1.7Q19.436 11.465 34.9 5.326a3.877 3.877 0 012.566-.177c11.449 4.502 22.865 9.084 34.285 13.652.264.105.511.261 1.1.569-3.5 1.413-6.708 2.713-9.924 3.984-1.956.786-3.955 1.485-5.857 2.387a2.351 2.351 0 00-1.136 1.66c-.134 2.228.022 4.47-.1 6.7a2.814 2.814 0 01-.971 1.9c-10.294 7.657-26.346 7.7-36.687.08a3.057 3.057 0 01-1.04-2.039c-.138-2.173 0-4.346-.1-6.52a2.2 2.2 0 00-.913-1.655c-2.07-.946-4.223-1.725-6.735-2.724z"
                      fill="#484848"
                    />
                  </g>
                </g>
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path
                      data-name="Path 1"
                      d="M34.906 5.326a3.877 3.877 0 012.56-.177c11.449 4.5 22.866 9.084 34.286 13.655.264.105.511.261 1.1.569-3.5 1.413-6.708 2.713-9.924 3.984-1.956.786-3.955 1.485-5.857 2.387a2.351 2.351 0 00-1.141 1.659c-.134 2.228.022 4.47-.1 6.7a2.814 2.814 0 01-.971 1.9C44.569 43.654 24.597 9.419 34.906 5.326z"
                      fill="#576dff"
                    />
                  </g>
                </g>
              </g>
              <text
                transform="translate(82.618 36)"
                fill="#576dff"
                font-size="33"
                font-family="SegoeUI-Bold, Segoe UI"
                font-weight="700"
              >
                <tspan x="0" y="0">Unigate</tspan>
                <tspan y="0" fill="#484848">Consultants</tspan>
              </text>
            </g>
          </svg>
        </a>

        <!-- Menu Button -->
        <button
          @click="navbarOpen = !navbarOpen"
          class="
            block
            lg:hidden
            cursor-pointer
            relative
            w-12
            h-12
            px-4
            py-2
            ml-auto
            focus:outline-none
          "
        >
          <svg
            v-if="!navbarOpen"
            class="fill-current text-black w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            v-if="navbarOpen"
            class="fill-current text-black w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
      <div class="ml-auto" :class="{ 'hidden lg:block': navbarOpen === false }">
        <!-- Menus SLot -->
        <slot></slot>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    navbarOpen: false,
  }),
};
</script>
