<script setup name="VuLeaflet">
import { onMounted, ref } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const emit = defineEmits(['onReady']);
const props = defineProps({
	zoom: Number,
	center: Object,
	showBaseLayer: Boolean,
	config: Object,
});

const mapElem = ref(null);

onMounted(() => {
	const { center, zoom, showBaseLayer } = props;
	const layer = L.tileLayer(
		'http://t2.tianditu.gov.cn/img_c/wmts?layer=img&style=default&tilematrixset=c&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=64a7440068a2bbc276c11927b54458f4',
		{
			zoomOffset: 1,
		}
	).setZIndex(0);
	const map = L.map(mapElem.value, {
		center: center ? center : { lat: 36.589932292699814, lng: 98.97173970937729 },
		zoom: zoom ? zoom : 5,
		zoomControl: false,
		minZoom: 3,
		maxZoom: 17,
		zoomOffset: 1,
		crs: L.CRS.EPSG4326,
		attributionControl: false,
		layers: showBaseLayer ? [layer] : [],
		...props.config,
	});
	emit('onReady', map);
});
</script>

<template>
	<div class="mapWrapper" ref="mapElem"></div>
</template>

<style scoped>
.mapWrapper {
	height: 100%;
	width: 100%;
}
</style>
