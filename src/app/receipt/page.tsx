import dynamic from "next/dynamic"
import { Suspense } from "react"

// Загружаем компонент только на клиенте (SSR отключен)
const ReceiptClient = dynamic(() => import("./ReceiptClient"), { ssr: false })

export default function ReceiptPage() {
  return (
    <Suspense fallback={<div>Загрузка чека...</div>}>
      <ReceiptClient />
    </Suspense>
  )
}