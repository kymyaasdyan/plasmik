import { initPlasmicLoader } from "@plasmicapp/loader-react";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "YOUR_PROJECT_ID",  // شناسه پروژه پلازمیک
      token: "YOUR_API_TOKEN" // توکن پلازمیک
    }
  ],
});
