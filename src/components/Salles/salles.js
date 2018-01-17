import Vue from 'vue';

import { sallesResource } from 'src/util/resources';
import template from './salles.html';

const animation = 'flipInX';
const animationDelay = 25; // in ms

export default Vue.extend({
  template,

  data() {
    return {
     sallesFilter: '',
      salles: []
    };
  },

  computed: {
    filteredSalles() {
      return this.salles.filter((salle) => salle.libelle.toLowerCase().indexOf(this.sallesFilter.toLowerCase()) !== -1);
    }
  },

  created(){
    this.fetchSalles();
  },

  methods: {
    fetchSalles(){
      return sallesResource.get('/')
        .then((response) => {
          this.salles = response.data;
        })
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
