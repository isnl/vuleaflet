/*
 * @Author: Peanut.ZhangHuan
 * @Description:  地图相关utils
 * @Date: 2023-05-30 16:02:03
 * @Last Modified by: Peanut.ZhangHuan
 * @Last Modified time: 2023-05-31 17:22:54
 */
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import '../lib/map/leaflet-measure-path.js';
import '../lib/map/leaflet-measure-path.css';

/*
 * @Author: Peanut.ZhangHuan
 * @Description: 地图通用方法
 * @Date: 2022-10-27 16:49:59
 * @Last Modified by: Peanut.ZhangHuan
 * @Last Modified time: 2023-01-31 17:51:46
 */
export function createMap(elem, config = {}) {
	if (typeof elem === 'string') {
		elem = document.querySelector(elem);
	}
	return L.map(elem, {
		center: { lat: 33.51361277047545, lng: 107.89657445624471 },
		zoom: 7,
		zoomControl: false,
		minZoom: 3,
		maxZoom: 17,
		zoomOffset: 1,
		crs: L.CRS.EPSG4326,
		attributionControl: false,
		...config,
	});
}

/**
 * 绘制类型常量
 */
export const DRAW_TYPE = {
	Marker: 'Marker', // 点标记
	Line: 'Line', // 线
	Polygon: 'Polygon', // 多边形
	CircleMarker: 'CircleMarker', // 圆点标记
	Circle: 'Circle', // 圆
	Rectangle: 'Rectangle', // 矩形
	Text: 'Text', // 文本
};
/**
 * 绘制类
 */
export class Draw {
	constructor(map) {
		this.map = map;
		this.map.pm.setLang('zh');
	}
	/**
	 * 开始绘制
	 * @param {*} type
	 * @param {*} options
	 */
	enableDraw(type, options = {}) {
		this.map.pm.enableDraw(type, {
			snappable: true,
			snapDistance: 20,
			...options,
		});
	}
	/**
	 * 停止
	 */
	disableDraw() {
		this.map.pm.disableDraw();
	}
	/**
	 * 清空
	 */
	clear() {
		const layerList = this.map.pm.getGeomanDrawLayers();
		layerList.map((layer) => layer.remove());
	}
}

/**
 * 绘制 && 测量类
 */
export class DrawMeasure {
	constructor(map) {
		this.map = map;
		this.layerGroup = L.layerGroup();
		this.layerGroup.addTo(this.map);
	}

	createCricle({ showMeasurements = true, onEnd }) {
		this.map.on('click', (e) => {
			this.map.doubleClickZoom.disable();
			const { latlng } = e;
			this.map.on('mousemove', (event) => {
				this._circleMousemove(event, latlng, showMeasurements, onEnd);
			});
		});
	}

	_circleMousemove(event, center, showMeasurements, onEnd) {
		if (this.circle) this.circle.remove();
		const { latlng } = event;
		const radius = center.distanceTo(latlng);
		this.circle = L.circle(center, {
			radius,
			showMeasurements,
		});
		this.layerGroup.addLayer(this.circle);
		this._toolTip(latlng);
		this.current = this.circle;
		this.map.on('contextmenu', (e) => {
			if (e.type === 'contextmenu') {
				onEnd && onEnd(this.circle);
			}
			this.contextmenu();
		});
	}

	contextmenu() {
		this.map.off('click mousemove contextmenu');
		if (this.markerTip) {
			this.markerTip.remove();
		}
		this.polyline = null;
		this.polygon = null;
		this.rectangle = null;
		this.circle = null;
	}

	_toolTip(latlng) {
		if (this.markerTip) {
			this.markerTip.remove();
		}
		if (latlng) {
			this.markerTip = L.marker(latlng, {
				opacity: 0,
			}).addTo(this.layerGroup);
			this.markerTip
				.bindTooltip('右击结束', {
					className: 'draw-leaflet-tip',
					offset: [0, 20],
				})
				.openTooltip();
		}
	}

	createLine({ showMeasurements = true, onEnd }) {
		this.contextmenu();
		const positionArr = [];
		this.map.on('click', (e) => {
			this.map.doubleClickZoom.disable();
			const { latlng } = e;
			const { lat, lng } = latlng;
			positionArr.push([lat, lng]);
			this.map.on('mousemove', (event) => {
				this._lineMousemove(event, positionArr, showMeasurements, onEnd);
			});
		});
	}

	_lineMousemove(event, positionArr, showMeasurements, onEnd) {
		const { latlng } = event;
		const length = positionArr.length;
		const { lat, lng } = latlng;
		if (length <= 1) {
			positionArr.push([lat, lng]);
		} else {
			positionArr[length - 1] = [lat, lng];
			this._toolTip(latlng);
			if (this.polyline) {
				this.polyline.setLatLngs(positionArr);
			} else {
				this.polyline = L.polyline(positionArr, {
					showMeasurements,
				});
				this.layerGroup.addLayer(this.polyline);
			}
			this.current = this.polyline;
		}
		this.map.on('contextmenu', (e) => {
			if (e.type === 'contextmenu') {
				onEnd && onEnd(this.polyline);
			}
			this.contextmenu();
		});
	}

	createRectangle({ showMeasurements = true, onEnd }) {
		this.contextmenu();
		const positionArr = [];
		this.map.on('click', (e) => {
			this.map.doubleClickZoom.disable();
			const { latlng } = e;
			const { lat, lng } = latlng;
			positionArr.push([lat, lng]);
			this.map.on('mousemove', (event) => {
				this._rectangleMousemove(event, positionArr, showMeasurements, onEnd);
			});
		});
	}

	_rectangleMousemove(event, positionArr, showMeasurements, onEnd) {
		const { latlng } = event;
		const length = positionArr.length;
		if (this.rectangle) this.rectangle.remove();
		const { lat, lng } = latlng;
		if (length <= 1) {
			positionArr.push([lat, lng]);
		} else {
			positionArr[length - 1] = [lat, lng];
			this._toolTip(latlng);
			this.rectangle = L.rectangle(positionArr, {
				showMeasurements,
			});
			this.layerGroup.addLayer(this.rectangle);
			this.current = this.rectangle;
		}
		this.map.on('contextmenu', (e) => {
			if (e.type === 'contextmenu') {
				onEnd && onEnd(this.rectangle);
			}
			this.contextmenu();
		});
	}

	createPolygon({ showMeasurements = true, onEnd }) {
		this.contextmenu();
		const positionArr = [];
		this.map.on('click', (e) => {
			this.map.doubleClickZoom.disable();
			const { latlng } = e;
			const { lat, lng } = latlng;
			positionArr.push([lat, lng]);
			this.map.on('mousemove', (event) => {
				this._polygonMousemove(event, positionArr, showMeasurements, onEnd);
			});
		});
	}

	_polygonMousemove(event, positionArr, showMeasurements, onEnd) {
		const { latlng } = event;
		const length = positionArr.length;
		const { lat, lng } = latlng;
		if (length <= 1) {
			positionArr.push([lat, lng]);
		} else {
			positionArr[length - 1] = [lat, lng];
			this._toolTip(latlng);
			if (this.polygon) {
				this.polygon.setLatLngs(positionArr);
			} else {
				this.polygon = L.polygon(positionArr, {
					showMeasurements,
				});
				this.layerGroup.addLayer(this.polygon);
			}
			this.current = this.polygon;
		}
		this.map.on('contextmenu', (e) => {
			if (e.type === 'contextmenu') {
				onEnd && onEnd(this.polygon);
			}
			this.contextmenu();
		});
	}

	disable() {
		if (this.current) {
			this.current.remove();
		}
		this.contextmenu();
	}
	clear() {
		this.layerGroup.clearLayers();
		if (this.markerTip) {
			this.markerTip.remove();
		}
		this.contextmenu();
	}
}
