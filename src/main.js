import {createApp} from 'vue'
import App from './App.vue'
//sass vuetify
import '@/assets/scss/index.scss'
//vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// css
import './assets/main.css'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).mount('#app')
