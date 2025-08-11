<script setup lang="ts">
import type {Member} from "@/interfaces";

const PAGE_TITLE = "会員リスト";
definePageMeta({
    layout: "member",
    middleware: ["loggedin-check"],
});
useHead({
    title: PAGE_TITLE,
})

const asyncData = useLazyFetch("/member-management/members");
const responseData = asyncData.data;
const pending = asyncData.pending;
const memberList = computed(
    (): Member[] => {
        let returnList: Member[] = [];
        if (responseData.value != null) {
            returnList = responseData.value.data;
        }
        return returnList;
    }
);
const isEmptyList = computed(
    (): boolean => {
        return memberList.value.length == 0;
    }
)
const noServerError = computed(
    (): boolean => {
        let returnVal = false;
        if (asyncData.error.value == null && responseData.value != null && responseData.value.result == 1) {
            returnVal = true;
        }
        return returnVal;
    }
);
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
        <template v-else>
            <section v-if="noServerError">
                <ul>
                    <li v-if="isEmptyList">会員情報は存在しません</li>
                    <li 
                    v-for="member in memberList"
                    v-bind:key="member.id">
                    <NuxtLink v-bind:to="{name: 'member-memberList-memberDetail-id', params: {id: member.id}}">
                        IDが{{ member.id }}の{{ member.name }}さん
                    </NuxtLink>
                    </li>
                </ul>
            </section>
            <p v-else>サーバからデータ取得中に障害が発生しました</p>
        </template>
        <NuxtPage />
    </section>
</template>