import { createFileRoute } from '@tanstack/react-router'
import { Reviews } from '../components/reviews/reviews'

export const Route = createFileRoute('/reviews')({ component: Reviews })
