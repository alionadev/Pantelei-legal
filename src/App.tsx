import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { PracticePage } from "./pages/PracticePage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { FaqPage } from "./pages/FaqPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const localizedRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/despre-aliona", element: <AboutPage /> },
  { path: "/servicii/:slug", element: <PracticePage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/:slug", element: <BlogPostPage /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/contact", element: <ContactPage /> },
];

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      {localizedRoutes.map((route) => (
        <Route key={`ro${route.path}`} path={route.path} element={route.element} />
      ))}
      {localizedRoutes.map((route) => (
        <Route key={`ru${route.path}`} path={`/ru${route.path === "/" ? "" : route.path}`} element={route.element} />
      ))}
      <Route path="/ru/" element={<Navigate to="/ru" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
