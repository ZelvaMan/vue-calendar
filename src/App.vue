<template>
  <div id="app">
    <h1 class="text-primary">
      <b>VUE-CALENDAR</b>
    </h1>
    <h4>by honza</h4>
    <hr />
    <div class="row">
      <div class="card m-3 border-dark" title="VCalendar">
        <div class="card-header">VCalendar</div>

        <div class="card-body">
          <label>
            date and time default locale
            <b>CS</b>
            --
            {{vcaldate}}
          </label>
          <vcalendar id="vcal" :value="vcaldate"></vcalendar>
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
          <label>Simple Date Range Picker -- {{VDRPvalue}}</label>
          <VDateRangePicker id="VDTP1" :value="VDRPvalue"></VDateRangePicker>
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
          <label>Date range:</label>
          <VDateRangePicker id="admitLteVDateRangePicker" />
          <label>Date and Time range:</label>
          <VDateRangePicker :withTime="true" />
          <label>Date range button: -- {{VDRB}}</label>
          <VDateRangeButton id="admitLteVDateRangeButton" :value="VDRB"></VDateRangeButton>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 
Fix VCalendar width problem
-->
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
      vcaldate: "d",
      VDRPvalue: "d",
      VDRB: "d"
    };
  }
};
</script>


