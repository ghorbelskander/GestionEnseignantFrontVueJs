import Home from 'components/Home/home';
import Enseignants from 'components/Enseignants/enseignants';
import Enseignant from 'components/Enseignants/enseignant';
import createEnseignant from 'components/Enseignants/createEnseignant';
import EditEnseignant from 'components/Enseignants/editEnseignant';
import NotFound from 'components/NotFound/notFound';
import Salles from 'components/Salles/salles';
import Salle from 'components/Salles/salle';
import CreateSalle from 'components/Salles/createSalle';
import EditSalle from 'components/Salles/editSalle';
import Seances from 'components/Seances/seances';
import Seance from 'components/Seances/seance';
import CreateSeance from 'components/Seances/createSeance';
import EditSeance from 'components/Seances/editSeance';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
      path: '/seances',
    component: Seances
  },
  {
    path: '/seances/create',
    name: 'createSeance',
    component: CreateSeance
  },
  {
    path: '/seance/:id',
    name: 'seance',
    component: Seance
  },
  {
    path: '/seance/:id/edit',
    name: 'editSeance',
    component: EditSeance
  },

   {
    path: '/enseignants',
    component: Enseignants
  },
  {
    path: '/enseignants/create',
    name: 'createEnseignant',
    component: createEnseignant
  },
  {
    path: '/enseignant/:id',
    name: 'enseignant',
    component: Enseignant
  },
    {
    path: '/enseignant/:id/edit',
    name: 'editEnseignant',
    component: EditEnseignant
  },
   {
    path: '/salles',
    component: Salles
  },
  {
    path: '/salles/create',
    name: 'createSalle',
    component: CreateSalle
  },
  {
    path: '/salle/:id',
    name: 'salle',
    component: Salle
  },
  {
    path: '/salle/:id/edit',
    name: 'editSalle',
    component: EditSalle
  },
  {
    path: '*',
    component: NotFound
  }

];

export default routes;
