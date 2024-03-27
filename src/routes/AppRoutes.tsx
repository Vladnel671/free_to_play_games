import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import ScrollToTopOnPageChange from '@/components/ScrollToTopOnPageChange.tsx'

const Home = lazy(() => import('../pages/Home.tsx'))
const GamePage = lazy(() => import('../pages/GamePage.tsx'))
const GamesList = lazy(() => import('../pages/GamesList.tsx'))
const NotFound = lazy(() => import('../pages/NotFound.tsx'))

export const AppRoutes: React.FC = () => (
  <Suspense fallback={<div className="min-h-screen">Loader</div>}>
    <ScrollToTopOnPageChange />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GamesList />} />
      <Route path="/games/game/:id" element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
)
