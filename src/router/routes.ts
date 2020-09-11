const ALL_PAGE_NAMES = ["index"] as const;
type PageName = typeof ALL_PAGE_NAMES[number];

type PageRoute = { readonly path: string };
type Routes = { readonly [key in PageName]: PageRoute };

const routes: Routes = {
  index: {
    path: "/",
  },
} as const;

export { routes };
export type { PageRoute, Routes };
