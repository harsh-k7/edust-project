/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      'ar'?: boolean;
      'ar-modes'?: string;
      'shadow-intensity'?: string;
      'camera-controls'?: boolean;
      'auto-rotate'?: boolean;
      'autoplay'?: boolean;
      // Add more attributes as needed based on model-viewer documentation
    };
  }
}
