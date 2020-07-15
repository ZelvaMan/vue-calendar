<template>
  <div class="container mw-100 m-100">
    <div class="input-group w-100 mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <i v-if="withTime" class="fa fa-clock-o"></i>
          <i v-if="!withTime" class="fa fa-calendar"></i>
        </div>
      </div>
      <input
        type="text"
        :id="id"
        class="form-control"
        ref="drpicker"
        value="01/01/2018 - 01/15/2018"
        v-model="value"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
//import VueMoment from 'vue-moment';
Vue.use(require("vue-moment"));
export default {
  name: "VDateRangePicker",
  component: {},
  props: {
    id: String,
    withTime: {
      type: Boolean,
      default: false
    },
    /**
     * @type String
     * @description daterange
     */
    value: String,
    format: {
      type: String
    }
  },
  watch: {
    format: function() {
      // watch it
      console.log("VDateRange format changed to:" + this.format);
      this.$forceUpdate();
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.daterangepicker();
  },
  updated() {
    this.daterangepicker();
  },
  methods: {
    daterangepicker: function() {
      $(this.$refs.drpicker).daterangepicker({
        timePicker: true,
        locale: this.locale
      });
    }
  },
  computed: {
    locale() {
      if (this.WithTime) {
        return {
          format: "YYYY M/DD hh:mm"
        };
      } else {
        return {
          format: this.format
        };
      }
    }
  }
};
</script>
