import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, of, filter, map } from 'rxjs';
import { AdminUser } from './model/adminUser';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.default.User>;
  // isLocalServer: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth
  ) {
    // this.user$ = afAuth.authState;
    this.user$ = afAuth.authState.pipe(
      filter((user) => user !== null),
      map((user) => user as firebase.default.User)
    );
  }

  login(email: string, password: string) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  Logout() {
    this.afAuth.signOut();
  }

  get adminUser$(): Observable<AdminUser> {
    return this.user$.pipe(
      switchMap((user) => {
        const c = this.userService.get(user.uid);
        return c;
      })
    );
  }
}
