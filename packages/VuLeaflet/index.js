import VuLeaflet from './src/VuLeaflet.vue';

VuLeaflet.install = (App) => {
	App.component(VuLeaflet.__name, VuLeaflet);
};

export default VuLeaflet;
