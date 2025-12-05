import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),

    importProvidersFrom(
      CommonModule,
      FormsModule,
      MatDialogModule,
      DragDropModule
    )
  ]
};
