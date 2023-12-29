"use client"

import { ReactNode, createContext, useState } from "react"

type SidebarContextProps = {
  children: ReactNode | ReactNode[]
}

const initialValue = {
  isSidebarCollapsed: true,
  toggleSidebarCollapseHandler: () => {},
}

export const SidebarContext = createContext(initialValue)

const SidebarProvider = ({ children }: SidebarContextProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false)

  const toggleSidebarCollapseHandler = () => {
    setIsSidebarCollapsed((prev) => !prev)
  }
  return (
    <SidebarContext.Provider
      value={{ isSidebarCollapsed, toggleSidebarCollapseHandler }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider