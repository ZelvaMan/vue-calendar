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
          <label>date and time default locale -- {{VCAlDate}}</label>
          <VCalendar id="vcal" v-on:input="VCalChanged" :value="VCAlDate"></VCalendar>
          <label>time only</label>
          <VCalendar format="LT" id="vcal2"></VCalendar>
          <label>
            date only with disabled weekends locale
            <b>DE</b>
          </label>
          <VCalendar format="L" :disabledDaysOfWeek="[0,1]" id="vcal3" locale="de"></VCalendar>
        </div>
      </div>
      <div class="card border-dark m-3">
        <div class="card-header">VDateRangePicker adn VDateRangeButton (uses same library)</div>
        <div class="card-body">
          <label>forman</label>
          <input v-model.lazy="format_DateRangePicker" class="form-control mr-3 ml-3" />
          <label>Simple Date Range Picker -- {{VDateRangePickerDate}}</label>
          <VDateRangePicker id="VDTP1" :format="format_DateRangePicker" v-on:input="VDRPChanged"></VDateRangePicker>
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
          <VCalendar format="L" id="adminLteVCalendar"></VCalendar>
          <label>Date range:</label>
          <VDateRangePicker id="admitLteVDateRangePicker" />
          <label>Date and Time range:</label>
          <VDateRangePicker :withTime="true" />
          <label>Date range button: --</label>
          <VDateRangeButton id="admitLteVDateRangeButton"></VDateRangeButton>
        </div>
      </div>
    </div>
    <div class="card m-3 border-dark w-100">
      <div class="card-header bg-primary">example</div>
      <div class="card-body">
        <example />
      </div>
    </div>
  </div>
</template>
<!-- 
Fix VCalendar width problem
-->
<script>
import Vue from "vue";
import VCalendar from "./components/VCalendar";
import VDateRangePicker from "./components/VDateRangePicker";
import VDateRangeButton from "./components/VDateRangeButton";
import example from "./components/Example";
Vue.use(require("vue-moment"));
export default {
  name: "App",
  components: {
    VCalendar,
    VDateRangePicker,
    VDateRangeButton,
    example
  },
  data() {
    return {
      format_DateRangePicker: "",
      VCAlDate: "",
      VDateRangePickerDate: ""
    };
  },

  methods: {
    VCalChanged(value) {
      this.VCAlDate = value;
    },
    VDRPChanged(value) {
      this.VDateRangePickerDate = value;
    }
  }
};
</script>


