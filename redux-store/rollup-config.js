import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'

export default {
    entry: 'src/main.js',
    dest: 'src/dist/build.js', // output a single application bundle
    sourceMap: false,
    format: 'iife',
    onwarn: function (warning) {
        // Skip certain warnings

        // should intercept ... but doesn't in some rollup versions
        if (warning.code === 'THIS_IS_UNDEFINED') { return; }
        // intercepts in some rollup versions
        // if (warning.indexOf("The 'this' keyword is equivalent to 'undefined'") > -1) { return; }

        // console.warn everything else
        console.warn(warning.message);
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        nodeResolve({ jsnext: true, module:true, main: true}),
        commonjs({
            include: [
                'node_modules/**'
                ],
            namedExports: {
                // left-hand side can be an absolute path, a path
                // relative to the current directory, or the name
                // of a module in node_modules
                'node_modules/immutable/dist/immutable.js': ['Iterable', 'List', 'Map', 'Record']
                // 'node_modules/redux/src/index.js': ['combineReducers',]
            }
        }),
        uglify()
    ]
}
