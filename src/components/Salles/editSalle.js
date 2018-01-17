import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import { sallesResource } from 'src/util/resources';
import template from './editSalle.html';

export default Vue.extend({
  template,

  data() {
    return {
      salle: {},
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
    this.fetchSalle();
  },

  methods: {
    handleSubmit(){
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.saveSalle();
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

    saveSalle(){
      return sallesResource.put('', this.salle)
        .then((response) => {
          this.salle = response.data;

          this.showMessage({
            type: 'success',
            text: 'Post updated!'
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

    fetchSalle(){
      return sallesResource.get(`${this.id}`)
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
