import { _ as _export_sfc, g as resolveComponent, o as openBlock, c as createElementBlock, e as createVNode, a as createBaseVNode, t as toDisplayString, f as createApp } from "./_plugin-vue_export-helper-33dc0e52.js";
import { H as Header } from "./header-e0e00a83.js";
import { F as Footer } from "./footer-e2c0c10b.js";
const mapApp_vue_vue_type_style_index_0_scoped_bfa6835a_lang = "";
const _sfc_main = {
  //using components - 02
  components: {
    Header,
    FooterPart: Footer
  },
  //using components - 02
  data() {
    return {
      count: 0
    };
  },
  methods: {
    add1: function() {
      this.count++;
    }
  }
};
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "highlight" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_footer_part = resolveComponent("footer-part");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Header, { title: "map page" }),
    createBaseVNode("div", _hoisted_2, toDisplayString($data.count), 1),
    createBaseVNode("a", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.add1 && $options.add1(...args))
    }, "Add 1"),
    createVNode(_component_footer_part)
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bfa6835a"]]);
createApp(App).mount("#app");
