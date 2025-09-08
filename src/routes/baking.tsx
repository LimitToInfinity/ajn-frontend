import { createFileRoute } from '@tanstack/react-router'
import { Baking } from '../components/baking/baking'

export const Route = createFileRoute('/baking')({ component: Baking })
