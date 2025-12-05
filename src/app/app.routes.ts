import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { BoardComponent } from './board/board';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'board', component: BoardComponent }
];
