import Image from "next/image"

export const MarkdownComponents = {
  img: ({ node, ...props }: any) => {
    const src = props.src as string;
    if (!src) {
      // Fallback for invalid image tags
      return <img {...props} />;
    }

    const alt = props.alt as string;
    let [path, hash] = src.split('#');

    // Correct path for local images in the public directory
    if (path.startsWith('/public/')) {
      path = path.substring('/public'.length);
    }

    let width: number | undefined;
    let height: number | undefined;
    let align: 'left' | 'center' | 'right' = 'center'; // Default alignment

    if (hash) {
      const params = new URLSearchParams(hash);
      const w = params.get('w');
      const h = params.get('h');
      const a = params.get('align');

      if (w) width = parseInt(w, 10);
      if (h) height = parseInt(h, 10);
      if (a === 'left' || a === 'center' || a === 'right') {
        align = a;
      }
    }

    if (width) {
      if (align === 'left' || align === 'right') {
        // On mobile, center the image. On desktop, float it.
        const responsiveClasses = align === 'left' 
          ? 'md:float-left md:mr-6' 
          : 'md:float-right md:ml-6';

        return (
          <span className={`flex justify-center md:inline-block ${responsiveClasses} my-6 md:my-4`}>
            <Image 
              src={path} 
              alt={alt} 
              width={width} 
              height={height || (width * 9) / 16} 
              className="rounded-lg shadow-lg" 
            />
          </span>
        );
      }

      // Default to center alignment with flexbox
      return (
        <span className="flex justify-center my-6">
          <Image 
            src={path} 
            alt={alt} 
            width={width} 
            height={height || (width * 9) / 16} 
            className="rounded-lg shadow-lg" 
          />
        </span>
      );
    }

    // Default: render as a full-width, responsive image
    return (
      <span className="block relative aspect-video w-full overflow-hidden rounded-xl my-6 shadow-lg">
        <Image 
          src={path} 
          alt={alt} 
          fill 
          className="object-cover" 
        />
      </span>
    );
  },
};
