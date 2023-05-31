import { TbLeaflet } from './TbLeaflet';
import * as utils from './utils';
import * as tbMapUtils from './utils/map';
//按需引入
export { TbLeaflet, utils, tbMapUtils };

const components = [TbLeaflet];
const TbComp = {
	install(Vue) {
		components.map((item) => {
			Vue.component(item.name, item);
		});

		Vue.prototype.$tu = utils;

		Vue.prototype.$tmu = tbMapUtils;
	},
};

export default TbComp;
