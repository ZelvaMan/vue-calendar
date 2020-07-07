<template>
  <div id="app">
    <h1> VCalendar </h1>
    <label>date and time  </label>
    <span>{{ vcaldate }}</span>
    <vcalendar id="vcal" v-model="vcaldate"></vcalendar>
    <label>time only</label>
    <vcalendar format="LT"  id="vcal2"></vcalendar>
    <label>date only  with disabled weekends</label>
    <vcalendar format="L" :disabledweekends="true" id="vcal3"></vcalendar>
  </div>
</template>

<script>
import Vue from 'vue'
import vcalendar from "./components/VCalendar";
Vue.use(require('vue-moment'));
export default {
  name: "App",
  components: {
    vcalendar
  },
  data (){
    return{
      vcaldate: ""
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
