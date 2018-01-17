import Vue from 'vue';

import { seancesResource } from 'src/util/resources';
import template from './seance.html';

export default Vue.extend({
  template,

  data() {
    return {
      seance: {}
    };
  },

  created(){
    this.fetchSeance();
  },

  methods: {
    fetchseance(){
      const id = this.$route.params.id;

      return seancesResource.get(`${id}`)
        .then((response) => {
          this.seance = response.data;
        })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    }
  }
});
