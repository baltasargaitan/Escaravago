import path from 'path';

// Usar import.meta.url para obtener el directorio actual
const currentDir = new URL('.', import.meta.url).pathname;

const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(currentDir, 'src');
    return config;
  },
};

export default nextConfig;
