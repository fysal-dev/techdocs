# useQuery

## staleTime

The duration until a query transitions from fresh to stale. As long as the query is fresh, data will always be read from the cache only - no network request will happen! If the query is stale (which per default is: instantly), you will still get data from the cache, but a background refetch can happen under certain conditions.

read this article to understand more about StaleTime, CacheTime and refetchonwindowfocus (https://tkdodo.eu/blog/practical-react-query#the-defaults-explained)
## catchTime

The duration until inactive queries will be removed from the cache. This defaults to 5 minutes. Queries transition to the inactive state as soon as there are no observers registered, so when all components which use that query have unmounted.

## refetchOnWindowFocus

If you see a refetch that you are not expecting, it is likely because you just focused the window and React Query is doing a `refetchOnWindowFocus`, which is a great feature for production: If the user goes to a different browser tab, and then comes back to your app, a background refetch will be triggered automatically, and data on the screen will be updated if something has changed on the server in the meantime. All of this happens without a loading spinner being shown, and your component will not re-render if the data is the same as you currently have in the cache.

During development, this will probably be triggered more frequently, especially because focusing between the Browser DevTools and your app will also cause a fetch, so be aware of that.

## enabled vs refetch

- **enabled =>** when you define `enabled: (user.length > 0)`, this will call api only when `enabled = true`
- **refetch =>** when you call query manually using `refetch`, this will call api either you defined `enabled:true` or `enabled:false`, this will not consider `enabled`



