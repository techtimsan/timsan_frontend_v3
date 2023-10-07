import { CustomTabProps } from "@/types/app"
import { Tabs, Tab } from "@nextui-org/tabs"

const CustomTab = ({ tabChildren, title }: CustomTabProps) => {
  return (
    <Tabs variant="underlined" fullWidth aria-label="State Chapters">
      {tabChildren.map((tabChild) => (
        <Tab key={title}>{tabChild}</Tab>
      ))}
    </Tabs>
  )
}

export default CustomTab
