import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: PageViewer },
    { path: "/create", component: CreatePage },
  ],
});

export default router;
