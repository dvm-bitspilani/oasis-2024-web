import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader']
    });
    return config;
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);