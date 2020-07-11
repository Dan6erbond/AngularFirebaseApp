import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PreloadGuard implements Resolve<any> {
  constructor(private afs: AngularFirestore) {}

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const name = next.paramMap.get('name');

    return this.afs
      .collection('animals', (ref) => ref.where('name', '==', name).limit(1))
      .valueChanges()
      .pipe(first());
  }
}
