<template>
	<div class="wrapper">
		<tb-leaflet :zoomConfig="zoomConfig" @onReady="onMapReady" />
		<a-button type="primary" class="btnFirstLine f-marker" style="left: 20px" @click="onDraw(DRAW_TYPE.Marker)">标点</a-button>
		<a-button type="primary" class="btnFirstLine f-line" style="left: 100px" @click="onDraw(DRAW_TYPE.Line)">标线</a-button>
		<a-button type="primary" class="btnFirstLine f-polygon" style="left: 180px" @click="onDraw(DRAW_TYPE.Polygon)">标面</a-button>
		<a-button type="primary" class="btnFirstLine f-polygon" style="left: 260px" @click="onDraw(DRAW_TYPE.CircleMarker)">多圆标记</a-button>
		<a-button type="primary" class="btnFirstLine f-polygon" style="left: 360px" @click="onDraw(DRAW_TYPE.Circle)">圆</a-button>
		<a-button type="primary" class="btnFirstLine f-polygon" style="left: 420px" @click="onDraw(DRAW_TYPE.Rectangle)">矩形</a-button>
		<a-button type="primary" class="btnFirstLine f-polygon" style="left: 500px" @click="onDraw(DRAW_TYPE.Text)">文本</a-button>
		<a-button type="danger" class="btnFirstLine f-disable" style="left: 580px" @click="onDrawDisable">停止</a-button>
		<a-button type="danger" class="btnFirstLine f-clear" style="left: 660px" @click="onDrawClear">清除</a-button>

		<a-button type="primary" class="btnSecondLine circle" style="left: 20px" @click="onMeasure('circle')">圆</a-button>
		<a-button type="primary" class="btnSecondLine line" style="left: 100px" @click="onMeasure('line')">线</a-button>
		<a-button type="primary" class="btnSecondLine polygon" style="left: 180px" @click="onMeasure('polygon')">面</a-button>
		<a-button type="primary" class="btnSecondLine rectangle" style="left: 260px" @click="onMeasure('rectangle')">矩形</a-button>
		<a-button type="danger" class="btnSecondLine measure-stop" style="left: 340px" @click="onMeasureStop">停止</a-button>
		<a-button type="danger" class="btnSecondLine measure-clear" style="left: 420px" @click="onMeasureClear">清除</a-button>
	</div>
</template>
<script>
import { tbMapUtils } from '../lib/tb-comp.es';
const { DRAW_TYPE } = tbMapUtils;
export default {
	data() {
		return {
			map: null,
			DRAW_TYPE,
			zoomConfig: {
				style: {
					right: '20px',
					bottom: '20px',
				},
			},
		};
	},
	methods: {
		onMapReady(map) {
			this.map = map;
			this.addEvent();

			this.drawInstance = new this.$tmu.Draw(this.map);

			this.drawMeasure = new this.$tmu.DrawMeasure(this.map);
		},
		addEvent() {
			this.map.on('pm:drawend', (e) => {
				console.log('e', e);
			});
		},
		onDrawMarker() {},
		onDraw(type) {
			this.drawInstance.enableDraw(type);
		},
		onDrawDistance() {
			const { DRAW_TYPE } = this.$tmu;
			this.drawInstance.enableDraw(DRAW_TYPE.Line);
		},
		onDrawDisable() {
			this.drawInstance.disableDraw();
		},
		onDrawClear() {
			this.drawInstance.clear();
		},
		/**
		 * 测量
		 */
		onMeasure(type) {
			if (type === 'polygon') {
				this.drawMeasure.createPolygon({
					showMeasurements: true,
					onEnd: (e) => {
						console.log('e', e);
					},
				});
			}

			if (type === 'rectangle') {
				this.drawMeasure.createRectangle({
					showMeasurements: true,
					onEnd: (e) => {
						console.log('e', e);
					},
				});
			}
			if (type === 'line') {
				this.drawMeasure.createLine({
					showMeasurements: true,
					onEnd: (e) => {
						console.log('e', e);
					},
				});
			}
			if (type === 'circle') {
				this.drawMeasure.createCricle({
					showMeasurements: true,
					onEnd: (e) => {
						console.log('e', e);
					},
				});
			}
		},
		onMeasureStop() {
			this.drawMeasure.disable();
		},
		onMeasureClear() {
			this.drawMeasure.clear();
		},
	},
};
</script>
<style lang="less">
.wrapper {
	height: 100vh;
	width: 100vw;
	position: relative;
	.btnFirstLine {
		position: absolute;
		left: 20px;
		top: 20px;
		z-index: 1;
	}
	.btnSecondLine {
		position: absolute;
		left: 20px;
		top: 80px;
		z-index: 1;
	}
}
</style>
