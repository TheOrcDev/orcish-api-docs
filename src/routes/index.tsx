import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <HomeLayout
      {...baseOptions()}
      className="text-center flex flex-col items-center py-32 justify-center"
    >
      <img
        src="/src/assets/images/orcish-api-logo.png"
        alt="Orcish API"
        className="size-40"
      />
      <h1 className="font-medium text-xl mb-4">Orcish API Documentation.</h1>
      <Link
        to="/docs/$"
        params={{
          _splat: "",
        }}
        className="px-3 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm mx-auto"
      >
        Open Docs
      </Link>
    </HomeLayout>
  );
}
