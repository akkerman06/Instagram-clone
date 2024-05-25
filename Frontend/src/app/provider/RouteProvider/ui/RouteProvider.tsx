import { Spinner } from "@/shared/ui";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import AppLayout from "./AppLayout";
import {
  HomePage,
  LoginLazyPage,
  ProfileLazyPage,
  RegisterLazyPage,
} from "@/pages";
import SavedPostsPage from "@/pages/SavedPostsPage/ui/SavedPostsPage";

const RouteProvider = () => {
  return (
    <Suspense fallback={<Spinner className="spinner" />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfileLazyPage />} />
          <Route path="/getSavePosts" element={<SavedPostsPage />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<LoginLazyPage />} />
          <Route path="/register" element={<RegisterLazyPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default RouteProvider;
