import fr, { type Dictionary } from './fr';
import en from './en';
import type { Lang } from '../types';

export type { Dictionary };

export const dictionaries: Record<Lang, Dictionary> = { fr, en };
