import * as React from "react"
import { Script } from "gatsby"

interface VevProps {
    projectKey: string;
    pageKey: string;
    fill?: boolean;
}
const VevEmbed: React.FC<VevProps> = ({pageKey, projectKey, fill=true}) => {
    const ts = new Date().getTime();
    const embedUrl = `https://embed.vev.page/v1/${projectKey}/${pageKey}?ts=${ts}&target=d_${projectKey}_${pageKey}${(fill ? `&fill` : ``)}`;
    return (
      <div className={`${projectKey}_${pageKey}`} style={{maxWidth: "100%",overflowX: 'hidden'}} id={`d_${projectKey}_${pageKey}`} >
        <h1>{ts}</h1>
        <script id={`vev-embed-script-${projectKey}-${pageKey}`} src={embedUrl}></script>
      </div>
    )
  }
  export default VevEmbed