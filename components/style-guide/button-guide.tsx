import { Button } from '@/components/ui/button';

const ButtonGuide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Buttons</h2>
      <div className="flex flex-wrap gap-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  );
};

export default ButtonGuide;
