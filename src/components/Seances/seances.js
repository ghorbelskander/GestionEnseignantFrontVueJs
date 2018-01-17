import Vue from 'vue';

import { seancesResource } from 'src/util/resources';
import template from './seances.html';

const animation = 'flipInX';
const animationDelay = 25; // in ms

export default Vue.extend({
  template,

  data() {
    return {
     seancesFilter: '',
      seances: []
    };
  },

  computed: {
    filteredSeances() {
      return this.seances.filter((seance) => seance.libelle.toLowerCase().indexOf(this.seancesFilter.toLowerCase()) !== -1);
    }
  },

  created(){
    this.fetchSeances();
  },

  methods: {
    fetchSeances(){
      return seancesResource.get('/')
        .then((response) => {
          this.seances = response.data;
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
