import { Progress } from '@/shared/ui/progress'
import { Suspense } from 'react'
import {
  createBrowserRouter,
  isRouteErrorResponse,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

export default function AppRouter() {
  return (
    <Suspense fallback={<Progress />}>
      <RouterProvider
        router={browserRouter}
      />
    </Suspense>
  )
}

const browserRouter = createBrowserRouter(
  [
    {
      errorElement: <RouterErrorBoundary />,
      children: [
        {
          children: [
          ],
        },
      ],
    },
  ],
);

//#region Router Error
function RouterErrorBoundary() {
  const error = useRouteError();

  //404
  if (isRouteErrorResponse(error)) {
    return (
      <Suspense fallback={<Progress />}>
        {/* <NotFoundPage /> */}
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Progress />}>
      {/* <ErrorPage /> */}
    </Suspense>
  );
}
