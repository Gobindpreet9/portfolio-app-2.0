import PageHeader from "@/components/ui/page-header";
import SearchInput from "@/components/ui/search-input";

export function LogsHeader() {
  return (
    <div className="space-y-12 mb-16">
      <PageHeader
        title="Logs"
        description="Explore my latest thoughts on technology, development, design and everything in between."
      />
      <SearchInput placeholder="Search logs..." />
    </div>
  );
}