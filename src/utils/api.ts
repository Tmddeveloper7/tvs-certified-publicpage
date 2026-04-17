const API_BASE_URL = "https://tvscertified.in:8036";

type FetchOptions = {
  authToken?: string;
};

async function jsonFetch<T>(path: string, { authToken }: FetchOptions): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      ...(authToken ? { Authorization: authToken } : {}),
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Request to ${path} failed: ${res.status} ${res.statusText} ${text}`);
  }

  return res.json() as Promise<T>;
}

export async function getAuctionDetails(authToken?: string) {
  return jsonFetch<unknown>("/GetAuctionDetails", { authToken });
}

export async function getNextAuctionDetails(authToken?: string) {
  return jsonFetch<unknown>("/getNextAuctionDetails", { authToken });
}
