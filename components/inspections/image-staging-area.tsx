'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, UploadCloud, X, Loader2 } from 'lucide-react';
import { suggestImageLabel } from '@/ai/flows/suggest-image-label';
import { cn } from '@/lib/utils';

export type ImageObject = {
  file: File;
  preview: string;
  label: string;
  isLabeling: boolean;
  suggestedLabel?: string;
};

interface ImageStagingAreaProps {
  title: string;
  description: string;
  requiredLabels?: string[];
  images: ImageObject[];
  setImages: React.Dispatch<React.SetStateAction<ImageObject[]>>;
}

export function ImageStagingArea({
  requiredLabels = [],
  images,
  setImages,
}: ImageStagingAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const newImageObjects: ImageObject[] = newFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file),
        label: '',
        isLabeling: false
      }));
      setImages(prev => [...prev, ...newImageObjects]);
    }
  };

  const removeImage = (preview: string) => {
    setImages(prev => prev.filter(img => img.preview !== preview));
  };

  const updateLabel = (preview: string, label: string) => {
    setImages(prev => prev.map(img => 
      img.preview === preview ? { ...img, label } : img
    ));
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Property Images</h3>
              <p className="text-sm text-muted-foreground">Capture or upload property photos.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => cameraInputRef.current?.click()}>
                <Camera className="w-4 h-4 mr-2" />
                Capture
              </Button>
              <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                <UploadCloud className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>
          <input type="file" accept="image/*" capture="environment" className="hidden" ref={cameraInputRef} onChange={handleImageChange} />
          <input type="file" accept="image/*" multiple className="hidden" ref={fileInputRef} onChange={handleImageChange} />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {images.map((image) => (
              <div key={image.preview} className="relative group rounded-lg overflow-hidden border bg-muted">
                <Image src={image.preview} alt="preview" width={200} height={200} className="object-cover aspect-square" />
                <button onClick={() => removeImage(image.preview)} className="absolute top-1 right-1 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <X className="w-4 h-4" />
                </button>
                <div className="p-2">
                  <Input 
                    value={image.label} 
                    onChange={(e) => updateLabel(image.preview, e.target.value)}
                    placeholder="Label..."
                    className="h-8 text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
