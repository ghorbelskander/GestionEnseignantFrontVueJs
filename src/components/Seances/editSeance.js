import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import { seancesResource } from 'src/util/resources';
import template from './editSeance.html';

export default Vue.extend({
  template,

  data() {
    return {
      seance: {},
      message: null,
      id: this.$route.params.id,
    };
  },

  computed: {
    isDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  },

  created(){
    this.fetchSeance();
  },

  methods: {
    handleSubmit(){
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.saveSeance();
        }

        return this;
      });
    },

    showMessage(message = {}, timeout = 2000){
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, timeout);
    },

    saveSeance(){
      return seancesResource.put('', this.seance)
        .then((response) => {
          this.seance = response.data;

          this.showMessage({
            type: 'success',
            text: 'Seance updated!'
          });

          // TODO: We need to reset the form after success....
          // this.fields.reset();
        })
        .catch((errorResponse) => {
          // Handle error...
          this.showMessage({
            type: 'danger',
            text: errorResponse
          });
          console.log('API responded with:', errorResponse);
        });
    },

    fetchSeance(){
      return seancesResource.get(`${this.id}`)
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
