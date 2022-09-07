import * as Sentry from "https://esm.run/@sentry/browser"
import { BrowserTracing } from "https://esm.run/@sentry/tracing"

Sentry.init({
  dsn: "https://4f41364704974e929ca693d023130c27@o1042358.ingest.sentry.io/6405535",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})
export default Sentry
