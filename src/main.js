import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Rego from '@open-policy-agent/opa-wasm';
import wasm from './assets/policy.wasm';

Vue.config.productionTip = false;

const rego = new Rego();
rego.load_policy(wasm).then(policy => {
  Vue.prototype.$policy = policy;

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app');
});
