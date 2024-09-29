module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    require('@acme/design-system/tailwind'),
  ],
  content: [
    // All the packages that might include stories
    './stories/**/*.{js,ts,jsx,tsx}',
    '../acme-design-system/src/**/*.{js,ts,jsx,tsx}',
  ],
}
