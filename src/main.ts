import { createApp } from "@wearesage/vue";
import * as generatedRoutes from "./router/generated-routes";
import App from "./App.vue";

await createApp(App, { routes: generatedRoutes });
