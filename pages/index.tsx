import {
  defaultTitle,
  defaultFontSize
} from "../assets/constants";

export default function Page() {
  return (
    <pre>
      <code style={{
        fontSize: '1.5rem',
      }}>
        {`
        path: ${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''}/api/og
        `}

        {`
        queryParams: {
          title: {
            type: 'string',
            required: false,
            default: ${defaultTitle},
          }
          fontSize: {
            type: 'number',
            required: false,
            default: ${defaultFontSize},
          }
        }`}
      </code>
    </pre>
  )
}
