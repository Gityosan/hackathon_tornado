import colors from 'vuetify/es5/util/colors'
import StylelintPlugin from 'stylelint-webpack-plugin'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // ssr: true,
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Plarch',
    title: 'hackathon_tornado',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@@/plugins/amplify.js' },
    { src: '@@/plugins/vue-quill-editor.js' },
    { src: '@@/plugins/persistedstate.js', mode: 'client' },
    { src: '@@/plugins/adobe-fonts.js', mode: 'client' },
    { src: '@@/plugins/swiper.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue', '**/*.scss']
          })
        )
      }
    }
  },
  storybook: {
    // 追加のアドオンなどあれば
    // addons: ['@storybook/addon-controls', '@storybook/addon-notes'],
    // ポート指定
    port: 5555,
    // ストーリーの親に要素など追加しcssなど設定できる
    // decorators: ['<div style="max-width: 〇〇px;"><story/></div>'],
    // 背景色や表示位置、デバイスの設定など
    parameters: {
      // 背景色：デフォルトの色を使う場合
      backgrounds: {
        default: 'light' // light or dark
      },
      // 背景色：カスタマイズする場合
      backgrounds: {
        default: 'brown',
        values: [
          {
            name: 'brown',
            value: '#56371B'
          },
          {
            name: 'light',
            value: '#fff'
          },
          {
            name: 'dark',
            value: '#333'
          }
        ]
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true
      },
      // 表示位置
      layout: 'centered' // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
    }
  }
}
