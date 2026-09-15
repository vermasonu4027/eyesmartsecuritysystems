export function generateStaticParams() {
  return [{ slug: "ip-vs-analog-cctv", locale: "en" }];
}

export default function BlogPostPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-8">Blog Post</h1>
    </div>
  );
}
