import { _ as _export_sfc, g as resolveComponent, o as openBlock, c as createElementBlock, e as createVNode, F as Fragment, h as renderList, a as createBaseVNode, t as toDisplayString, f as createApp } from "./_plugin-vue_export-helper-33dc0e52.js";
import { H as Header } from "./header-e0e00a83.js";
import "./helpers-e7c00713.js";
const indexApp_vue_vue_type_style_index_0_scoped_98c95792_lang = "";
const _sfc_main = {
  components: {
    Header
  },
  data() {
    return {
      pageList: [
        {
          "page-name": "index",
          url: "./index.html"
        },
        {
          "page-name": "map",
          url: "./map.html"
        },
        {
          "page-name": "bs5",
          url: "./bs5-demo.html"
        },
        {
          "page-name": "bs5-2",
          url: "./bs5-demo-2.html"
        },
        {
          "page-name": "leaflet-map",
          url: "./leaflet-map-demo.html"
        }
      ]
    };
  },
  methods: {
    add1: function() {
      this.count++;
    }
  }
};
const _hoisted_1 = { class: "container" };
const _hoisted_2 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Header, { title: "index page" }),
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.pageList, (obj, idx) => {
      return openBlock(), createElementBlock("div", { key: idx }, [
        createBaseVNode("a", {
          href: obj.url
        }, toDisplayString(obj["page-name"]), 9, _hoisted_2)
      ]);
    }), 128))
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-98c95792"]]);
createApp(App).mount("#app");
