const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish th course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');