import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../assets/OpenSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req) {
  try {
    const fontData = await font;
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")
      : "Quick and clear CSS tips in 5 min or less";

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#38bdf8",
            backgroundImage: "url(https://ob-css-pills-og.vercel.app/open-graph-bg.png)",
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
              fontSize: 65,
              fontFamily: "Open Sans",
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
            name: "Open Sans",
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (err) {
    console.log(`${err.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}