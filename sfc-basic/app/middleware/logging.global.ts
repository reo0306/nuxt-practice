export default defineNuxtRouteMiddleware(
    (to, from) => {
        console.log(`還元元: ${from.fullPath}\n遷移先: ${to.fullPath}`);
        return;
    }
);