import { createFileRoute } from '@tanstack/react-router'
import { Crafts } from '../components/crafts/crafts'

export const Route = createFileRoute('/crafts')({ component: Crafts })
