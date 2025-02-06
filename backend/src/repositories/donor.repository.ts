import db from '../database/sqlite'

class DonorRepository {
    getAllDonors(): Promise<any[]> {
        return new Promise((res, rej) => {
            db.all('SELECT * FROM доноры', [], (err:any, rows:any) => {
                if (err) {
                    rej(err)
                } else {
                    res(rows)
                }
            })
        })
    }
}

// Singleton
export default  new DonorRepository()