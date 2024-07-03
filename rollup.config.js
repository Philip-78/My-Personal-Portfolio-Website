import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import image from "@rollup/plugin-image";
import url from 'rollup-plugin-url';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: !isProduction,
        globals: {
            'react/jsx-runtime': 'jsxRuntime',
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    },
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json'
        }),
        postcss({
            extract: true,
            minimize: isProduction,
            sourceMap: !isProduction
        }),
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg'],
            limit: 8192,
            emitFiles: true
        }),
        image(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            preventAssignment: true
        }),
        isProduction && terser(),
        copy({
            targets: [
                { src: 'public/index.html', dest: 'dist' },
                { src: 'src/styles/styles.css', dest: 'dist' }
            ]
        }),
        !isProduction && serve({
            open: true,
            contentBase: ['dist'],
            port: 3000
        }),
        !isProduction && livereload({
            watch: 'dist'
        })
    ]
};
