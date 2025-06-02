"use server"

import { authOptions } from "@/lib/auth"
import { db } from "@/lib/prisma"
import { getServerSession } from "next-auth"

export const getConcludedBookings = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return []
  }

  return db.booking.findMany({
    where: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userId: (session.user as any).id,
      date: {
        lte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barberShop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })
}
