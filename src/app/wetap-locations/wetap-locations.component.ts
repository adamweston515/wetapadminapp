import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { take } from 'rxjs';
import { ExportDataService } from '../export-data.service';
import { SharedFeatureService } from '../shared-feature.service';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-wetap-locations',
  templateUrl: './wetap-locations.component.html',
  styleUrls: ['./wetap-locations.component.scss'],
})
export class WetapLocationsComponent {
  file!: File;
  constructor(
    private db: AngularFirestore,
    private exportDataService: ExportDataService,
    private sharedFeatureService: SharedFeatureService,
    private uploadExcelService: UploadFileService
  ) {}
  exportLocation() {
    this.exportDataService
      .getAllLocationToExport()
      .pipe(take(1))
      .subscribe((x) => {
        this.sharedFeatureService.ExportToExcel(x);
      });
  }

  fileChangeListener(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
      return;
    }
    this.file = file;
  }

  async importLocation() {
    // const target = event.target as HTMLInputElement;
    // const file = target.files?.[0];
    // if (!file) {
    //   return;
    // }
    const response = await this.uploadExcelService.importDataFromExcel(
      this.file
    );
    // if (response) {
    //   alert('Successfully Inserted all data');
    // } else {
    //   alert('Error occurred. Check browser console for more detail');
    // }
  }
}
