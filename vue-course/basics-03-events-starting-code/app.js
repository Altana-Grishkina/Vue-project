// regular JavaScript
// document.querySelector('button').addEventListener()

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events');
