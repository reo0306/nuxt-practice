<script setup lang="ts">
//import type {Member} from "../../interfaces";

const PAGE_TITLE = "会員リスト";
definePageMeta({
    layout: "member"
});
useHead({
    title: PAGE_TITLE,
})

const asyncData = useLazyFetch("/api/getMemberList");
const memberList = asyncData.data;
const pending = asyncData.pending;
</script>

<template>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li>{{ PAGE_TITLE }}</li>
        </ul>
    </nav>
    <section>
        <h2>{{ PAGE_TITLE }}</h2>
        <p>新規登録は<NuxtLink v-bind:to="{name: 'member-memberList-memberAdd'}">こちら</NuxtLink>から</p>
        <p v-if="pending">データ取得中⋯</p>
        <section v-else>
            <ul>
                <li 
                v-for="member in memberList"
                v-bind:key="member.id">
                <NuxtLink v-bind:to="{name: 'member-memberList-memberDetail-id', params: {id: member.id}}">
                    IDが{{ member.id }}の{{ member.name }}さん
                </NuxtLink>
                </li>
            </ul>
        </section>
        <NuxtPage />
    </section>
</template>