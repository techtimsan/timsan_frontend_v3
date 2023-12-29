"use client"
import { ProvidersProps } from "@/types/app"
import { NextUIProvider } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export function Providers({ children }: ProvidersProps) {
  const router = useRouter()

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
}
