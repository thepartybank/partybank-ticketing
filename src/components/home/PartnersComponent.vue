<template lang="">
  <section class="font-redHat text-2xl leading-[46px] md:text-4xl text-center">
    <p class="text-secondary-text font-bold mt-24 lg:mt-40 mb-10 lg:mb-12">
      A few of our awesome partners
    </p>

    <div class="flex flex-wrap justify-center gap-10 lg:gap-20">
      <img v-for="image in images" :key="image" :src="image" class="" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const images = ref([
  '/images/partner_1.svg',
  '/images/partner_2.svg',
  '/images/partner_3.svg',
  '/images/partner_4.svg',
  '/images/partner_5.svg',
])
</script>
