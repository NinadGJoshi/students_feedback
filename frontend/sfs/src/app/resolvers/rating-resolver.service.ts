import { Injectable } from '@angular/core';
import { StatusService } from '../services/status.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingResolverService implements Resolve<any> {
  constructor(private statusService: StatusService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.loadTeacherRatingData().pipe(tap(response => {
      this.statusService.setTeacherRatingData(response);
    }), catchError(error => ([])));
  }

  private readonly teachersInfoEndPoint: string = 'http://localhost:8000/students/teachers';

  public loadTeacherRatingData() {
    return this.statusService.getTeachersInfo(this.teachersInfoEndPoint);
  }
}