import { ImageResponse } from "@vercel/og";
import {
  defaultTitle,
  defaultFontSize,
  fontFamilyName,
  bgImageURL,
} from "../../assets/constants";

export const config = { runtime: "experimental-edge" };

const font = fetch(new URL("../../assets/OpenSans-SemiBold.ttf", import.meta.url))
  .then((res) => res.arrayBuffer());

export default async function handler(req) {
  try {
    const fontData = await font;
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const hasFontSize = searchParams.has("fontSize");
    
    // If the URL search parameter "title" is set, use the value of the parameter as the title.
    // Otherwise, use the default value.
    const title = hasTitle ? searchParams.get("title") : defaultTitle

    // If the URL search parameter "fontSize" is set and is a number,
    // use the value of the parameter as the font size.
    // Otherwise, use a default value of 65.
    const fontSize =
      hasFontSize && !isNaN(parseInt(searchParams.get("fontSize")))
        ? parseInt(searchParams.get("fontSize"))
        : defaultFontSize;

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#38bdf8",
            backgroundImage: `url(${bgImageURL})`,
            display: "flex",
            alignItems: "center",
          }}
          >
          <div
            style={{
              marginLeft: 460,
              marginBottom: 125,
              paddingLeft: 30,
              paddingRight: 30,
              fontSize: fontSize,
              fontFamily: fontFamilyName,
              color: "white",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
        
        fonts: [
          {
            name: fontFamilyName,
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (err) {
    console.log(`${err.message}`);
    return new Response(`Failed generating the image`, {
      status: 500,
    });
  }
}