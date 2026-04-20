'use server';
import { z } from 'zod';

export const suggestImageLabel = async (input: { possibleLabels?: string[] }) => {
  console.log("AI Labeling requested for AI Field Reports image");
  return { label: input.possibleLabels?.[0] || "Property Feature" };
};
