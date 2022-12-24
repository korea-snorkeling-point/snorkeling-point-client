import { useRouter } from "next/router";

export default function TestPage() {
  const router = useRouter();
  return <div>테스트 번호{router.query.testId} 입니다.</div>;
}
