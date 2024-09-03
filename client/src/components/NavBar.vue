<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ping">Ping</router-link>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
