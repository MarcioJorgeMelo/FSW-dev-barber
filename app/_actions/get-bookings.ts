"use server"

import { db } from "@/lib/prisma"
import { endOfDay, startOfDay } from "date-fns"

interface GetBookingsProps {
  serviceId: string
  date: Date
}

export const getBookings = ({ date, serviceId }: GetBookingsProps) => {
  return db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
      AND: {
        serviceId: serviceId,
      },
    },
  })
}
