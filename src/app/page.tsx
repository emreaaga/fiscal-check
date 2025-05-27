"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const router = useRouter()
  const [status, setStatus] = useState<string | null>(null)

  const handleGenerate = () => {
    if (!status) return alert("Выберите статус перед генерацией чека")

    const date = new Date().toLocaleString()
    const id = Math.random().toString(36).slice(2, 10).toUpperCase()

    router.push(`/receipt?status=${status}&date=${encodeURIComponent(date)}&id=${id}`)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Select onValueChange={(value) => setStatus(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Выберите статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Статус</SelectLabel>
              <SelectItem value="Оплачен">Оплачен</SelectItem>
              <SelectItem value="Возврат">Возврат</SelectItem>
              <SelectItem value="Отмена">Аванс</SelectItem>
              <SelectItem value="Кредит">Кредит</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button onClick={handleGenerate}>
          Сгенерировать чек
        </Button>
      </main>
    </div>
  )
}
