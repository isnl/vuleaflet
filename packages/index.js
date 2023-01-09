import VuLeaflet from './VuLeaflet';

//按需引入
export { VuLeaflet };

const components = [VuLeaflet];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default { install };
