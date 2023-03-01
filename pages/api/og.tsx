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
      ? searchParams.get("title").slice(0, 75)
      : "Programación y Desarrollo Web con JavaScript";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              "url(https://baumannzone-dev-og.vercel.app/open-graph-bg.png)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            backgroundColor: "#aaa",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              marginTop: 130,
              marginLeft: 525,
              fontSize: 105,
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