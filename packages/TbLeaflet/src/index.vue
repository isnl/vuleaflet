<template>
	<div class="mapWrapper" ref="mapElem"></div>
</template>

<script>
import { createMap } from '../../utils/map';
export default {
	name: 'tb-leaflet',
	props: {
		showBaseLayer: {
			type: Boolean,
			default: true,
		},
		config: {
			type: Object,
			default: () => ({}),
		},
	},
	data() {
		return {};
	},
	components: {},
	mounted() {
		const { showBaseLayer, config } = this;
		const layer = L.tileLayer(
			'http://t2.tianditu.gov.cn/img_c/wmts?layer=img&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=64a7440068a2bbc276c11927b54458f4',
			{
				zoomOffset: 1,
			}
		).setZIndex(0);
		const map = createMap(this.$refs.mapElem, {
			layers: showBaseLayer ? [layer] : [],
			...config,
		});
		this.$emit('onReady', map);
	},
	methods: {},
};
</script>
<style scoped lang="less">
.mapWrapper {
	height: 100%;
	width: 100%;
	z-index: 0;
}
</style>
