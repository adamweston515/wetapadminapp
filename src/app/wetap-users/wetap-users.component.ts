import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';
import { ExportDataService } from '../export-data.service';
import { SharedFeatureService } from '../shared-feature.service';

@Component({
  selector: 'app-wetap-users',
  templateUrl: './wetap-users.component.html',
  styleUrls: ['./wetap-users.component.scss'],
})
export class WetapUsersComponent {
  constructor(
    private db: AngularFirestore,
    private exportDataService: ExportDataService,
    private sharedFeatureService: SharedFeatureService
  ) {}
  exportUsers() {
    this.exportDataService
      .getAllUsersToExport()
      .pipe(take(1))
      .subscribe((x) => {
        this.sharedFeatureService.ExportToExcel(x);
      });
  }
}
