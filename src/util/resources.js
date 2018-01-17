import axios from 'axios';

import { API_BASE } from 'src/config/constants';

export const enseignantsResource = axios.create({
  baseURL: `${API_BASE}/api/enseignant/`
});
export const sallesResource = axios.create({
  baseURL: `${API_BASE}/api/salle/`
});

