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
    {path: '/conversations', element: Conversation},
]