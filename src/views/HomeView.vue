<script setup lang="ts">
import AboutUs from '@/components/home/AboutUs.vue'
import BannerComponent from '@/components/home/BannerComponent.vue'

import HaveAnEvent from '@/components/home/HaveAnEvent.vue'
import PartnersComponent from '@/components/home/PartnersComponent.vue'

import ScrollingCarousel from '@/components/home/ScrollingCarousel.vue'

const carouselImages = [
  '/images/img_1.webp',
  '/images/img_2.webp',
  '/images/img_3.webp',
  '/images/img_4.webp',
]
</script>

<template>
  <BannerComponent />

  <ScrollingCarousel :images="carouselImages" :scrollSpeed="15" />

  <AboutUs />

  <HaveAnEvent />
  <PartnersComponent />
</template>
