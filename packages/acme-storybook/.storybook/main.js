const path = require('path')

module.exports = {
  stories: [
    {
      directory: '../../acme-design-system/src/**',
      files: '*.stories.*',
      titlePrefix: 'Design System',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    // Customize the Vite config here
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, '../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
    }

    config.optimizeDeps = config.optimizeDeps || {}
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'react',
      'react-dom',
    ]

    return config
  },
  docs: {
    autodocs: true,
  },
}
