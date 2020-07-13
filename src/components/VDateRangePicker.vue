<template>
  <div class="container">
    <input type="text" ref="drpicker" value="01/01/2018 - 01/15/2018" />
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
  props: {},
  data() {
    return {
      daterange: ""
    };
  },
  mounted() {
    $(this.$refs.drpicker).daterangepicker({});
  },
  computed: {}
};
</script>
