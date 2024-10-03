import vercelUITailwind from '@vercel/examples-ui/tailwind'
import acmeDesignSystemTailwind from '@acme/design-system/tailwind'

export default {
  presets: [vercelUITailwind, acmeDesignSystemTailwind],
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    '../acme-design-system/src/**/*.{js,ts,jsx,tsx}',
  ],
}
