/**
 * antdv表格的默认配置
 * pageSize可传入， 默认值为10
 * @returns
 */
export const getDefaultPagination = (pageSize = 10, config = {}) => ({
	total: 0,
	current: 1,
	pageSize,
	hideOnSinglePage: true,
	showTotal: (total, range) => {
		return range[0] + '-' + range[1] + ' 共' + total + '条';
	},
	...config,
});

/**
 * 获取表格的可视化高度
 * @param {*} extraHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 */
export function getTableScrollHeight({ extraHeight, id }) {
	if (typeof extraHeight === 'undefined') {
		//  默认底部分页64 + 边距10
		extraHeight = 88;
	}
	let tHeader = null;
	if (id) {
		tHeader = document.getElementById(id) ? document.getElementById(id).getElementsByClassName('ant-table-thead')[0] : null;
	} else {
		tHeader = document.getElementsByClassName('ant-table-thead')[0];
	}
	// 表格内容距离顶部的距离
	let tHeaderBottom = 0;
	if (tHeader) {
		tHeaderBottom = tHeader.getBoundingClientRect().bottom;
	}
	// 窗体高度-表格内容顶部的高度-表格内容底部的高度
	// let height = document.body.clientHeight - tHeaderBottom - extraHeight
	const height = `calc(100vh - ${tHeaderBottom + extraHeight}px)`;
	return height;
}
/**
 * 上传图片获取base64方法
 * @param {*} file
 * @returns
 */
export function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}
/**
 * 获取上传文件的真实文件名
 * @param {*} url  栗子: /gfgx-public/data/63acf5aead945f0e23cba2de/thumbnail_63acf5aead945f0e23cba2de.png
 * @returns
 */
export function getFileName(url) {
	const index = url.lastIndexOf('/');
	return url.substring(index + 1);
}
/**
 * 直链文件下载
 * @param {*} url
 */
export function downloadFile(url) {
	const a = document.createElement('a');
	a.href = url;
	a.download = url;
	a.click();
}
