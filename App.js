import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Screen from "./screen";
import "react-native-gesture-handler";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Screen />
    </QueryClientProvider>
  );
}
