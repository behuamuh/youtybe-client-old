import { PageInfo } from './page-info';
import { Video } from './video';

export interface VideoListResponse<ID> {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Video<ID>[];
}
