"use client";
import { AppStore, makeStore } from "@/redux/store";
import { useState } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxStoreProvider({ children }: { children: React.ReactNode }) {
  const [storeData] = useState<{
    store: AppStore;
    persistor: ReturnType<typeof persistStore>;
  }>(() => {
    const store = makeStore();
    const persistor = persistStore(store);
    return { store, persistor };
  });

  if (!storeData) {
    return null;
  }

  return (
    <Provider store={storeData.store}>
      <PersistGate loading={null} persistor={storeData.persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
