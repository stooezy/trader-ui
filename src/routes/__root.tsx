import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Header from '#/components/Header'
import Footer from '#/components/Footer'

export const Route = createRootRoute({
  component: RootDocument,
})

function RootDocument() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6"><Outlet /></main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  )
}
