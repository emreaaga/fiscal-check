// app/receipt/page.tsx (серверный)
import ReceiptClient from "./ReceiptClient"

export default function ReceiptPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return <ReceiptClient searchParams={searchParams} />
}