// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SstURLShortener from '@dizzzmas/sst-url-shortener-sdk';
import { Response } from 'node-fetch';

const client = new SstURLShortener({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource urls', () => {
  test('create: only required params', async () => {
    const responsePromise = client.urls.create({ originalUrl: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.urls.create({
      originalUrl: 'https://example.com',
      expiredAt: '2019-12-27T18:11:19.117Z',
    });
  });

  test('deleteByOriginalURL: only required params', async () => {
    const responsePromise = client.urls.deleteByOriginalURL({ originalUrl: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteByOriginalURL: required and optional params', async () => {
    const response = await client.urls.deleteByOriginalURL({ originalUrl: 'https://example.com' });
  });

  test('deleteByShortId: only required params', async () => {
    const responsePromise = client.urls.deleteByShortId({ shortId: 'shortId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteByShortId: required and optional params', async () => {
    const response = await client.urls.deleteByShortId({ shortId: 'shortId' });
  });

  test('fromOriginalURL: only required params', async () => {
    const responsePromise = client.urls.fromOriginalURL({ originalUrl: 'https://example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fromOriginalURL: required and optional params', async () => {
    const response = await client.urls.fromOriginalURL({ originalUrl: 'https://example.com' });
  });

  test('fromShortId: only required params', async () => {
    const responsePromise = client.urls.fromShortId({ shortId: 'xxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fromShortId: required and optional params', async () => {
    const response = await client.urls.fromShortId({ shortId: 'xxx' });
  });

  test('quickCount', async () => {
    const responsePromise = client.urls.quickCount();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('quickCount: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.urls.quickCount({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SstURLShortener.NotFoundError,
    );
  });

  test('search', async () => {
    const responsePromise = client.urls.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.urls.search({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SstURLShortener.NotFoundError,
    );
  });

  test('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.urls.search(
        {
          cursor: 'cursor',
          expiredAtLTE: '2019-12-27T18:11:19.117Z',
          limit: 1,
          originalUrlBeginsWith: 'originalUrlBeginsWith',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SstURLShortener.NotFoundError);
  });

  test('slowCount', async () => {
    const responsePromise = client.urls.slowCount();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('slowCount: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.urls.slowCount({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      SstURLShortener.NotFoundError,
    );
  });
});
