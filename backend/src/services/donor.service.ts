import donorRepository from "../repositories/donor.repository"

class DonorService {
    async getAllDonors() {
        return await donorRepository.getAllDonors()
    }
}


export default DonorService