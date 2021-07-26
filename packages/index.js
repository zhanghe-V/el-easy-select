import elEasySelect from './src/index.vue'
elEasySelect.install = function(Vue) {
    Vue.component(elEasySelect.name, elEasySelect)
};
export default elEasySelect