import babel from 'rollup-plugin-babel';
import babili from 'rollup-plugin-babili';

export default {
  entry: 'src/index.js',
  format: 'es',
  dest: 'dist/main.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    babili()
  ],
  external: [
    'word-count',
    'syllable',
    'sentiment'
  ],
  // sourceMap: true
};
