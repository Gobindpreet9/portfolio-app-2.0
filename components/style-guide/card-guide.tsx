import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CardGuide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>
              A simple card with header, title, and description.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area where you can place any content.</p>
          </CardContent>
        </Card>

        {/* Card with Footer */}
        <Card>
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>
              Card demonstrating header, content, and footer sections.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content area with additional footer actions below.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>

        {/* Minimal Card */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Minimal Card</h3>
            <p>A simple card with just content, no header or footer.</p>
          </CardContent>
        </Card>

        {/* Feature Card */}
        <Card>
          <CardHeader>
            <CardTitle>Feature Card</CardTitle>
            <CardDescription>
              Showcasing a feature or service with detailed information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardGuide;
