import {  ScriptProps } from "next/script";

export default function pokemonLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return ( <div className="container">
    {children}
</div>)
   
}