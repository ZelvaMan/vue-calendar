<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <div class="input-group date" ref="dateTimePicker" :id="id" data-target-input="nearest">
            <cleave
              type="text"
              class="form-control datetimepicker-input"
              :data-target="id"
              :options="cleaveOpinion"
            />
            <div class="input-group-append" :data-target="id" data-toggle="datetimepicker">
              <div class="input-group-text">
                <i class="fa fa-calendar"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cleave from "vue-cleave-component";
import $ from "jquery";
export default {
  name: "vcalendar",
  component: {
    Cleave
  },
  props: {
    /**
     * @type {String}
     * @description L = Dateonly |LT = TimeOnly
     */
    format: String,
    /**
     *@type {Array}
     *@description array of disbled dates (string)
     */
    disabledDates: Array,

    /**
     * @type {Array}
     * @description array from numbers from 0-6
     */
    daysOfWeekDisabled: Array
  },
  mounted() {
    $(this.$refs.dateTimePicker).datetimepicker({
      format: this.format,
      disabledDates: this.disabledDates,
      daysOfWeekDisabled: this.daysOfWeekDisabled
    });
  },
  computed: {
    cleaveOpinion() {
      if (format == "L") return Option.date;
      if (format == "LT") return Option.time;
      return null;
    }
  }
};
</script>

<style>
</style>