import dynamic from "next/dynamic"
import { Suspense } from "react"

const ReceiptClient = dynamic(() => import("./ReceiptClient"), { ssr: false })

export default function ReceiptPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <ReceiptClient />
    </Suspense>
  )
}