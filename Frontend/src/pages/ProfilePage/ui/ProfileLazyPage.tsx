import { lazy } from "react";

export const ProfileLazyPage = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./ProfilePage')) , 1000)
}))