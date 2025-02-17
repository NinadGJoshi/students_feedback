import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Students } from '../model/students';
import { Teacher } from '../model/Teacher';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public getStatus(url: string): Observable<Students>{
    return this.http.get<Students>(url).pipe(catchError(err=>throwError(err)));
  }


  public getTeachersInfo(url: string): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(url).pipe(catchError(err=>throwError(err)));
  }

  public getStudentFeedbackStatus(url: string): Observable<Students>{
    return this.http.get<Students>(url).pipe(catchError(err=>throwError(err)))
  }

  public updateStudentFeedbackStatus(url: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(url, httpOptions).pipe(catchError(err=>throwError(err)));
  }

  public updateTeacherRatings(url:string, payload: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(url, payload, httpOptions).pipe(
      catchError(err=> throwError(err))
    )
  }

  public resetTeachersRating(url: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(url, httpOptions).pipe(catchError(err=> throwError(err)))
  }

  public resetStudentsFeedback(url: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(url, httpOptions).pipe(catchError(err=> throwError(err)))
  }

  public resetStudentsFeedbackStatus(url: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(url, httpOptions).pipe(catchError(err=> throwError(err)))
  }

  public deleteTeacher(url: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete(url, httpOptions).pipe(catchError(err=> throwError(err)))
  }

  public resetAllPasswords(url: string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.put(url, httpOptions).pipe(catchError(err=>throwError(err)));
  }

  public deleteStudentRecord(url:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete(url, httpOptions).pipe(catchError(err=> throwError(err)));
  }

  private dataSource = [];
  private studentFeedbackStatusList = [];

  public getTeachersRatingData(): any {
    return this.dataSource;
  }

  public setTeacherRatingData(data: any): void {
    this.dataSource = data;
  }

  public getStudentsFeedbackData(): any {
    return this.studentFeedbackStatusList;
  }

  public setStudentsFeedbackData(data: any): void {
    this.studentFeedbackStatusList = data;
  }

  constructor(private http: HttpClient) { }
}
