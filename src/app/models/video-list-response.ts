import { PageInfo } from './page-info';
import { Video } from './video';

export interface VideoListResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Video[];
}
