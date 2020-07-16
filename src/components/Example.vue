<template>
  <div class="container">
    <div class="form-check pl-1">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="includingWeekend"
        id="includingWeekend"
      />
      <label class="form-check-label">Including weekend</label>
    </div>

    <div class="form-check form-check-inline pl-1">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="sevenDays"
          id="7DaysCheckbox"
          value="1 "
          checked
          v-model="duration"
        />
        <label class="form-check-label" for="exampleRadios1">7 days</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="forteenDays"
          id="14DaysCheckbox"
          value="2"
          v-model="duration"
        />
        <label class="form-check-label" for="exampleRadios2">14 days</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="month"
          id="OneMonthCheckbox"
          value="3"
          v-model="duration"
        />
        <label class="form-check-label" for="exampleRadios3">month</label>
      </div>
    </div>
  </div>
</template>
<!-- 
Fix VCalendar width problem
-->
<script>
import Vue from "vue";
//import moment from "moment";
//import vcalendar from "./components/VCalendar";
//import VDateRangePicker from "./components/VDateRangePicker";
Vue.use(require("vue-moment"));
export default {
  name: "example",
  data() {
    return {
      includingWeekend: false,
      duration: ""
    };
  },

  methods: {}
};
</script>


