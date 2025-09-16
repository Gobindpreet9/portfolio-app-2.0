const ColorPalette = () => {
  const colors = [
    { name: 'Background', hex: 'hsl(39 38% 97%)', variable: '--background' },
    { name: 'Foreground', hex: 'hsl(25 30% 15%)', variable: '--foreground' },
    { name: 'Card', hex: 'hsl(39 38% 97%)', variable: '--card' },
    { name: 'Card Foreground', hex: 'hsl(25 30% 15%)', variable: '--card-foreground' },
    { name: 'Popover', hex: 'hsl(39 38% 97%)', variable: '--popover' },
    { name: 'Popover Foreground', hex: 'hsl(25 30% 15%)', variable: '--popover-foreground' },
    { name: 'Primary', hex: 'hsl(25 70% 33%)', variable: '--primary' },
    { name: 'Primary Foreground', hex: 'hsl(39 38% 97%)', variable: '--primary-foreground' },
    { name: 'Secondary', hex: 'hsl(28 42% 85%)', variable: '--secondary' },
    { name: 'Secondary Foreground', hex: 'hsl(25 30% 15%)', variable: '--secondary-foreground' },
    { name: 'Muted', hex: 'hsl(28 42% 85%)', variable: '--muted' },
    { name: 'Muted Foreground', hex: 'hsl(25 35% 35%)', variable: '--muted-foreground' },
    { name: 'Accent', hex: 'hsl(19 64% 52%)', variable: '--accent' },
    { name: 'Accent Foreground', hex: 'hsl(39 38% 97%)', variable: '--accent-foreground' },
    { name: 'Destructive', hex: 'hsl(0 85% 60%)', variable: '--destructive' },
    { name: 'Destructive Foreground', hex: 'hsl(39 38% 97%)', variable: '--destructive-foreground' },
    { name: 'Border', hex: 'hsl(25 35% 75%)', variable: '--border' },
    { name: 'Input', hex: 'hsl(25 35% 75%)', variable: '--input' },
    { name: 'Ring', hex: 'hsl(25 70% 33%)', variable: '--ring' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colors.map((color) => (
          <div key={color.name} className="p-4 rounded-lg shadow-md" style={{ backgroundColor: color.hex }}>
            <div className="font-bold text-lg">{color.name}</div>
            <div className="text-sm">{color.hex}</div>
            <div className="text-sm font-mono">{color.variable}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
