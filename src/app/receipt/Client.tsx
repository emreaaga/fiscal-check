"use client"

import { useSearchParams } from "next/navigation"

export default function ReceiptPage() {
    const params = useSearchParams()
    const status = params.get("status")
    const date = params.get("date")
    const id = params.get("id")
    const noqr = params.get("noqr") === "true"
    const bgColor = params.get("bgColor") || "#FFF3CD"
    const textColor = params.get("textColor") || "#856405"
    const word = params.get('word')

    const getTextColor = (status: string) => {
        if (status === "Кредит") return "#E9B306"     
        if (status === "Аванс") return "#E9573F"      
        return "#374151"                             
    }


    if (!status || !date || !id) {
        return <div className="p-10 text-red-500">Нет данных для чека</div>
    }

    return (
        <div className="w-full max-w-2xl h-auto min-h-screen mx-auto bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 text-sm border text-[#374151]">
            <h1
                className="text-center text-lg"
                style={{ color: getTextColor(status) }}
            >
                {word}
            </h1>
            <div className="text-center text-lg color=[#374151] mb-2">- 0</div>

            <div className="mb-2 text-[#505050]">
                <p>EZ000000000703</p>
                <p>Chek raqami: 38705246</p>
                <p>Agrеgator nomi:</p>
                <p>14.11.2024, 17:29</p>
            </div>

            <hr className="border-dashed border-t my-2 border-[#5C5C5C]" />

            <div className="grid grid-cols-[1fr_4rem_6rem] gap-2 text-[#252525]">
                <span className="font-semibold">Nomi</span>
                <span className="font-semibold text-center">Soni</span>
                <span className="font-semibold text-right">Narxi</span>
            </div>

            <hr className="my-2 border-t border-[#CDCCCC]" />

            <div className="grid grid-cols-[1fr_4rem_6rem] gap-2 text-[#505050]">
                <span>Услуги по обработке данных</span>
                <span className="text-center">1</span>
                <span className="text-right">1,000.00</span>
            </div>


            <div className="mt-2 text-[11px] font-light leading-tight space-y-1 text-[#505050]">
                <div className="flex justify-between">
                    <span>QQS qiymati</span>
                    <span>0.00</span>
                </div>
                <div className="flex justify-between">
                    <span>QQS foizi</span>
                    <span>0%</span>
                </div>
                <div className="flex justify-between">
                    <span>Chegirma/Boshqa</span>
                    <span>0/0</span>
                </div>
                <div className="flex justify-between">
                    <span>Shtrix kodi</span>
                    <span>-</span>
                </div>
                <div className="flex justify-between">
                    <span>MXIK kodi</span>
                    <span>10306002002000000</span>
                </div>
                <div className="flex justify-between items-start">
                    <span>MXIK nomi</span>
                    <div className="text-right max-w-[60%]">
                        Malumotlar bazalarini yaratish, malumotlarni qayta ishlash, uzatish (realizatsiya qilish, shu jumladan, uchinchi shaxslarga), saqlash xizmatlari (elektron hujjat aylanishi bo’yicha xizmatlardan tashqari)
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>O'lchov birligi</span>
                    <span>xizmat (marta)</span>
                </div>
                <div className="flex justify-between">
                    <span>Markirovka kodi</span>
                    <span>-</span>
                </div>
                <div className="flex justify-between">
                    <span>Komitet STIR/SHSHIR</span>
                    <span>30998614</span>
                </div>
            </div>

            <hr className="border-dashed border-t my-2 border-[#5C5C5C]" />

            <div className="text-[11px] font-light leading-tight text-[#505050]">
                <div className="flex justify-between">
                    <span>Naqd pul</span>
                    <span>0.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Bank kartalari</span>
                    <span>1,000.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Bank kartasi turi</span>
                    <span>Shaxsiy</span>
                </div>
                <div className="flex justify-between font-semibold">
                    <span className="text-lg font-semibold">Jami to'lov</span>
                    <span className="text-lg font-semibold">1,000.00</span>
                </div>
                <div className="flex justify-between">
                    <span>Umumiy QQS qiymati</span>
                    <span>0.00</span>
                </div>
                <div className="text-right">359209816245</div>
            </div>

            {!noqr && (status === "Оплачен" || status === "Возврат") && (
                <div className="flex justify-center my-2">
                    <img src="/qr_placeholder.png" alt="QR" className="w-32 h-32" />
                </div>
            )}

            <div
                className="text-center text-md p-2 rounded-l"
                style={{
                    backgroundColor: bgColor,
                    color: textColor,
                }}
            >
                {status === "Кредит" || status === "Аванс"
                    ? "To‘lovning bo‘nak, bo‘lib to‘lash, kredit turlari bo‘yicha shakllantirilgan cheklarda QR-kod va fiskal belgi mavjud bo‘lmaydi va xarid summasining 1 foizi (cashback) xaridorga qaytarilmaydi."
                    : "Ro'yxatdan chiqarilgan, nofaol onlayn-NKM cheki"}
            </div>
        </div>

    )
}