<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <!-- <div class="input-group date" ref="dateTimePicker" :id="id" data-target-input="nearest"> 
            <cleave
              type="text"
              class="form-control datetimepicker-input"
              :data-target="id"
              :options="cleaveOpinion"
              :value="date"
            />
            <div class="input-group-append" :data-target="id" data-toggle="datetimepicker">
              <div class="input-group-text">
                <i class="fa fa-calendar"></i>
              </div>
            </div>
          </div>-->
          <div class="input-group date" id="datetimepicker2" data-target-input="nearest">
            <input
              type="text"
              class="form-control datetimepicker-input"
              data-target="#datetimepicker2"
            />
            <div
              class="input-group-append"
              data-target="#datetimepicker2"
              data-toggle="datetimepicker"
            >
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
import Vue from "vue";
Vue.use(Cleave);
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
  data() {
    return {
      id: "id",
      date: ""
    };
  },
  mounted() {
    // $(this.$refs.dateTimePicker).datetimepicker({
    //   format: this.format,
    //   disabledDates: this.disabledDates,
    //   daysOfWeekDisabled: this.daysOfWeekDisabled
    // });
    $("#datetimepicker2").datetimepicker({
      locale: "ru"
    });
  },
  computed: {
    cleaveOpinion() {
      if (this.format == "L") return Option.date;
      if (this.format == "LT") return Option.time;
      return Option.date;
    }
  }
};
</script>
