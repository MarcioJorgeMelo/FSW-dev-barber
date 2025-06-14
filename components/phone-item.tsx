"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)

    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />

        <p className="text-sm">{phone}</p>
      </div>

      <div
        className="flex items-center gap-2"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        <Button variant="outline" size="sm">
          Copiar
        </Button>
      </div>
    </div>
  )
}

export default PhoneItem
