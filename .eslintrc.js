// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  ignorePatterns: [
    '/dist/*',
    "node_modules/",
    ".expo/",
    ".next/",
    "__generated__/",
    "build/",
    "android/",
    "ios/",
    "assets/",
    "bin/",
    "fastlane/",
    "kotlin/providers/",
    "vendored/",
    "docs/public/static/"
  ],
};
