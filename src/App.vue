<template>
  <div id="app">
    <div class="row">
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
        <div class="card-header">VDateRangePicker adn VDateRangeButton (uses same library)</div>
        <div class="card-body">
          <label>Simple Date Range Picker</label>
          <VDateRangePicker id="VDTP1"></VDateRangePicker>
          <label>With Time</label>
          <VDateRangePicker id="VDTP2" :withTime="true"></VDateRangePicker>
          <label>Date range button</label>
          <VDateRangeButton id="VDRB"></VDateRangeButton>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="card m-3 border-dark">
        <div class="card-header bg-primary">Sample for admin-lte</div>
        <div class="card-body">
          <label>Date:</label>
          <vcalendar format="L" id="adminLteVCalendar"></vcalendar>
          <label>Date range button:</label>
          <VDateRangeButton></VDateRangeButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import vcalendar from "./components/VCalendar";
import VDateRangePicker from "./components/VDateRangePicker";
import VDateRangeButton from "./components/VDateRangeButton";
Vue.use(require("vue-moment"));
export default {
  name: "App",
  components: {
    vcalendar,
    VDateRangePicker,
    VDateRangeButton
  },
  data() {
    return {
      vcaldate: ""
    };
  }
};
</script>


