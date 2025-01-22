<template>
  <footer class="bg-black mt-20 text-white py-6 sm:h-[388px]">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col h-full">
      <div class="flex flex-col sm:flex-row justify-between sm:items-start sm:pt-20">
        <!-- Logo and Description -->
        <div class="text-left mb-6 sm:mb-0">
          <div>
            <img src="/icons/logo-dark.svg" alt="" />
          </div>
          <p class="mt-2 text-sm sm:text-xl font-normal font-redHat">
            PartyBank is an event ticketing platform <br class="hidden md:block" />
            for unforgettable experiences.
          </p>
        </div>

        <!-- Navigation Links -->
        <div
          class="grid grid-cols-2 md:grid-cols-3 gap-x-8 sm:gap-x-28 gap-y-4 text-sm sm:text-base"
        >
          <!-- Product Links -->
          <div>
            <h2 class="font-bold text-base text-secondary-heading">Product</h2>
            <ul class="mt-2 space-y-2">
              <li><a href="#" class="hover:text-pink-500">Create Event</a></li>
              <li><a href="#" class="hover:text-pink-500">Attend Event</a></li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h2 class="font-bold text-base text-secondary-heading">Company</h2>
            <ul class="mt-2 space-y-2">
              <li><a href="#" class="hover:text-pink-500">About Us</a></li>
              <li><a href="#" class="hover:text-pink-500">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-pink-500">Terms and Condition</a></li>
            </ul>
          </div>

          <!-- Support Links -->
          <div>
            <h2 class="font-bold text-base text-secondary-heading font-redHat">Support</h2>
            <ul class="mt-2 space-y-2">
              <li><a href="#" class="hover:text-pink-500">Email Us</a></li>
              <li><a href="#" class="hover:text-pink-500">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div
        class="text-center sm:text-sm pt-4 text-white opacity-75 font-bold text-xs sm:opacity-100 mt-auto"
      >
        <p>&copy; {{ currentYear }} PartyBank | All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
// Reactive state for the current year
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
