import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import { enseignantsResource } from 'src/util/resources';
import template from './editEnseignant.html';

export default Vue.extend({
  template,

  data() {
    return {
      enseignant: {},
      message: null
    };
  },

  computed: {
    isDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  },

  methods: {
    handleSubmit(){
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.saveEnseignant();
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



    saveEnseignant(){
      return enseignantsResource.post('/', this.enseignant)
        .then((response) => {
          this.enseignant = response.data;

          this.showMessage({
            type: 'success',
            text: 'Enseignant created!'
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
    }
  }
});
