import { Component, OnInit, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal, NgbAlert, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component'
import { FileModel } from '../model/FileModel';
import { ApiService } from '../api.service';
import { ResponseModel } from '../model/responseModel';
@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  fileUPload: FileModel;
  public listData = [];
  fileList = [];
  filterText = "";
  constructor(public dialog: MatDialog,
     private modalService: NgbModal, private apiService: ApiService
     ) {
  }
  ngOnInit(): void {
   
    this.GetFiles();
  }

 public Refresh(){
 window.location.reload();
 console.log(Response.error);
 }

  deleteFile(id: number): void{
    this.apiService.deleteFile(id).subscribe(
       data    =>{
         alert(data.message);
      }, error => {
          if (!error.error.status)
           {
             alert(error.error.message);
           }else{
             alert(error)
           }
           console.log("***** ERROR *****")
           console.log(error);
           console.log(error.error.message);
         });
         this.Refresh();
       } 
      
  openModel(id) {
    const dialogRef = this.dialog.open(PopupComponent,{
      data:{
        message: 'Do you really want to delete this file ?',
        buttonText: {
          ok: 'Delete',
          cancel: 'Cancel'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteFile(id);
      }
    });

  }
  array =[];
  getFiledata(fileList){
    this.array = fileList;
  }

  GetFiles(){
     this.apiService.getFiles().subscribe((data:any)=>{

      let list:Array<FileModel> = [];
      data.forEach((val,i) => {
        console.dir(data);

        
        let  model = new FileModel();
        model.fileName = val.FileName;
        model.fileSize = val.FileSize;
        model.fileID = val.FileID;
        model.fileUploadedDate = val.FileUploadedDate;
        list.push(model);
      });
    this.array = list;
     }, error => {
      if (!error.error.status)
      {
        alert(error.error.message);
      }else{
        alert(error);
      }
    });

  }

}
