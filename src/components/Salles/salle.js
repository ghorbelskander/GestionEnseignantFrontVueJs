import Vue from 'vue';

import { sallesResource } from 'src/util/resources';
import template from './salle.html';

export default Vue.extend({
  template,

  data() {
    return {
      salle: {}
    };
  },

  created(){
    this.fetchSalles();
  },

  methods: {
    fetchSalles(){
      const id = this.$route.params.id;

      return sallesResource.get(`${id}`)
        .then((response) => {
          this.salle = response.data;
        })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    }
  }
});
