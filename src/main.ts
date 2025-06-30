import { createApp } from "@wearesage/vue";
import * as generatedRoutes from "./router/generated-routes";
import App from "./App.vue";

// 🔥 SAGE ROUTER - NO MORE VUE ROUTER BULLSHIT!
// Routes are auto-generated from src/pages/**/*.vue
// Auth checking is pure reactive in Root.vue

// Pass the generated routes to createApp
await createApp(App, { routes: generatedRoutes });
