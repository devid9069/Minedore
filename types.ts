
import React from 'react';

export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  // Fix: Added React import to support React.ReactNode namespace usage
  icon: React.ReactNode;
  hasCertificate: boolean;
  price: string;
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  useCase: string;
  techSimple: string;
  // Fix: Added React import to support React.ReactNode namespace usage
  icon: React.ReactNode;
}

export interface DigitalService {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to support React.ReactNode namespace usage
  icon: React.ReactNode;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
}