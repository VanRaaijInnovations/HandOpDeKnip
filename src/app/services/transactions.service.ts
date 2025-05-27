import { Injectable } from '@angular/core';
import { PickFilesResult } from '@capawesome/capacitor-file-picker';
import { ITransaction } from '../interfaces/transaction.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(
  ) {

  }

  decodeBase64(str: string): string {
    try {
      return Buffer.from(str, 'base64').toString('binary');
    } catch (e) {
      console.error('Error decoding base64 string:', e);
      return str; // Return the original string if decoding fails
    }
  }

  async importTransactions(pickFiles: PickFilesResult): Promise<ITransaction[]> {
    try {
      if (pickFiles.files && pickFiles.files.length > 0) {
        const file = pickFiles.files[0];
        console.log('Selected file:', file);

        if (file.data) {
          const decodedData = this.decodeBase64(file.data);
          console.log('Decoded file data:', decodedData);

          // Proces the decoded date line by line
          const lines = decodedData.split('\n').map(line => line.trim()).filter(line => line.length > 0);
          console.log('Processed lines:', lines);

          var transactions: ITransaction[] = lines.map(line => {
            const parts = line.split('\t');
            return {
              id: uuidv4(),
              date: new Date(
                `${parts[2].slice(0, 4)}-${parts[2].slice(4, 6)}-${parts[2].slice(6, 8)}`
              ),
              type: parts[6].startsWith('-') ? 'expense' : 'income',
              description: parts[7],
              amount: parseFloat(parts[6].replace("-","").replace(',', '.')),
            }
          });

          console.log('Parsed transactions:', transactions);
          return transactions;
        }
      }
    } catch (error: any) {
      if (error && error.message !== 'User cancelled') {
        console.error('File picking failed:', error);
      }
    }
    return [];
  }
}
