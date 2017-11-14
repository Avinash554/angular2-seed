import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { DatalistComponent } from './datalist/datalist.component';

const appRoutes : Routes = [


 { path: 'categorylist', component: CategorylistComponent },
 { path: 'datalist', component: DatalistComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    CategorylistComponent,
    DatalistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
