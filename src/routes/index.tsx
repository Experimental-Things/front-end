import { lazy } from 'react'
import { AppRoutes } from '@/app-constant/app-routes'
import { type TNestedObj } from '@/types/global.types'
import { type TRouteObject } from '@/types/route.type'
import { mergeRoutes } from '@/routes/route-util'

// pages
// import { Layout } from '@/layout/index'
const SignInSignUp = lazy(() => import('@/pages/signin-signup'))
const Chat = lazy(() => import('@/pages/apps/chat'))
const Layout = lazy(() => import('@/layout/index'))


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
        path: AppRoutes.PRIVATE.app.chat,
        element: <Chat />,
        isLazy: true
    }
] 
const protectedRoutes: TRouteObject[] = [
    {
        path: AppRoutes.PRIVATE.app.index,
        element: <Layout />,
        isLazy: true,
        children: childRoutes
    }
]

const errorRoutes: TRouteObject[] = [
    {
        path: ''
    }
]

export const GET_APP_ROUTES = (__props: TNestedObj = {}): any => {
    const getMergeRoutes = mergeRoutes([...publicRoutes, ...protectedRoutes, ...errorRoutes])
    console.log(getMergeRoutes)
    return  getMergeRoutes
}
