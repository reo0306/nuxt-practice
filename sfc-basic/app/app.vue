<script setup lang="ts">
const msg = ref("まだ");
const onButtonClick = (label: string, event: Event): void => {
  const target = event.target as HTMLButtonElement;
  const text = target.innerHTML;
  msg.value = `${label}と${text}`;
};
const url = "test";
</script>

<template>
  <p>{{ msg }}</p>
  <button v-on:click="onButtonClick('Hello', $event)">こんにちは</button>
  <a v-bind:href="url" target="_blank">Nuxt.jsのサイト</a>
</template>
