import { _ as _export_sfc, r as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, p as pushScopeId, b as popScopeId, d as createTextVNode, e as createVNode, f as createApp } from "./plugin-vueexport-helper-33dc0e52.js";
const style = "";
const _imports_0 = "" + new URL("../vite.svg", import.meta.url).href;
const _imports_1 = "" + new URL("vue-5532db34.svg", import.meta.url).href;
const HelloWorld_vue_vue_type_style_index_0_scoped_4b8d1567_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-4b8d1567"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "card" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Edit "),
  /* @__PURE__ */ createBaseVNode("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ createTextVNode(" to test HMR ")
], -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Check out "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ createTextVNode(", the official Vue + Vite starter ")
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Install "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ createTextVNode(" in your IDE for a better DX ")
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
const _sfc_main$1 = {
  __name: "HelloWorld",
  props: {
    msg: String
  },
  setup(__props) {
    const count = ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, toDisplayString(__props.msg), 1),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("button", {
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
          }, "count is " + toDisplayString(count.value), 1),
          _hoisted_2
        ]),
        _hoisted_3,
        _hoisted_4,
        _hoisted_5
      ], 64);
    };
  }
};
const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4b8d1567"]]);
const App_vue_vue_type_style_index_0_scoped_d6420450_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-d6420450"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://vitejs.dev",
    target: "_blank"
  }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      class: "logo",
      alt: "Vite logo"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://vuejs.org/",
    target: "_blank"
  }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_1,
      class: "logo vue",
      alt: "Vue logo"
    })
  ])
], -1));
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createVNode(HelloWorld, { msg: "Vite + Vue" })
      ], 64);
    };
  }
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6420450"]]);
createApp(App).mount("#app");
