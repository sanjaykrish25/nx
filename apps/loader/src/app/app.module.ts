import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SpinnerComponent } from './spinner/spinner.component';
import{ UiLoaderModule } from 'ariqt-loader';
import { UiInputModule } from 'ariqt-input';
import { UiPopupModule } from 'ariqt-popup';
// import { UiTableModule } from 'ariqt-table';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, SpinnerComponent ],
  imports: [
    BrowserModule,
    UiLoaderModule,
    UiInputModule,
    UiPopupModule,
 
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
