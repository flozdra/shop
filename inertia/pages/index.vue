<script setup lang="ts">
import type { Restaurant } from '~/types/serialized'

defineProps<{ restaurants: Restaurant[] }>()
</script>

<template>
  <div>
    <h1>Welcome</h1>
    <p>Restaurants:</p>
    <p>{{ restaurants }}</p>
  </div>
</template>
