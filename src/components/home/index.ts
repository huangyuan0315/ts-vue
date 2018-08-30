import Vue from "vue";
import Component from "vue-class-component";
@require('./index.html')
@Component({ name: 'home' })
export default class home extends Vue {
    msg: string = "Welcome to Your Vue.js App"
}