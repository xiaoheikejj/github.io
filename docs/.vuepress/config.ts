import type { DefaultThemeOptions } from "vuepress";
import { defineUserConfig } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "zh-CN",
  title: "你好 vue-press",
  description: "这是描述",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {},
});
