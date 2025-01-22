<template>
  <section class="relative w-full overflow-hidden pl-4 md:pl-14">
    <!-- Section Header -->
    <div class="rounded-lg">
      <h3
        class="text-base font-normal font-redHat leading-[22.4px] bg-[#FEEFF2] mb-8 inline-flex h-8 px-3 rounded-full items-center"
      >
        Most Recent Reviews
      </h3>
    </div>

    <!-- Reviews Carousel -->
    <article class="flex flex-col md:flex-row md:flex-shrink-0 gap-8">
      <!-- Review Cards -->
      <div
        class="w-full min-w-[320px] md:min-w-[650px] relative px-3"
        v-for="(review, index) in visibleReviews"
        :key="index"
      >
        <StarRating :rating="review.rating" class="mb-5" />

        <p class="max-w-[632px] font-redHat text-lg md:text-xl font-medium leading-8">
          “{{ review.text }}”
        </p>

        <div class="flex items-center gap-3 mt-5">
          <img :src="review.avatar" alt="" class="w-14 h-14 md:w-[86px] md:h-[86px]" />
          <span class="text-base md:text-lg font-medium">{{ review.name }}</span>
        </div>
      </div>

      <div
        class="w-full min-w-[320px] md:min-w-[650px] relative opacity-25 hidden md:block"
        v-for="(review, index) in invinsibleReviews"
        :key="index"
      >
        <StarRating :rating="review.rating" class="mb-5" />

        <p class="max-w-[632px] font-redHat text-lg md:text-xl font-medium leading-8">
          “{{ review.text }}”
        </p>

        <div class="flex items-center gap-3 mt-5">
          <img :src="review.avatar" alt="" class="w-14 h-14 md:w-[86px] md:h-[86px]" />
          <span class="text-base md:text-lg font-medium">{{ review.name }}</span>
        </div>
      </div>
    </article>

    <!-- Navigation Buttons -->
    <div class="flex gap-4 mt-4 md:mt-12 px-3">
      <button @click="goToPrev" class=" ">
        <img src="/icons/prev.svg" alt="Previous" />
      </button>
      <button @click="goToNext" class="">
        <img src="/icons/next.svg" alt="Next" />
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import StarRating from './StarRating.vue'

// Review interface
interface Review {
  text: string
  name: string
  avatar: string
  rating: number
  id: number
}

// Reviews data
const reviews = ref<Review[]>([
  {
    text: 'When I first used Partybank, the smooth booking process stood out for me. Also, the Partybank workers that were checking in helped in making me love it more, and it seems like a reliable platform. I would tell people about it.',
    name: 'Wade Warren',
    avatar: '/images/avatar_1.svg',
    rating: 5,
    id: 0,
  },
  {
    text: 'When I first used Partybank, the smooth booking process stood out for me. Also, the Partybank workers that were checking in helped in making me love it more, and it seems like a reliable platform. I would tell people about it.',
    name: 'Arlene McCoy',
    avatar: '/images/avatar_1.svg',
    rating: 5,
    id: 1,
  },
  {
    text: "I loved it! Partybank's interface was super user-friendly to me. It looks like a professional organization.",
    name: 'Leslie Alexander',
    avatar: '/images/avatar_1.svg',
    rating: 5,
    id: 2,
  },
])

const currentIndex = ref(0)

// Handlers for navigating reviews
const goToNext = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.value.length
}

const goToPrev = () => {
  currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length
}

// Computed for visible reviews
const visibleReviews = computed(() => {
  return reviews.value.slice(currentIndex.value, currentIndex.value + 1)
})

const invinsibleReviews = computed(() => {
  return reviews.value.filter((each) => each.id !== reviews.value[currentIndex.value].id)
})
</script>
