const routes = [
  {
    path: "/",
    component: () => import("@/views/Discover/Discover"),
  },
  {
    path: "/discover",
    component: () => import("@/views/Discover/Discover"),
  },
  {
    path: "/discover/toplist",
    component: () => import("@/views/Discover/Toplist"),
  },
];

export default routes;
