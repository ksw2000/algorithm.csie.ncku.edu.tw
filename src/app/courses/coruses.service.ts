import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CoursesFiles } from './courses.data';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) { }
  
  getLoginStatus() {
    return this.http.get<LoginStatus>("/api/login", {
      responseType: "json"
    });
  }

  pushLogin(req: LoginReq): Observable<LoginRes>{
    return this.http.post<LoginRes>("/api/login", req)
    .pipe(
      catchError(this.handleError)
    );
  }

  loadFiles(coursedID: string) {
    return this.http.get<CoursesFiles>("/api/file?dir="+coursedID, {
      responseType: "json"
    })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

export interface LoginReq{
    student_id: string;
}

class LoginRes{
    err: string = "";
}

class LoginStatus {
    is: boolean = false;
}