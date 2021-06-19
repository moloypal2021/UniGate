import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Submit from "../views/Submit.vue";
import ApplicationForm from "../views/ApplicationForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit,
  },
  {
    path: "/application-form",
    name: "ApplicationForm",
    component: ApplicationForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
