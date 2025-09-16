import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        className="pl-10 bg-background border-2"
      />
    </div>
  );
};

export default SearchInput;
