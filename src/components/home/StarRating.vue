<template>
  <div class="flex gap-[6px]">
    <img src="/icons/dark-star.svg" alt="" v-for="i in rating" :key="i" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const { rating } = defineProps(['rating'])
</script>
