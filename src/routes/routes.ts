import { createMemoryHistory, createRouter } from "vue-router";
import FormPage from "../pages/FormPage.vue";
import PreviewPage from "../pages/PreviewPage.vue";

const routes = [
  { path: "/", component: FormPage },
  { path: "/preview", component: PreviewPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
