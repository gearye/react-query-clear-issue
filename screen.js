import * as React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

import { RefreshControl, ScrollView } from "react-native";
import { useQuery, useQueryClient } from "react-query";

export default function Screen() {
  const queryClient = useQueryClient();
  const { isLoading, isFetching, isError, error, data, refetch } = useQuery(
    ["test"],
    async () => {
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
      queryClient.clear();
      return "has data!";
    }
  );
  let displayData;
  if (isLoading) {
    displayData = "loading...";
  } else if (!data) {
    displayData = "no data";
  } else if (isError) {
    displayData = error.message;
  } else if (isFetching) {
    displayData = data + " (fetching...)";
  } else {
    displayData = data;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
      >
        <Text style={{ textAlign: "center" }}>{displayData}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
});
