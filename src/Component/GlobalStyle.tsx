import React from 'react'
import {Global, css} from "@emotion/react"

const GlobalStyle: React.FC = () => {
  return (
    <div>
      <Global
        styles={css`
          @font-face {
            font-family: "CustomFont";
            src: url("../Font/static/Raleway-Black.ttf");
            src: url("../Font/static/Raleway-Bold.ttf");
            src: url("../Font/static/Raleway-ExtraBold.ttf");
            src: url("../Font/static/Raleway-ExtraLight.ttf");
            src: url("../Font/static/Raleway-Light.ttf");
            src: url("../Font/static/Raleway-Medium.ttf");
            src: url("../Font/static/Raleway-Regular.ttf");
            src: url("../Font/static/Raleway-SemiBold.ttf");
            src: url("../Font/static/Raleway-Thin.ttf");
          }
        `}
      />
    </div>
  );
}

export default GlobalStyle;