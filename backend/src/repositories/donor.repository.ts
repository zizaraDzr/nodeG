import db from '../database/sqlite'

class DonorRepository {
    getAllDonors(): Promise<any[]> {
        return new Promise((res, rej) => {
            db.all('SELECT * FROM donors', [], (err:any, rows:any) => {
                if (err) {
                    console.error('Database error:', err.message)
                    rej(err)
                } else {
                    res(rows)
                }
            })
        })
    }
     // Получение донора по ID
     getDonorById(id: number): Promise<any> {
        return new Promise((res, rej) => {
            db.get('SELECT * FROM donors WHERE donor_id = ?', [id], (err: any, row: any) => {
                if (err) {
                    console.error('Database error:', err.message);
                    rej(err);
                } else {
                    res(row);
                }
            });
        });
    }
}

// Singleton
export default  new DonorRepository()