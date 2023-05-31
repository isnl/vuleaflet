## 组件

- [x] tb-leaflet leaflet 地图组件

- [ ] tb-map-clip 卷帘组件

- [ ] tb-map-split 分屏组件

tb-map-identify 点查询组件

tb-map-timeline 时间轴组件

tb-map- 自由统计组件

tb-map-control 底图切换组件

tb-map-zoom 缩放组件

tb-map-legend 图例组件

## tbMapUtils 地图工具

引入使用

```js
import TbComp from 'tb-comp';
const tbMapUtils = TbComp.tbMapUtils;
```

或者可以直接使用 Vue 原型方法来访问

```js
const tbMapUtils = this.$tmu;
```

### 创建地图方法 createMap

参数：

- `elem`： `String/Object`, 为 `String` 时请传入 `querySelector` 的字符串，为 `Object` 时请传入 `DOM` 对象
- `config`： `Object` ，地图其它参数，默认值为：

```js
let config = {
	center: { lat: 33.51361277047545, lng: 107.89657445624471 },
	zoom: 7,
	zoomControl: false,
	minZoom: 3,
	maxZoom: 17,
	zoomOffset: 1,
	crs: L.CRS.EPSG4326,
	attributionControl: false,
};
```

创建地图：

```js
const { createMap } = tbMapUtils;
const map = createMap('map', {
	center: [30, 120],
	zoom: 10,
});
```

### 服务加载方法

<!-- TODO: -->

### 绘制几何体类 Draw

```js
/**
 * 绘制类型常量
 */
export const DRAW_TYPE = {
	Marker: 'Marker',
	CircleMarker: 'CircleMarker',
	Circle: 'Circle',
	Line: 'Line',
	Rectangle: 'Rectangle',
	Polygon: 'Polygon',
	Text: 'Text',
};
```

#### 构造函数

参数：

- `map` 地图实例

```js
this.draw = new tbMapUtils.Draw(map);
```

#### 方法

##### enableDraw 开启绘制

参数：

- `type`： `String`，绘制类型，参考下方 DRAW_TYPE 常量
- `options`： `Object`，绘制参数，默认值为 `{snappable: true, snapDistance: 20}`，更多参数详见：[https://github.com/geoman-io/leaflet-geoman](https://github.com/geoman-io/leaflet-geoman)

案例：

```js
const { DRAW_TYPE, Draw } = tbMapUtils;

this.draw = new Draw(this.map);

this.draw.enableDraw(DRAW_TYPE.Polygon, {
	snappable: false,
	snapDistance: 50,
});
```

#### disableDraw 停止绘制

#### clear 清除所有图层

### 绘制、测量类 Measure

#### 构造函数

参数：

- `map`： `Object` 地图实例

```js
this.drawMeasure = new tbMapUtils.DrawMeasure(map);
```

#### 方法

##### createXXX 创建几何体

- createPolygon 创建多边形
- createRectangle 创建矩形
- createLine 创建线
- createCricle 创建圆

参数：`Object`

- `showMeasurements`：`Boolean` 是否显示测量值，默认为 `true`
- `onEnd`：`Function` 绘制完成的回调，参数为绘制的图层

案例：

```js
this.drawMeasure.createXXX({
	showMeasurements: true, // 是否显示测量值，不显示则为绘制模式
	onEnd: (layer) => {
		// 绘制完成的回调
		console.log('layer', layer);
	},
});
```

##### disable 停止绘制

```js
this.drawMeasure.disable();
```

##### clear 清除所有图层

```js
this.drawMeasure.clear();
```
