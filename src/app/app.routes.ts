import { Routes } from '@angular/router';
import { Loader } from './components/loader/loader';
import {Principal} from './components/principal/principal';

export const routes: Routes = [


  {
    path: '',
    component: Loader,
    data: { animation: 'HomePage' }
  },
  {
    path: 'home',
    component: Principal,
    data: { animation: 'SobrePage' }
  },

];
