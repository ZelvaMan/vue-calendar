<template>
  <div class="container">
    <div
      id="reportrange"
      class="input-group"
      style="background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc; width: 100%"
    >
      <div class="input-group-prepend">
        <div class="input-group-text">
          <i class="fa fa-calendar"></i>
        </div>
      </div>
      <span ref="renderspam"></span>
      <i class="fa fa-caret-down"></i>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
//import VueMoment from "vue-moment";
//Vue.use(require("vue-moment"));
import moment from "moment";
Vue.use(moment);
export default {
  name: "VDateRangeButton",
  component: {},
  props: {
    id: String
  },
  data() {
    return {
      daterange: ""
    };
  },
  mounted() {
    $(function() {
      var start = moment().subtract(29, "days");
      var end = moment();

      function cb(start, end) {
        $("#reportrange span").html(
          start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
        );
      }

      $("#reportrange").daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days")
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment()
                .subtract(1, "month")
                .startOf("month"),
              moment()
                .subtract(1, "month")
                .endOf("month")
            ]
          }
        },
        cb
      );

      cb(start, end);
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
