'use server';
import { z } from 'zod';

export const suggestImageLabel = async (input: any) => {
  console.log("AI Labeling requested for AI Field Reports");
  // Temporary bypass to allow build to succeed
  return { label: input.possibleLabels?.[0] || "Property Feature" };
};
