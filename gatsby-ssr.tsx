// gatsby-ssr.tsx
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents, setBodyAttributes }, pluginOptions) => {
  // setPostBodyComponents([
  //   <script id="test" dangerouslySetInnerHTML={{ __html: `alert("OK");` }} />,
  // ]);
  setBodyAttributes({
    className: 'no-js'
  });
};
