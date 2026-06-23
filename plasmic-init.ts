import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Mirror } from "@/components/Mirror";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "2RDhVZaGASfXhyUnkTAygx",
      token: "YbwFQJRyS4UBywY2CaO5ufLxfShTfh6PClIug81ePVRuyWy6K827KCJim9sVWWEDoG8FbhNG1cBkyXxWc2qg",
    },
  ],
  platformOptions: {
    nextjs: {
      appDir: false,
    }
  },
  
  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

PLASMIC.registerComponent(Mirror, {
  name: 'blink Mirror',
  displayName: 'blink Mirror',
  description:
    'Renders a local Plasmic component by name. Bind componentId to a global context string for client-specific content in shared library components. Mirrored components must be listed in PLASMIC_COMPONENTS_ADDON for build-time prefetch.',
  props: {
    componentId: {
      type: 'string',
      description: 'Plasmic component name to render.',
    },
    className: 'string',
  },
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
