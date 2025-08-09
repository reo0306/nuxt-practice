<script setup lang="ts">
//import type {Member} from "~/interfaces";

const PAGE_TITLE = "会員詳細情報";
definePageMeta({
    layout: "member"
});
useHead({
    title: PAGE_TITLE,
});
const route = useRoute();
const asyncData = useLazyFetch(
    "/api/getOneMemberInfo",
    {
        query: {id: route.params.id}
    }
);
const member = asyncData.data;
const pending = asyncData.pending;
const localNote = computed(
    (): string => {
        let localNote = "--";
        if (member.value != null && member.value.note != undefined) {
            localNote = member.value.note;
        }
        return localNote;
    }
);
</script>

<template>
    <section>
        <h2>{{ PAGE_TITLE }}</h2>
        <p v-if="pending">データ取得中⋯</p>
        <dl v-else>
            <dt>ID</dt>
            <dd>{{ member?.id }}</dd>
            <dt>名前</dt>
            <dd>{{ member?.name }}</dd>
            <dt>メールアドレス</dt>
            <dd>{{ member?.email }}</dd>
            <dt>保有ポイント</dt>
            <dd>{{ member?.points }}</dd>
            <dt>備考</dt>
            <dd>{{ localNote }}</dd>
        </dl>
    </section>
</template>