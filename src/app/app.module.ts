import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileListComponent } from './file-list/file-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { ApiService } from './api.service';
import { FilterName } from './Pipe/filter-name.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    FileListComponent,
    PopupComponent,
    FilterName,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    MatDialogModule,
    FormsModule,  
    NgxSpinnerModule 
  ],
  providers: [
  ApiService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ PopupComponent],
})
export class AppModule { 
  
}
