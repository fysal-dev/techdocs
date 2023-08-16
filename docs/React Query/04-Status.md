# State

There are 3 state

1. Fresh
2. Stale
3. Inactive
   
## Fresh
- **Fresh status-** when query called api, that query is fresh

## Stale
- **Stale status-** once the fetch process is completed, <span class='highlight'>the state will move from Fresh status to Stale status</span>

## Inactive
    When the query is unmounted or no longer in use, this will be inactive, Remember the default cachetime is 5 min. so the query result is still exists in cache, when the user come back to the same page, the new query will be called with the same key, but react query it will show the cache data to the user until the new query called finish.

    if the new query called once fetched, but the result are same, it will update the cache memory, if the results are different, it will update both state and cache 

## Stale Time vs Cache Time

### StaleTime
The duration until a query transitions from fresh to stale. As long as the query is fresh, data will always be read from the cache only - no network request will happen! If the query is stale (which per default is: instantly), you will still get data from the cache, but a background refetch can happen under certain conditions.

        staletime: 0 //default is zero

### CacheTime
The duration until inactive queries will be removed from the cache. This <span class='highlight'>defaults to 5 minutes</span>. Queries transition to the inactive state as soon as there are no observers registered, so when all components which use that query have unmounted.



