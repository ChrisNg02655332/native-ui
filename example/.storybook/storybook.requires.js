/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./stories",
    files: "*.stories.mdx",
    importPathMatcher:
      "^\\.[\\\\/](?:stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$",
  },
  {
    titlePrefix: "",
    directory: "./stories",
    files: "*.stories.@(js|jsx|ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:stories\\/(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./stories/Avatar.stories.tsx": require("../stories/Avatar.stories.tsx"),
    "./stories/Button.stories.tsx": require("../stories/Button.stories.tsx"),
    "./stories/Divider.stories.tsx": require("../stories/Divider.stories.tsx"),
    "./stories/Icon.stories.tsx": require("../stories/Icon.stories.tsx"),
    "./stories/Image.stories.tsx": require("../stories/Image.stories.tsx"),
    "./stories/SecureTextInput.stories.tsx": require("../stories/SecureTextInput.stories.tsx"),
    "./stories/Text.stories.tsx": require("../stories/Text.stories.tsx"),
    "./stories/TextInput.stories.tsx": require("../stories/TextInput.stories.tsx"),
  };
};

configure(getStories, module, false);
