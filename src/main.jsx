import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  CartProvider,
  WishlistProvider,
  AllValuesProvider,
} from "./contextApi/context.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AllValuesProvider>
        <CartProvider>
          <WishlistProvider>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </WishlistProvider>
        </CartProvider>
      </AllValuesProvider>
    </QueryClientProvider>
  </StrictMode>
);
