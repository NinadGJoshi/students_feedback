import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StatusService } from '../services/status.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeebackStatusResolverService implements Resolve<any> {

  private readonly url: string = 'http://localhost:8000/students/';
  constructor(private statusService: StatusService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.statusService.getStatus(this.url).pipe(
      tap(response => this.statusService.setStudentsFeedbackData(response)),
      catchError(error => ([]))
    )
  }
}