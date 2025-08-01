<script setup lang="ts">
import type {Member} from "../interfaces";

const memberList = useState<Map<number, Member>>("memberList");
const totalPoints = computed(
    (): number => {
        let total = 0;
        for (const member of memberList.value.values()) {
            total += member.points;
        }
        return total;
    }
);
</script>

<template>
    <section class="list">
        <h1>会員リスト</h1>
        <p>全会員の保有ポイントの合計: {{ totalPoints }}</p>
        <OneMember
            v-for="id in memberList.keys()"
            v-bind:key="id"
            v-bind:id="id"/>
    </section>
</template>

<style scoped>
.list {
    border: orange 1px dashed;
    margin: 10px;
}
</style>