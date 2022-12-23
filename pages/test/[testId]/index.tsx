import { useRouter } from "next/router";

export default function TestPage() {
  const router = useRouter();
  return <div>{router.query.testId}</div>;
}
