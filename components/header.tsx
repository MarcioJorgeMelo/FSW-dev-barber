import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import LogoImg from "@/public/logofswbarber.svg"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image src={LogoImg} alt="Logo do FSW Barber" height={18} width={120} />

        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
