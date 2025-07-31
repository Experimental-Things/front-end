import { MessageCircleMore } from 'lucide-react';
import { AppRoutes } from '@/app-constant/app-routes'

export const SIDEBAR_DATA = [
    {
        name: 'Chat',
        path: AppRoutes?.PRIVATE.app.chat,
        icon: <MessageCircleMore />
    }
]