import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
	entry: '../../dist/packages/datetime/src/index.js',
	dest: '../../dist/packages/datetime/bundles/datetime.umd.js',
	format: 'umd',
	moduleName: 'fenixjs.datetime',
	plugins: [
		resolve(),
		sourcemaps()
	]
}