import { type RouteObject } from 'react-router-dom'

export type TRouteObject = RouteObject & {
    isLazy?: boolean;
}