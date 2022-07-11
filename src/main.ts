import { createApp } from "vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import "./styles/style.scss";
import router from "./router/index";
import store from "./store/index";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd);
app.mount("#app");
