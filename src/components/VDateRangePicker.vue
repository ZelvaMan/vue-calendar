<template>
  <div class="container">
    <div class="input-group mb-3">
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
        v-model="daterange"
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
    }
  },
  data() {
    return {
      daterange: ""
    };
  },
  mounted() {
    $(this.$refs.drpicker).daterangepicker({
      locale: this.locale
    });
  },
  computed: {
    locale() {
      if (this.WithTime) {
        return {
          format: "YYYY M/DD hh:mm A"
        };
      } else {
        return {
          format: "YYYY M/DD"
        };
      }
    }
  }
};
</script>
