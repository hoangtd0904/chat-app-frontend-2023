import Auth from "@/pages/Auth"
import Conversation from "@/pages/Conversation"

type RouteConfig = {
    path: string,
    element: () => JSX.Element, 
    layout?: any 
}

// public routes
export const publicRoutes: RouteConfig[] = [
    {path: '/', element: Auth, layout: null},
    {path: '/signin', element: Auth, layout: null},
    {path: '/signup', element: Auth, layout: null},
]

// public routes
export const privateRoutes: RouteConfig[] = [
    {path: '/conversations', element: Conversation},
]