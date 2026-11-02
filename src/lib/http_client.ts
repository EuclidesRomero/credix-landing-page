
const DEFAULT_BASE_URL = 'http://localhost:3000';

export interface HttpConfig {
  baseUrl?: string;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

function appendQuery(
  base: string,
  queryParams?: Record<string, string | number | boolean>
): string {
  if (!queryParams || Object.keys(queryParams).length === 0) return base;
  const search = new URLSearchParams();
  Object.entries(queryParams).forEach(([k, v]) => search.append(k, String(v)));
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}${search.toString()}`;
}

async function request<T>(
  path: string,
  options: {
    method: string;
    body?: unknown;
    queryParams?: Record<string, string | number | boolean>;
    config?: HttpConfig;
  }
): Promise<T> {
  const { method, body, queryParams, config } = options;
  const baseUrl = config?.baseUrl ?? DEFAULT_BASE_URL;
  const fullPath = path.startsWith('http')
    ? path
    : `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  const url = appendQuery(fullPath, queryParams);
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...config?.headers,
  };
  const init: RequestInit = {
    method,
    headers,
    signal: config?.signal,
  };
  if (body !== undefined && body !== null && method !== 'GET') {
    init.body = typeof body === 'string' ? body : JSON.stringify(body);
  }
  const res = await fetch(url, init);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error((err as { message?: string }).message ?? `HTTP ${res.status}`);
  }
  const contentType = res.headers.get('content-type');
  if (!contentType?.includes('application/json')) return null as T;
  return res.json();
}

export async function get<T>(
  path: string,
  queryParams?: Record<string, string | number | boolean>,
  config?: HttpConfig
): Promise<T> {
  return request<T>(path, { method: 'GET', queryParams, config });
}

export async function post<T>(
  path: string,
  body?: unknown,
  config?: HttpConfig
): Promise<T> {
  return request<T>(path, { method: 'POST', body, config });
}

export async function put<T>(
  path: string,
  body?: unknown,
  config?: HttpConfig
): Promise<T> {
  return request<T>(path, { method: 'PUT', body, config });
}

export async function patch<T>(
  path: string,
  body?: unknown,
  config?: HttpConfig
): Promise<T> {
  return request<T>(path, { method: 'PATCH', body, config });
}

export async function del<T>(path: string, config?: HttpConfig): Promise<T> {
  return request<T>(path, { method: 'DELETE', config });
}

export async function postMultipart<T>(
  path: string,
  body: FormData,
  config?: HttpConfig
): Promise<T> {
  const baseUrl = config?.baseUrl ?? DEFAULT_BASE_URL;
  const fullUrl = path.startsWith('http')
    ? path
    : `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  const headers: Record<string, string> = { ...config?.headers };
  const res = await fetch(fullUrl, {
    method: 'POST',
    headers,
    body,
    signal: config?.signal,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error((err as { message?: string }).message ?? `HTTP ${res.status}`);
  }
  const contentType = res.headers.get('content-type');
  if (!contentType?.includes('application/json')) return null as T;
  return res.json();
}
