import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/vue3'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import type { DefineComponent } from 'vue'
import { createApp, h } from 'vue'
import '../css/app.css'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => 'Shop · ' + (title || 'Welcome'),

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue')
    )
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
