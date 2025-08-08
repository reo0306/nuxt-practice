<script setup lang="ts">
import type { City } from '~/interfaces';

const config = useRuntimeConfig();
const route = useRoute();

const cityList = useState<Map<number, City>>("cityList");
const selectedCityId = ref(1853909);
const selectedCityInit = cityList.value.get(selectedCityId.value) as City;
const selectedCity = ref(selectedCityInit);

const params: {
    lang: string,
    q: string,
    appid: string,
} = 
{
    lang: "ja",
    q: selectedCity.value.q,
    appid: config.public.openWeatherApiKey,
};

const asyncData = await useLazyFetch(
    "https://api.openweathermap.org/data/2.5/weather",
    {
        key: `/WeatherInfo/${route.params.id}`,
        query: params,
        transform: (data: any): string => {
            const weatherArray = data.weather;
            const weather = weatherArray[0];
            return weather.description;
        }
    }
);
const pending = asyncData.pending;
const weatherDescription = asyncData.data;
const refresh = asyncData.refresh;

const onCityChanged = () => {
    selectedCity.value = cityList.value.get(selectedCityId.value) as City;
    refresh();
}
</script>

<template>
    <section>
        <label>
            表示するお天気ポイント
            <select v-model="selectedCityId" v-on:change="onCityChanged">
                <option v-for="[id, city] in cityList" v-bind:key="id" v-bind:value="id">
                    {{ city.name }}
                </option>
            </select>
        </label>
    </section>
    <p v-if="pending">データ取得中⋯</p>
    <section v-else>
        <h2>{{ selectedCity.name }}の天気</h2>
        <p>{{  weatherDescription }}</p>
    </section>
</template>