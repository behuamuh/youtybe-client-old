import { Snippet } from './snippet';
import { Statistics } from './statistics';

export interface Video<ID> {
  kind: string;
  etag: string;
  id: ID;
  snippet: Snippet;
  statistics: Statistics;
}
