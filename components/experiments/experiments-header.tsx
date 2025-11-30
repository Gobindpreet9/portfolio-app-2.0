"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

import PageHeader from "@/components/ui/page-header";
import SearchInput from "@/components/ui/search-input";

export function ExperimentsHeader() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Experiments"
        description="A collection of my technical experiments, ranging from web applications to AI/ML prototypes. Each represents a unique challenge and learning experience."
      />
      <SearchInput placeholder="Search experiments..." />
    </div>
  );
}