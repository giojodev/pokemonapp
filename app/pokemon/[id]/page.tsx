"use client"
import { useRouter, usePathname, useSearchParams,useParams } from 'next/navigation'

export default function Pokemon() {
  const router = useRouter();
  const pathname = usePathname();
  const usedSearchParams=useSearchParams();
  const usePaarams= useParams();


  return (
    <>
      <h1>Pokemon {usePaarams.id}</h1>
    </>
  );
}
