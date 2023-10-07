"use client"
import { ProvidersProps } from "@/types/app"
import { NextUIProvider } from "@nextui-org/react"

export function Providers({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>
}
