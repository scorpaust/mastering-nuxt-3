<template>
  <NuxtLink class="underline font-medium" :href="firstLesson.path">
    Go to first lesson
  </NuxtLink>
</template>

<script setup lang="ts">
import { OutlineLesson } from "~~/types/course";

const firstLesson: OutlineLesson = await useFirstLesson();
</script>
