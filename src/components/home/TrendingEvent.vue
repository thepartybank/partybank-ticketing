<template>
  <section class="flex flex-col items-center mt-8 lg:mt-16">
    <p class="bg-secondary-red font-redHat text-sm rounded-full px-3 py-1 mb-4 lg:mb-7">Events</p>

    <h2 class="text-4xl md:text-5xl mb-14">Trending Events</h2>

    <div class="relative w-full overflow-hidden py-10">
      <!-- Slider Wrapper -->
      <div
        class="flex items-center transition-transform duration-500 ease-in-out"
        :class="{
          '-translate-x-[-3%] md:-translate-x-[-3%]': currentIndex === 0,
          '-translate-x-[75%] md:-translate-x-[40%]': currentIndex === 1,

          '-translate-x-[150%] sm:-translate-x-[136%] md:-translate-x-[80%] xl:-translate-x-[80%] lg:-translate-x-[105%]':
            currentIndex === 2,
        }"
        ref="slider"
      >
        <!-- Slider Cards -->
        <div
          v-for="(item, index) in items"
          :key="index"
          class="shrink-0 w-full max-w-[309px] xl:max-w-[846px] sm:max-w-[506px] sm:max-h-[457px] max-h-[419px] xl:max-h-[707px] lg:max-h-[607px] lg:max-w-[706px] relative"
          :class="{
            'scale-100 z-10 h-[707px]': index === currentIndex,
            'scale-90 h-[607px]': index !== currentIndex,
          }"
        >
          <div class="relative w-full h-full">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover rounded-[30px]"
            />
            <div class="absolute left-4 right-4 p-4 bg-white text-black rounded-[30px] bottom-4">
              <h3 class="text-lg font-bold">{{ item.title }}</h3>
              <p class="text-sm">{{ item.date }}</p>
              <p class="text-sm">{{ item.location }}</p>
              <p class="text-sm">From {{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->

      <button class="text-black px-4 py-2 rounded absolute -bottom-2 left-[12%]" @click="prevSlide">
        PREV <img src="" alt="" />
      </button>
      <button
        class="text-black px-4 py-2 rounded absolute -bottom-2 right-[15%]"
        @click="nextSlide"
      >
        NEXT
      </button>
    </div>
  </section>

  <div class="flex justify-center pb-10 mt-5">
    <button class="bg-primary-red rounded-full text-white h-10 md:h-14 px-9 md:px-16">
      See all events
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Item {
  title: string
  date: string
  location: string
  price: string
  image: string
}

// Mock slider items
const items: Item[] = [
  {
    title: 'Wave Amapiano Party',
    date: 'Wed, Aug 7, 2024, 11:00 PM WAT',
    location: 'Lagos, Nigeria',
    price: 'NGN 10,000.00',
    image: 'images/banner_1.svg',
  },
  {
    title: 'Everything Tymlez',
    date: 'Sat, Aug 22, 2024, 8:00 PM WAT',
    location: 'Lagos, Nigeria',
    price: 'NGN 15,000.00',
    image: 'images/banner_2.svg',
  },
  {
    title: 'Lagos Vibe Party',
    date: 'Fri, Sep 5, 2024, 10:00 PM WAT',
    location: 'Lagos, Nigeria',
    price: 'NGN 5,000.00',
    image: 'images/banner_3.svg',
  },
]

const currentIndex = ref(1)

const prevSlide = () => {
  currentIndex.value = Math.max(0, currentIndex.value - 1)
}

const nextSlide = () => {
  const maxIndex = items.length - 1
  currentIndex.value = Math.min(maxIndex, currentIndex.value + 1)
}
</script>
