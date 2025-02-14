import donorRepository from "../repositories/donor.repository"

class DonorService {
    async getAllDonors() {
        return await donorRepository.getAllDonors()
    }
    async getDonorById(id: number) {
        return await donorRepository.getDonorById(id)
    }
}


export default DonorService