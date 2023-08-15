# useQuery

## catchTime

## staleTime

## enabled vs refetch

- **enabled =>** when you define `enabled: (user.length > 0)`, this will call api only when `enabled = true`
- **refetch =>** when you call query manually using `refetch`, this will call api either you defined `enabled:true` or `enabled:false`, this will not consider `enabled`



