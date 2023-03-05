import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';
import { ExportDataService } from '../export-data.service';
import { SharedFeatureService } from '../shared-feature.service';

@Component({
  selector: 'app-wetap-locations',
  templateUrl: './wetap-locations.component.html',
  styleUrls: ['./wetap-locations.component.scss'],
})
export class WetapLocationsComponent {
  constructor(
    private db: AngularFirestore,
    private exportDataService: ExportDataService,
    private sharedFeatureService: SharedFeatureService
  ) {}
  exportLocation() {
    this.exportDataService
      .getAllLocationToExport()
      .pipe(take(1))
      .subscribe((x) => {
        this.sharedFeatureService.ExportToExcel(x);
      });
  }
}
