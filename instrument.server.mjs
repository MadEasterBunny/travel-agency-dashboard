import * as Sentry from "@sentry/react-router";
//  profiling
import { nodeProfilingIntegration } from "@sentry/profiling-node";
//  profiling
Sentry.init({
    dsn: "https://63a45f48c8be87e19d14430289ce3ea3@o4510063442198528.ingest.us.sentry.io/4510063446261760",
    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
    //  logs
    // Enable logs to be sent to Sentry
    enableLogs: true,
    //  logs
    //  profiling
    integrations: [nodeProfilingIntegration()],
    //  profiling
    //  performance
    tracesSampleRate: 1.0, // Capture 100% of the transactions
    //  performance
    //  profiling
    profilesSampleRate: 1.0, // profile every transaction
    //  profiling
});