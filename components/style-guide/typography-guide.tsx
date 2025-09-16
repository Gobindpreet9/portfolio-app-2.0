const TypographyGuide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Typography</h2>
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold">Heading 1</h1>
          <p className="text-lg">Font size: 2.25rem (36px) / Font weight: 700</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Heading 2</h2>
          <p className="text-lg">Font size: 1.875rem (30px) / Font weight: 700</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Heading 3</h3>
          <p className="text-lg">Font size: 1.5rem (24px) / Font weight: 700</p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Heading 4</h4>
          <p className="text-lg">Font size: 1.25rem (20px) / Font weight: 700</p>
        </div>
        <div>
          <p className="text-lg">Paragraph</p>
          <p>Font size: 1rem (16px) / Font weight: 400</p>
        </div>
        <div>
          <p className="text-sm">Small Text</p>
          <p>Font size: 0.875rem (14px) / Font weight: 400</p>
        </div>
      </div>
    </div>
  );
};

export default TypographyGuide;
