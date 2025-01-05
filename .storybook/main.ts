import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/components/atoms/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/molecules/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/organisms/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/templates/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ["../public"],
};

export default config;
