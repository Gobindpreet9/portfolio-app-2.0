"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

import PageHeader from "@/components/ui/page-header";
import SearchInput from "@/components/ui/search-input";

export function ProjectsHeader() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects & Work"
        description="A collection of my technical projects, ranging from web applications to AI/ML experiments. Each project represents a unique challenge and learning experience."
      />
      <SearchInput placeholder="Search projects..." />
    </div>
  );
}