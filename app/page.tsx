import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import bannerImage from "@/public/bannerfswbarber.png"
import cabeloIcon from "@/public/heroicons_scissors-20-solid.svg"
import barbaIcon from "@/public/mdi_mustache.svg"
import acabamentoIcon from "@/public/mdi_razor-double-edge.svg"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { db } from "@/lib/prisma"
import BarbershopItem from "@/components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barberShop.findMany({})
  const popularBarbershops = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jorge!</h2>

        <p>Segunda, 19 de Maio</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />

          <Button>
            <Search />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image
              src={cabeloIcon}
              alt="Corte de cabelo"
              width={16}
              height={16}
            />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src={barbaIcon} alt="Barba" width={16} height={16} />
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src={acabamentoIcon}
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src={cabeloIcon}
              alt="Corte de cabelo"
              width={16}
              height={16}
            />
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src={barbaIcon} alt="Barba" width={16} height={16} />
            Barba
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src={bannerImage}
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>

              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>

                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Maio</p>

              <h3 className="text-2xl">19</h3>

              <p className="text-sm">19:45</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barberShop) => (
            <BarbershopItem key={barberShop.id} barbershop={barberShop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barberShop) => (
            <BarbershopItem key={barberShop.id} barbershop={barberShop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
