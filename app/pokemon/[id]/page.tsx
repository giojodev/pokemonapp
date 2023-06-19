"use client"
import { useParams } from 'next/navigation'

export default function Pokemon() {
  const usePaarams= useParams();


  return (
    <>
      <h1>Pokemon {usePaarams.id}</h1>
    </>
  );
}
