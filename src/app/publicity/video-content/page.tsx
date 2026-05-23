"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VideoContentRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/publicity?tab=videos");
  }, [router]);
  return null;
}
