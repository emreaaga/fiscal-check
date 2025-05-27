import { Suspense } from "react"
import ReceiptPage from "./Client"

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10">Загрузка...</div>}>
      <ReceiptPage />
    </Suspense>
  )
}