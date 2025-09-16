import PageHeader from "@/components/ui/page-header";
import SearchInput from "@/components/ui/search-input";

export function BlogHeader() {
  return (
    <div className="space-y-12 mb-16">
      <PageHeader
        title="Insights & Articles"
        description="Explore my latest thoughts on technology, development, design and everything in between."
      />
      <SearchInput placeholder="Search articles..." />
    </div>
  );
}