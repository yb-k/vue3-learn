# How to setup Vue3 With Vite

### Base with Vue3

#### Prerequisites

- nodejs 16+

#### Command

```bash
npm init vue@latest
```

> Vite 템플릿에 비해 옵션을 선택할 수 있다.
>
> `vue-cli`에서 처럼 `cli-service`로 관리하는 빌드 옵션이 별도로 존재하지 않는다.

---

### Base with Vite(v3)

#### Prerequisites

- nodejs 14.18+, 16+

#### Command

```bash
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue
```

> template 리스트 확인
>
> https://github.com/vitejs/awesome-vite#vue-3

## 내용 정리

### 브라우저 지원 버전

기본적으로 Vite는 UMD 방식이 아닌 ESM으로 빌드해주기 때문에 번들 결과물이

`<script type="module">`로 적용됨.

폴리필과는 별개로 최소 동작하는 부분이기 때문에 `iOS`는 최소 11버전이어야함.

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

### 하위버전까지 지원 원하는 경우

```bash
npm i -D @vitejs/plugin-legacy terser
```

```js
  plugins: [
    vue(),
    legacy({ // 플러그인 추가
      targets: ["defaults", "not IE 11", "ios 10"],
    }),
  ],
```
