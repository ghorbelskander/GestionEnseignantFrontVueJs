import Vue from 'vue';

import { enseignantsResource } from 'src/util/resources';
import template from './enseignants.html';

const animation = 'flipInX';
const animationDelay = 25; // in ms

export default Vue.extend({
  template,

  data() {
    return {
      enseignantsFilter: '',
      enseignants: []
    };
  },

  computed: {
    filteredEnseignants() {
      return this.enseignants.filter((enseignant) => enseignant.nom.toLowerCase().indexOf(this.enseignantsFilter.toLowerCase()) !== -1);
    }
  },

  created(){
    this.fetchEnseignants();
  },

  methods: {
     fetchEnseignants(){
      return enseignantsResource.get('/')
        .then((response) => {
          this.enseignants = response.data;
        
        } )
        .catch((errorResponse) => {
          // Handle error...
          console.log('API responded with:', errorResponse);
        });
    },

    // Methods for transitions
    handleBeforeEnter(el) {
      el.style.opacity = 0;
      el.classList.add('animated');
    },

    handleEnter(el) {
      const delay = el.dataset.index * animationDelay;
      setTimeout(() => {
        el.style.opacity = 1;
        el.classList.add(animation);
      }, delay);
    }
  }
});
