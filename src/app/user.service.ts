import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filter, Observable } from 'rxjs';
import { AdminUser } from './model/adminUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  get(uid: string): Observable<AdminUser> {
    return this.db
      .doc<AdminUser>('AdminUser/' + uid)
      .valueChanges()
      .pipe(
        filter(
          (adminUser: AdminUser | undefined): adminUser is AdminUser =>
            adminUser !== undefined
        )
      );
  }
}
