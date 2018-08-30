import Vue from "vue";
import Component from "vue-class-component";
@require('./index.html')
@Component({ name: 'App' })
export default class App extends Vue {
    ms: string = '天涯';
}