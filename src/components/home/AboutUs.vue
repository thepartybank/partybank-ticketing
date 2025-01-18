<template>
  <div class="flex flex-col items-center mt-8 lg:mt-16">
    <p class="bg-secondary-red font-redHat text-sm rounded-full px-3 py-1 mb-4 lg:mb-7">About us</p>

    <div
      class="font-redHat font-medium text-[20px] lg:text-5xl flex flex-col items-center lg:space-y-2 space-y-1"
    >
      <p class="">At partybank, we’re all about</p>
      <div class="flex gap-1 items-center">
        <img src="/images/side_1.webp" alt="" class="w-[70px] lg:w-[initial]" />
        <p>enhancing the way events</p>
        <img src="/images/side_2.webp" alt="" class="hidden lg:block" />
      </div>

      <p class="hidden lg:block">like parties, festivals, concert, and</p>

      <p class="block lg:hidden">
        <span class="flex">
          <img src="/images/side_2.webp" alt="" class="w-[70px] h-[34px] lg:w-[initial]" />

          like parties, festivals, concert
        </span>
      </p>

      <p class="flex lg:hidden items-center gap-1">
        <span> and large gatherings </span>

        <img src="/images/side_3.webp" alt="" class="w-[70px] h-[30px]" />

        <span>are</span>
      </p>

      <div class="hidden lg:flex items-center gap-2">
        <p>large gatherings</p>
        <img src="/images/side_3.webp" alt="" />

        <p>are organized</p>
      </div>

      <p class="hidden lg:block">and experienced</p>
      <p class="block lg:hidden">organized and experienced</p>
    </div>
    <button class="bg-primary-red text-white p-3 px-5 rounded-full mt-5 lg:mt-11">
      More about partybank
    </button>
  </div>
</template>
<script lang="ts" setup></script>
<style></style>
