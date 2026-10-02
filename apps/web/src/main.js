import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import App from './App.vue';
import router from './router';
createApp(App).use(createVuetify({ components, directives, theme: { defaultTheme: 'light' } })).use(router).mount('#app');
