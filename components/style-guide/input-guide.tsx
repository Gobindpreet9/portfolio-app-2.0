import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const InputGuide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Form Inputs</h2>
      <div className="space-y-6">
        {/* Basic Input */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Text Inputs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="default-input">Default Input</Label>
              <Input id="default-input" placeholder="Enter text here..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-input">Email Input</Label>
              <Input id="email-input" type="email" placeholder="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-input">Password Input</Label>
              <Input id="password-input" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled Input</Label>
              <Input id="disabled-input" placeholder="Disabled input" disabled />
            </div>
          </div>
        </div>

        {/* Input States */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Input States</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="focus-input">Focus State</Label>
              <Input id="focus-input" placeholder="Click to focus" className="ring-2 ring-ring ring-offset-2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="error-input" className="text-destructive">Error State</Label>
              <Input id="error-input" placeholder="Invalid input" className="border-destructive focus-visible:ring-destructive" />
              <p className="text-sm text-destructive">This field is required</p>
            </div>
          </div>
        </div>

        {/* Textarea */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Textarea</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="textarea-default">Default Textarea</Label>
              <Textarea id="textarea-default" placeholder="Enter your message here..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
              <Textarea id="textarea-disabled" placeholder="Disabled textarea" disabled />
            </div>
          </div>
        </div>

        {/* Input Sizes */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Input Sizes</h3>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="small-input">Small Input</Label>
              <Input id="small-input" placeholder="Small input" className="h-8 text-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="default-size-input">Default Input</Label>
              <Input id="default-size-input" placeholder="Default size input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="large-input">Large Input</Label>
              <Input id="large-input" placeholder="Large input" className="h-12 text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputGuide;
