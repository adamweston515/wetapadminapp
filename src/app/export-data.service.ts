import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { SharedFeatureService } from './shared-feature.service';

@Injectable({
  providedIn: 'root',
})
export class ExportDataService {
  constructor(
    private db: AngularFirestore,
    private sharedFeatureService: SharedFeatureService
  ) {}

  getAllLocationToExport() {
    try {
      return this.db
        .collection('Location')
        .snapshotChanges()
        .pipe(
          map((action) =>
            action.map(this.sharedFeatureService.documentToDomainObject)
          )
        );
    } catch (error: any) {
      throw new Error(error);
    }
  }

  getAllUsersToExport() {
    try {
      return this.db
        .collection('Users')
        .snapshotChanges()
        .pipe(
          map((action) =>
            action.map(this.sharedFeatureService.documentToDomainObject)
          )
        );
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
