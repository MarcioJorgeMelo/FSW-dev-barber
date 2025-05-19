import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import bannerImage from "@/public/bannerfswbarber.png"
import cabeloIcon from "@/public/heroicons_scissors-20-solid.svg"
import barbaIcon from "@/public/mdi_mustache.svg"
import acabamentoIcon from "@/public/mdi_razor-double-edge.svg"
import sobrancelhaIcon from "@/public/mingcute_eyebrow-fill.svg"
import massagemIcon from "@/public/ph_towel-fill.svg"
import hidratacaoIcon from "@/public/hugeicons_shampoo.svg"
import { Card, CardContent } from "@/components/ui/card"
import { db } from "@/lib/prisma"
import BarbershopItem from "@/components/barbershop-item"
import BookingItem from "@/components/bookingItem"

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
              src={sobrancelhaIcon}
              alt="Sobrancelha"
              width={16}
              height={16}
            />
            Sobrancelha
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src={massagemIcon} alt="Massagem" width={16} height={16} />
            Massagem
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image
              src={hidratacaoIcon}
              alt="Hidratação"
              width={16}
              height={16}
            />
            Hidratação
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

        <BookingItem />

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
