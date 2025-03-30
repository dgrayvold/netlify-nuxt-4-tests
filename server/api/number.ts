export default defineEventHandler(() => {
    console.log('Number endpoint run');

    return Math.floor(Math.random() * 100);
})