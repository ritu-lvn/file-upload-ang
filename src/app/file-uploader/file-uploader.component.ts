
import { Component, OnInit, Injectable,  Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FileModel } from '../model/FileModel';
import { ApiService } from '../api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
 selector: 'app-file-uploader',
 templateUrl: './file-uploader.component.html',
 styleUrls: ['./file-uploader.component.scss']
})
@Injectable()
export class FileUploaderComponent implements OnInit {
  @Input() fileList:FileModel [] = [];
  ngOnInit(): void {
  }


 public formGroup = this.fb.group({
   file: [null, Validators.required]
 });
 public input = document.getElementById('input')

 public fileName;
 public model: FileModel;
 public fileToUpload: File ;
 date = new Date();

prfileForm: FormGroup;
fileUpload :[];
 constructor(private fb: FormBuilder, private apiService : ApiService, 
   private SpinnerService: NgxSpinnerService ) {
    

  }

 public onFileChange(event) {
   const reader = new FileReader();
  
   if (event.target.files && event.target.files.length) {
    this.fileName = event.target.files[0].name;
     const [file] = event.target.files;
     reader.readAsDataURL(file);
  
    this. fileToUpload = event.target.files[0]
     reader.onload = () => {
       this.formGroup.patchValue({
         file: reader.result
       });
     };
   }
 }

refresh(){
  window.location.reload();
}


 public onSubmit(): void {
  this.SpinnerService.show();
  this.apiService.postFiles(this.fileToUpload).subscribe(data => {
   
    this.refresh();
    console.log("***** DATA *****")
    console.log(data);
    
    alert(data.message);
    
  }, error => {
    this.SpinnerService.hide();
    if (!error.error.status)
    {
      alert(error.error.message);
    }else{
      alert(error)
    }
    
  });
  
}
}

