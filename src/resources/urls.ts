// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class URLs extends APIResource {
  /**
   * Create a new short url
   */
  create(body: URLCreateParams, options?: Core.RequestOptions): Core.APIPromise<URLCreateResponse> {
    return this._client.post('/urls/create', { body, ...options });
  }

  /**
   * Delete a short url by original url
   */
  deleteByOriginalURL(
    params: URLDeleteByOriginalURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { originalUrl } = params;
    return this._client.delete('/urls/delete-by-original-url', { query: { originalUrl }, ...options });
  }

  /**
   * Delete a short url by short id
   */
  deleteByShortId(params: URLDeleteByShortIDParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { shortId } = params;
    return this._client.delete('/urls/delete-by-short-id', { query: { shortId }, ...options });
  }

  /**
   * Get the short url from the original url
   */
  fromOriginalURL(
    query: URLFromOriginalURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLFromOriginalURLResponse> {
    return this._client.get('/urls/from-original-url', { query, ...options });
  }

  /**
   * Get the short url from the short id
   */
  fromShortId(
    query: URLFromShortIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLFromShortIDResponse> {
    return this._client.get('/urls/from-short-id', { query, ...options });
  }

  /**
   * Get approximate count of short urls in the DB. Updated every 6 hours.
   */
  quickCount(options?: Core.RequestOptions): Core.APIPromise<URLQuickCountResponse> {
    return this._client.get('/urls/quick-count', options);
  }

  /**
   * Paginated search of short urls
   */
  search(query?: URLSearchParams, options?: Core.RequestOptions): Core.APIPromise<URLSearchResponse>;
  search(options?: Core.RequestOptions): Core.APIPromise<URLSearchResponse>;
  search(
    query: URLSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLSearchResponse> {
    if (isRequestOptions(query)) {
      return this.search({}, query);
    }
    return this._client.get('/urls/search', { query, ...options });
  }

  /**
   * Scan through the entire table to get real-time count of items
   */
  slowCount(options?: Core.RequestOptions): Core.APIPromise<URLSlowCountResponse> {
    return this._client.get('/urls/slow-count', options);
  }
}

export interface ShortURL {
  createdAt: string;

  originalUrl: string;

  shortId: string;

  shortUrl: string;

  expiredAt?: string;
}

export interface ShortURLCountResult {
  count: number;
}

export interface ShortURLSearchResult {
  cursor: string | null;

  urls: Array<ShortURLSearchResult.URL>;
}

export namespace ShortURLSearchResult {
  export interface URL {
    createdAt: string;

    originalUrl: string;

    shortId: string;

    shortUrl: string;

    expiredAt?: string;
  }
}

export interface URLCreateResponse {
  result: ShortURL;
}

export type URLDeleteByOriginalURLResponse = unknown;

export type URLDeleteByShortIDResponse = unknown;

export interface URLFromOriginalURLResponse {
  result: ShortURL;
}

export interface URLFromShortIDResponse {
  result: ShortURL;
}

export interface URLQuickCountResponse {
  result: ShortURLCountResult;
}

export interface URLSearchResponse {
  result: ShortURLSearchResult;
}

export interface URLSlowCountResponse {
  result: ShortURLCountResult;
}

export interface URLCreateParams {
  originalUrl: string;

  expiredAt?: string;
}

export interface URLDeleteByOriginalURLParams {
  originalUrl: string;
}

export interface URLDeleteByShortIDParams {
  shortId: string;
}

export interface URLFromOriginalURLParams {
  originalUrl: string;
}

export interface URLFromShortIDParams {
  shortId: string;
}

export interface URLSearchParams {
  cursor?: string;

  expiredAtLTE?: string;

  limit?: number;

  originalUrlBeginsWith?: string;
}

export declare namespace URLs {
  export {
    type ShortURL as ShortURL,
    type ShortURLCountResult as ShortURLCountResult,
    type ShortURLSearchResult as ShortURLSearchResult,
    type URLCreateResponse as URLCreateResponse,
    type URLDeleteByOriginalURLResponse as URLDeleteByOriginalURLResponse,
    type URLDeleteByShortIDResponse as URLDeleteByShortIDResponse,
    type URLFromOriginalURLResponse as URLFromOriginalURLResponse,
    type URLFromShortIDResponse as URLFromShortIDResponse,
    type URLQuickCountResponse as URLQuickCountResponse,
    type URLSearchResponse as URLSearchResponse,
    type URLSlowCountResponse as URLSlowCountResponse,
    type URLCreateParams as URLCreateParams,
    type URLDeleteByOriginalURLParams as URLDeleteByOriginalURLParams,
    type URLDeleteByShortIDParams as URLDeleteByShortIDParams,
    type URLFromOriginalURLParams as URLFromOriginalURLParams,
    type URLFromShortIDParams as URLFromShortIDParams,
    type URLSearchParams as URLSearchParams,
  };
}
