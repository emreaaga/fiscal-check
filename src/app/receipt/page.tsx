import { Suspense } from "react"
import ReceiptClient from "./ReceiptClient"

export default function ReceiptPage({ searchParams }: { searchParams: { status?: string; date?: string; id?: string } }) {
  return (
    <Suspense fallback={<div>Загрузка чека...</div>}>
      <ReceiptClient status={searchParams.status} date={searchParams.date} id={searchParams.id} />
    </Suspense>
  )
}