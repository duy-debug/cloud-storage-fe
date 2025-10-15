import { createRootRoute } from '@tanstack/react-router'
import AppShell from '../layout/AppShell'

export const rootRoute = createRootRoute({
  component: AppShell,
})