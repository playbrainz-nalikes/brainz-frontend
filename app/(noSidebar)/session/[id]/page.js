import { Session } from "@/app/container/Session/Session";

export default async function Page({ params }) {
  return <Session params={params} />;
}
