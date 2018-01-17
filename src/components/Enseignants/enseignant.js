import Vue from 'vue';

import { enseignantsResource } from 'src/util/resources';
import template from './enseignant.html';

export default Vue.extend({
  template,

  data() {
    return {
      enseignant: {}
    };
  },

  created(){
    this.fetchEnseignant();
  },

  methods: {
    fetchEnseignant(){
      const id = this.$route.params.id;

      return enseignantsResource.get(`${id}`)
        .then((response) => {
          this.enseignant = response.data;
        })
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    }
  }
});
