import CategoryPage from "./CategoryPage";
import { categories } from "@/data/portfolio";
export const dynamicParams = false;
export function generateStaticParams() { return categories.map(categoryname => ({ categoryname })); }
export default async function Page({ params }: { params: Promise<{ categoryname: string }> }) {
  return <CategoryPage params={await params} />;
}
