import {NgModule} from '@angular/core';
import {AppNavbarComponent} from './component/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [
    AppNavbarComponent
  ],
  entryComponents: [
  ],
  exports: [
    AppNavbarComponent
  ],
  providers: [
  ]
})
export class SharedModule {
}
