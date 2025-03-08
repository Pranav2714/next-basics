// "use client";
// import { use } from "react";
import Link from "next/link";
// async await does not work in client side
// we need to use hooks in clent side
// async await for server side
//use hooks for client side

//****Server Side */
export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>This is news article {articleId}</h1>
      <h2>Reading in language {lang}</h2>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Espanyol</Link>
      </div>
    </div>
  );
}

//****Client Side */
// export default function NewsArticle({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articleId: string }>;
//   searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
// }) {
//   const { articleId } = use(params);
//   const { lang = "en" } = use(searchParams);

//   return (
//     <div>
//       <h1>News Article #{articleId}</h1>
//       <p>Reading in: {lang.toUpperCase()}</p>

//       {/* Language switcher */}
//       <div className="language-options">
//         <Link href={`/articles/${articleId}?lang=en`}>English</Link> |
//         <Link href={`/articles/${articleId}?lang=es`}>Español</Link> |
//         <Link href={`/articles/${articleId}?lang=fr`}>Français</Link>
//       </div>
//     </div>
//   );
// }
