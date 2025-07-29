import { lazy, Suspense } from 'react'
import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { AppRoutes } from '@/app-constant/app-routes'
import { type TNestedObj } from '@/types/global.types'
import { type TRouteObject } from '@/types/route.type'
import { mergeRoutes } from '@/routes/route-util'

// pages
const SignInSignUp = lazy(() => import('@/pages/signin-signup'))
const Chat = lazy(() => import('@/pages/chat'))

const publicRoutes:TRouteObject[]  = [
    {
        path: AppRoutes.PUBLIC.home,
        element: <SignInSignUp />,
        isLazy: true
    },
    {
        path: AppRoutes.PUBLIC.signinsignup,
        element: <SignInSignUp />,
        isLazy: true
    }
]
const childRoutes: TRouteObject[] = [
    {
        path: AppRoutes.PRIVATE.app.chat
    }
] 
const protectedRoutes: TRouteObject[] = [
    {
        path: AppRoutes.PRIVATE.app.index,
        element: <Chat />,
        isLazy: false,
        children: childRoutes
    }
]

export const GET_APP_ROUTES = (__props: TNestedObj = {}): any => {
    const getMergeRoutes = mergeRoutes([...publicRoutes, ...protectedRoutes])
    return  getMergeRoutes
}