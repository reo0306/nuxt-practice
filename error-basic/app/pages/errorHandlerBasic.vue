<script setup lang="ts">
const onResetButtonClick = (clearError: () => void) => {
    clearError();
}
</script>

<template>
    <NuxtErrorBoundary>
        <ErrorGeneratorBasic/>
        <template v-slot:error="{error, clearError}">
            <p>エラーが発生しました</p>
            <p>{{ error }}</p>
            <button v-on:click="onResetButtonClick(clearError)">エラーを解消</button>
        </template>
    </NuxtErrorBoundary>
    <p>
        <NuxtLink v-bind:to="{name: 'index'}">
        戻る
        </NuxtLink>
    </p>
</template>