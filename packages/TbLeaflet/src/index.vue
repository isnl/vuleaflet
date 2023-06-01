<template>
	<div class="tb-map">
		<div class="map-elem" ref="mapElem"></div>
		<div class="tb-map-zoom" :style="zoomConfig.style" v-if="zoomConfig">
			<div class="tb-zoom-level">{{ zoom }}</div>
			<div class="tb-zoom-scale">
				<span class="tb-zs-btn" @click="scale('plus')">
					<a-icon type="plus" />
				</span>
				<span class="tb-zs-btn" @click="scale('minus')">
					<a-icon type="minus" />
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import { createMap } from '../../utils/map';
export default {
	name: 'tb-leaflet',
	props: {
		zoomConfig: {
			type: Object,
			default: {
				style: {},
			},
		},
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
		return {
			zoom: 0,
		};
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
		this.map = createMap(this.$refs.mapElem, {
			layers: showBaseLayer ? [layer] : [],
			...config,
		});
		this.zoom = this.map.getZoom();
		this.addEvent();
		this.$emit('onReady', this.map);
	},
	methods: {
		addEvent() {
			this.map.on('zoom', (evt) => {
				this.zoom = evt.target.getZoom();
				this.$emit('onZoom', this.zoom);
			});
		},
		scale(type) {
			const zoom = this.map.getZoom();
			if (type === 'plus') {
				this.map.setZoom(zoom + 1);
			} else {
				this.map.setZoom(zoom - 1);
			}
		},
	},
	beforeDestroy() {
		this.map.off('zoom');
	},
};
</script>
<style scoped lang="less">
.tb-map {
	height: 100%;
	width: 100%;
	z-index: 0;
	position: relative;
	.map-elem {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	.tb-map-zoom {
		width: 50px;
		background: #fff;
		position: absolute;
		right: 20px;
		bottom: 20px;
		border-radius: 2px;
		border-radius: 4px;
		overflow: hidden;
		transition: all 0.3s;
		user-select: none;
		.tb-zoom-level {
			text-align: center;
			background: #058373;
			color: #fff;
			font-size: 16px;
			font-weight: bold;
		}
		.tb-zoom-scale {
			height: 20px;
			.tb-zs-btn {
				display: inline-block;
				width: 50%;
				height: 100%;
				text-align: center;
				cursor: pointer;
				color: #999;
			}
			.tb-zs-btn:active {
				color: #fff;
				background: #999;
			}
		}
	}
}
</style>
