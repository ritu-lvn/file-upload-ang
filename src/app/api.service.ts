import { Injectable,  } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseModel } from './model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  selectedFile: File;
  
  constructor(private http:HttpClient) { }

  getFiles(){
     return this.http.get('https://serverfileupload.herokuapp.com/listfiles').pipe(
      map((data: [] , res) => {

        console.log(res)
        return data;
      }), catchError( error => {
        return throwError( error);
      })
   )
    
  }

   postFiles(file : File) : Observable<ResponseModel>
{
  this.selectedFile = file;
  let formData = new FormData();
  formData.append('myFile', this.selectedFile, this.selectedFile.name);
 return this.http.post<ResponseModel>('https://serverfileupload.herokuapp.com/uploadfile', formData);
 
  
 // return this.http;

}
handleError(error: HttpErrorResponse){
  return throwError(error);
  }

deleteFile(id){
 return this.http.delete<ResponseModel>(`${'https://serverfileupload.herokuapp.com/deletefile'}/${id}`);
}



 }


