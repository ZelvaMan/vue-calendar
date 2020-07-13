<template>
  <div id="app">
    <div class="card m-3 border-dark" title="VCalendar">
      <div class="card-header">VCalendar</div>

      <div class="card-body">
        <label>
          date and time default locale
          <b>CS</b>
        </label>
        <vcalendar id="vcal"></vcalendar>
        <label>time only</label>
        <vcalendar format="LT" id="vcal2"></vcalendar>
        <label>
          date only with disabled weekends locale
          <b>DE</b>
        </label>
        <vcalendar format="L" :disabledDaysOfWeek="[0,1]" id="vcal3" locale="de"></vcalendar>
      </div>
    </div>
    <div class="card border-dark m-3">
      <div class="card-header">VDateRangePicker</div>
      <div class="card-body">
        <label>Simple Date Range Picker</label>
        <VDateRangePicker></VDateRangePicker>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vcalendar from "./components/VCalendar";
import VDateRangePicker from "./components/VDateRangePicker";
Vue.use(require("vue-moment"));
export default {
  name: "App",
  components: {
    vcalendar,
    VDateRangePicker
  },
  data() {
    return {
      vcaldate: ""
    };
  }
};
</script>


