import { Badge } from '@/components/ui/badge';

const BadgeGuide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Badges</h2>
      <div className="space-y-6">
        {/* Badge Variants */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Variants</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Usage Examples */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Usage Examples</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span>Status:</span>
              <Badge>Active</Badge>
              <Badge variant="secondary">Pending</Badge>
              <Badge variant="destructive">Error</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span>Technologies:</span>
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Next.js</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span>Priority:</span>
              <Badge variant="destructive">High</Badge>
              <Badge>Medium</Badge>
              <Badge variant="secondary">Low</Badge>
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Custom Sizes</h3>
          <div className="flex items-center gap-3">
            <Badge className="text-xs px-2 py-0.5">Small</Badge>
            <Badge>Default</Badge>
            <Badge className="text-sm px-3 py-1">Large</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeGuide;
