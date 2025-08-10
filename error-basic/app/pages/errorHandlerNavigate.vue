<script setup lang="ts">
const onResetButtonClick = async (clearError: () => void): Promise<void> => {
    await navigateTo("/");
    clearError();
}
</script>

<template>
    <NuxtErrorBoundary>
        <ErrorGeneratorImmediate/>
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