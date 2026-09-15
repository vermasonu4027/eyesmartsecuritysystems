export function generateStaticParams() {
  return [{ category: "cctv-surveillance", slug: "hd-analog-dome" }];
}

export default function ProductDetailPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-8">Product Detail</h1>
    </div>
  );
}
