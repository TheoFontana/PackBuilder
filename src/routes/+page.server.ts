import type { PageServerLoad } from "./$types"
import { prisma } from "$lib/server/prisma"

export const load: PageServerLoad = async () => {
    return {
        users: await prisma.user.findMany(),
    }
}