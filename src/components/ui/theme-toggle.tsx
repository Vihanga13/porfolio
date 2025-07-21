import { Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="relative w-10 h-10 rounded-full p-0 cursor-default opacity-50"
      aria-label="Dark theme active"
      disabled
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Moon className="h-5 w-5 text-blue-500" />
      </div>
    </Button>
  );
}