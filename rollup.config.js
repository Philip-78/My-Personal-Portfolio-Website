import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/script.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        name: 'MyBundle',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        terser()
    ],
};
