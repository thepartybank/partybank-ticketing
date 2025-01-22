<script setup lang="ts">
import AboutUs from '@/components/home/AboutUs.vue'
import BannerComponent from '@/components/home/BannerComponent.vue'

import HaveAnEvent from '@/components/home/HaveAnEvent.vue'
import PartnersComponent from '@/components/home/PartnersComponent.vue'
import ReviewsComponent from '@/components/home/ReviewsComponent.vue'

import ScrollingCarousel from '@/components/home/ScrollingCarousel.vue'

import TrendingEvent from '@/components/home/TrendingEvent.vue'

import ExperienceBanner from '@/components/home/ExperienceBanner.vue'

import FooterComponent from '@/components/shared/FooterComponent.vue'

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
  <TrendingEvent />

  <ReviewsComponent />

  <ExperienceBanner />

  <FooterComponent />
</template>
