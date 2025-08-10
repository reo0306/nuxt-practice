export default defineEventHandler(
    (event): never => {
        throw createError("サーバー側のエラー発生。");
    }
);