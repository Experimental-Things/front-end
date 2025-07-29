import { Suspense } from 'react'
import { type TRouteObject} from '@/types/route.type'

export function isAuthenticatedRoutes(props: TRouteObject) {
    return null
}

export function mergeRoutes(routeList: TRouteObject[]) {
    function recursive(routes: any[]){
        for(let i =0; i < routes.length; i++){
            routes[i] = {
                ...routes[i], 
                element: !!routes[i].isLazy ? (<Suspense > {routes[i].element} </Suspense>): routes[i].element,
                children: routes[i]?.children && Array.isArray(routes[i]?.children) ? recursive(routes[i]?.children) : undefined
            }
        }
        return routes
    }
    return recursive(routeList)
}