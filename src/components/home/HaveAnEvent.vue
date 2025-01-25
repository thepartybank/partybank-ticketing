<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 gap-8 md:gap-4 lg:gap-5 mt-16 lg:mt-24 relative"
  >
    <div
      class="bg-primary-red text-white rounded-[20px] lg:pl-14 pt-8 md:pt-14 pb-6 px-4 md:px-6 sm:min-h-[443px] md:min-h-[466px]"
    >
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-redHat font-medium">
        Have an <br class="hidden sm:block" />
        event?
      </h2>
      <p
        class="font-redHat font-normal text-sm lg:text-[17px] leading-7 tracking-[-0.36px] lg:w-[400px] mt-5 lg:mt-8"
      >
        Effortlessly organize, create, and manage all your events in one place. With our seamless
        event creation platform, designed specifically for event organizers, you can plan, track,
        and bring your vision to life — all in just a few clicks.
      </p>

      <button
        class="bg-white rounded-full text-primary-red py-3 w-full mt-10 md:mt-14 2xl:mt-[70px] sm:w-[236px] h-12"
      >
        Create an event
      </button>
    </div>

    <div
      class="relative bg-[url('/images/human_1.svg')] bg-cover bg-no-repeat rounded-[10px] bg-center h-[330px] md:h-auto w-full"
    >
      <picture>
        <source srcset="/images/frame_1.svg" media="(min-width: 768px)" class="" />
        <source srcset="/images/frame_m_1.svg" media="(max-width: 767px)" class="" />
        <img
          src="/images/frame_1.svg"
          alt="Top Right Image"
          class="absolute -top-16 -left-10 lg:-left-10 md:-left-12 z-10 scale-75 md:scale-[80%] lg:scale-[85%]"
        />
      </picture>

      <picture>
        <source srcset="/images/frame_2.svg" media="(min-width: 768px)" />
        <source srcset="/images/frame_m_2.svg" media="(max-width: 767px)" />
        <img
          src="/images/frame_2.svg"
          alt="Bottom Left Image"
          class="absolute -bottom-20 -right-10 z-10 scale-75 md:scale-[80%] lg:scale-[85%] md:-right-11 lg:-right-12"
        />
      </picture>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
