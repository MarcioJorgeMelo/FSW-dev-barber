"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

interface CreateBookingParams {
  serviceId: string
  userId: string
  date: Date
  description: string
}

export const createBooking = async (params: CreateBookingParams) => {
  await db.booking.create({
    data: params,
  })

  revalidatePath("/barbershops/[id]")
  revalidatePath("/bookings")
}
