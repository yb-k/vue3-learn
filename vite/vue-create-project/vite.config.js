import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
// console.error("HERE");
// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(), // project root path
  base: "/", // Like Public path
  define: {
    // defind global variables , not working for packages
    // only for just primitive variables..
  },
  publicDir: "public",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    // legacy({
    //   targets: ["defaults", "not IE 11", "ios 10"],
    // }),
  ],

  css: {
    devSourcemap: false, // css sourcemap
  },
  json: {
    namedExports: true, // json 파일에 대해서 name으로 접근 가능하도록
    stringify: false, // json 파일이 매우 클때는 향상된 변환을 지원함, 단 nameExports를 지원하지 않고 json 객체로만 접근된다.
  },
  cacheDir: "node_modules/.vite",
  // assetsInclude: [], //지원하지 않는 정적파일 확장자 사용하려는 경우, 기본적인 이미지, 폰트, 동영상등은 기적용되어있다.
  logLevel: "info", // console output level
  clearScreen: true, // 터미널 클리어 할지말지
  envPrefix: "VITE_", // env Prefix
  appType: "spa", // 기본
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true, // 지정한 포트 이외에 실행을 원치않는 경우 true
    https: false, // ssl 관련
    // 기본 ssl 사용시 @vitejs/plugin-basic-ssl을 활용 (로컬 개발환경에서만)
    open: true, // 실행 후 브라우저 실행 , string을 설정하여 특정 html을 실행할 수도 있음.
    // proxy: {
    // '/': 'http://localhost', // 기본 프록시 사용시
    // 상세 옵션 사용시
    // "/api": {
    //   target: "http://localhost",
    //   changeOrigin: true,
    //   rewrite: (path) => path.replace(/^\/api/, ""),
    //   configure: (proxy, options) => {},
    // },
    // },
    // cors: false, // cors 비허용시
    // headers: {}, // 특정 헤더를 세팅해야하는 경우 사용
  },
  build: {
    outDir: "dist", // outdir 세팅
    assetsDir: "assets", // assets 폴더명 세팅
    assetsInlineLimit: 4096, // 4kb
    cssCodeSplit: true, // css 코드 분할여부, false시 하나의 css파일로 extract 됨
    target: "ios11",
    // cssTarget: , 기본적으로 build.target 값을 사용한다.
    // 비주류의 특정한 브라우저를 대응해야하는 경우 사용하며
    // 예를 들면 Android WeChat Webview같은 경우
    // #RGBA 16진수 색상 표기법을 지원하지 않기때문에
    // vite가 이를 변환하지 않도록 chrome61을 세팅해야한다.
    sourcemap: false, // sourcemap 생성 여부
    // rollupOptions : rollupOption을 커스터마이징하기 위한 옵션.
    // dynamicImportVarsOptions : 변수를 사용하여 동적 import처리하는 경우 영향을 받음.
    minify: "esbuild",
  },
});
