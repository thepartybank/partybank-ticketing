<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const isMenuOpen = ref(false)

const router = useRouter()

function closeMenu() {
  isMenuOpen.value = false
}

function closeMenuAndNavigate(path: string) {
  router.push(path)
  isMenuOpen.value = false
}
</script>

<template>
  <nav
    class="flex items-center justify-between px-4 py-6 border-b md:px-8 md:pt-7 md:pb-5 md:pl-14 md:pr-16 font-redHat font-semibold"
  >
    <!-- Logo -->
    <div class="flex items-center space-x-2 cursor-pointer" @click="closeMenuAndNavigate('/')">
      <img src="/images/logo.webp" alt="Party Bank Logo" class="h-8 w-auto" />
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-6 xl:space-x-24 text-gray-800">
      <li>
        <RouterLink to="/about-us" class="hover:text-red-500 leading-5 font-semibold font-redHat"
          >About Us</RouterLink
        >
      </li>
      <li>
        <RouterLink
          to="/create-events"
          class="hover:text-red-500 leading-5 font-semibold font-redHat"
          >Create Events</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/faqs" class="hover:text-red-500 leading-5 font-semibold font-redHat"
          >FAQs</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/contact-us" class="hover:text-red-500 leading-5 font-semibold font-redHat"
          >Contact Us</RouterLink
        >
      </li>
    </ul>

    <!-- Create Event Button (Desktop) -->
    <div class="hidden md:block">
      <button
        class="px-4 py-2 text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 font-bold text-xl font-redHat"
        @click="router.push('/create-events')"
      >
        Create an event
      </button>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      class="flex items-center p-2 border rounded-md md:hidden"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span class="sr-only">Open Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute top-[74px] left-0 w-full bg-white shadow-md md:hidden">
      <ul class="flex flex-col items-center py-4 space-y-4 text-gray-800">
        <li>
          <RouterLink to="/about-us" class="hover:text-red-500" @click="closeMenu"
            >About Us</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/create-events" class="hover:text-red-500" @click="closeMenu"
            >Create Events</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/faqs" class="hover:text-red-500" @click="closeMenu">FAQs</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact-us" class="hover:text-red-500" @click="closeMenu"
            >Contact Us</RouterLink
          >
        </li>
        <li>
          <button
            @click="closeMenuAndNavigate('/create-events')"
            class="px-4 py-2 text-white bg-primary-red rounded-full shadow-md hover:bg-red-600"
          >
            Create an event
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
