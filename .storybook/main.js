module.exports = {
  stories: ["../stories/**/*.stories.(ts|tsx|mdx)"],
  addons: ["@storybook/addon-knobs/register", "@storybook/addon-docs"],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
