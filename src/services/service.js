export default class RestoService {
    async getMenuItem() {
        const res = await fetch("http://localhost:3000/menu")

        if (!res.ok) {
            throw new Error(`Could not fetch, received status: ${res.status} `)
        }
        return await res.json()
    }
}