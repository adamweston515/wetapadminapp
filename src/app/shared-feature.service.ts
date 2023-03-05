import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class SharedFeatureService {
  constructor() {}
  documentToDomainObject = (_: any) => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  };

  ExportToExcel(jsonData: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Medhavi_Export.xlsx');
  }

  removeUndefined(object: any) {
    Object.keys(object).forEach((key) => {
      if (object[key] === undefined) {
        delete object[key];
      }
    });
  }
}
