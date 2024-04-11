import { _ as _export_sfc, o as openBlock, c as createElementBlock, F as Fragment, h as renderList, a as createBaseVNode, t as toDisplayString, f as createApp, p as pushScopeId, b as popScopeId } from "./plugin-vueexport-helper-33dc0e52.js";
const indexApp_vue_vue_type_style_index_0_scoped_bdf36fe2_lang = "";
const _sfc_main$2 = {
  components: {
    //Header
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
const _hoisted_1$2 = { class: "container" };
const _hoisted_2$2 = ["href"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.pageList, (obj, idx) => {
      return openBlock(), createElementBlock("div", { key: idx }, [
        createBaseVNode("a", {
          href: obj.url
        }, toDisplayString(obj["page-name"]), 9, _hoisted_2$2)
      ]);
    }), 128))
  ]);
}
const App$2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-bdf36fe2"]]);
console.log("this is helper vallina js");
createApp(App$2).mount("#app");
const header_vue_vue_type_style_index_0_scoped_f652b3a0_lang = "";
const _sfc_main$1 = {
  props: {
    title: {
      type: String,
      default: "unset"
    }
  },
  data() {
    return {
      menuList: [
        {
          title: "index",
          url: "index.html"
        },
        {
          title: "page2",
          url: "page2.html"
        }
      ]
    };
  },
  methods: {
    goBack: function() {
      history.back();
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-f652b3a0"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "header" };
const _hoisted_2$1 = ["href"];
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", null, null, -1));
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("h1", null, toDisplayString($props.title), 1),
    createBaseVNode("div", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
    }, "back"),
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.menuList, (obj, idx) => {
      return openBlock(), createElementBlock("div", { key: idx }, [
        createBaseVNode("a", {
          href: obj.url
        }, toDisplayString(obj.title), 9, _hoisted_2$1)
      ]);
    }), 128)),
    _hoisted_3$1
  ]);
}
const App$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-f652b3a0"]]);
createApp(App$1).mount("#head");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
const _hoisted_1 = { class: "footer" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", null, "Footer", -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
createApp(App).mount("#footer");
