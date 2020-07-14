<template>
  <div class="container mw-100 w-100">
    <div class="row">
      <div class="col-sm-6 w-100 mw-100 d-flex" style="flex-basis: 100%">
        <div class="form-group w-100">
          <div class="input-group date" ref="dtpicker" :id="id" data-target-input="nearest">
            <input
              type="text"
              class="form-control datetimepicker-input"
              :data-target="idWHastag"
              v-model="value"
            />
            <!-- <cleave
              type="text"
              class="form-control datetimepicker-input"
              :data-target="idWHastag"
              :options="cleaveOpinion"
              v-model="date"
            />-->
            <div class="input-group-append" :data-target="idWHastag" data-toggle="datetimepicker">
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
//import VueMoment from 'vue-moment';
Vue.use(Cleave);
Vue.use(require("vue-moment"));
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
     * @description array 0-6
     */
    disabledDaysOfWeek: Array,
    /**
     * @type {String}
     * @description See momentjs for valid locales.
     */
    locale: {
      type: String,
      default: "cs"
    },
    /**
     * @type {String}
     * @description index of vcalendar
     */
    id: String,
    /**
     * @type {String}
     * @description selected date
     */
    value: String
  },
  data() {
    return {};
  },
  mounted() {
    console.log("mounted");

    $(this.$refs.dtpicker).datetimepicker({
      locale: this.locale,
      format: this.format,
      disabledDates: this.disabledDates,
      daysOfWeekDisabled: this.disabledDaysOfWeek
    });
  },
  computed: {
    cleaveOpinion() {
      if (this.format == "L") return Option.date;
      if (this.format == "LT") return Option.time;
      return Option.date;
    },
    idWHastag() {
      return "#" + this.id;
    }
  }
};
</script>
