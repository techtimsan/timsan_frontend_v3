import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card"

type NewsProps = {
  thumbnailUrl: string
  title: string
  content: string
}
const NewsCard = ({ thumbnailUrl, title, content}: NewsProps) => {
  return <Card></Card>
}

export default NewsCard
