import ColorPalette from './color-palette';
import TypographyGuide from './typography-guide';
import ButtonGuide from './button-guide';
import CardGuide from './card-guide';
import BadgeGuide from './badge-guide';
import InputGuide from './input-guide';

const StyleGuide = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Style Guide</h1>
      <div className="space-y-8">
        <ColorPalette />
        <TypographyGuide />
        <ButtonGuide />
        <CardGuide />
        <BadgeGuide />
        <InputGuide />
      </div>
    </div>
  );
};

export default StyleGuide;
