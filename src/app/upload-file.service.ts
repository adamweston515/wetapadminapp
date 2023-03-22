import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  constructor(private db: AngularFirestore) {}

  async importDataFromExcel(file: File) {
    let success = true;
    const promises: any[] = [];
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      const data = reader.result;
      const wb = XLSX.read(data, { type: 'binary' });
      wb.SheetNames.forEach(async (sheetname: any) => {
        const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheetname], {
          header: 1,
        });
        console.log(rows);
        const data = rows.slice(1).map((row: any) => ({
          lat: row[0],
          lng: row[1],
          title: row[2],
        }));
        console.log(data);
        data.forEach(async (location) => {
          const promise = await this.db
            .collection('Location')
            .add(location)
            .catch((error) => {
              console.error(error);
              success = false;
              alert('Error occurred. Check browser console for more detail');
            });
          promises.push(promise);
        });
        await Promise.all(promises);
        alert('Successfully Inserted all data');
      });
    };
    reader.onerror = (error) => {
      console.log('error : ' + error);
      alert('Error occurred. Check browser console for more detail');
    };
  }
}
