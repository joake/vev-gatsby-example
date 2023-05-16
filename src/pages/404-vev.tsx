import * as React from "react"
import { Link, HeadFC, PageProps, Script } from "gatsby"
import VevEmbed from "../components/VevRender"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <VevEmbed projectKey={'L-E6Ri7E7c'} pageKey={'pvaUTri_mtk'} />
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
