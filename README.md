# Repro React Query queryClient.clear issue

If queryClient.clear() is called within the useQuery query function the results of the query are never returned and the state stays as isLoading indefinately.


