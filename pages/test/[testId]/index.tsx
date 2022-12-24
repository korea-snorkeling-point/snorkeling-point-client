import { useRouter } from "next/router";

export default function TestPage() {
  const router = useRouter();
  return <div> 동적 배포 자동화 테스트 번호{router.query.testId} 입니다.</div>;
}
