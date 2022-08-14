import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InterceptorService } from './shared/services/Interceptor/interceptor.service';
import { LoaderService } from './shared/services/loader/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      // useclass: NetworkInterceptor,
      multi: true,
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
