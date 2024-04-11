import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString } from "./_plugin-vue_export-helper-33dc0e52.js";
const header_vue_vue_type_style_index_0_scoped_466f73a7_lang = "";
const _sfc_main = {
  props: {
    title: {
      type: String,
      default: "unset"
    }
  },
  data() {
    return {};
  },
  methods: {
    goBack: function() {
      history.back();
    }
  }
};
const _hoisted_1 = { class: "header" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h1", null, toDisplayString($props.title), 1),
    createBaseVNode("div", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
    }, "back")
  ]);
}
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-466f73a7"]]);
export {
  Header as H
};
