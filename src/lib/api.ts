export async function fetchLaunches<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok){
    throw new error(`HTTP error status: ${response.status}`);

  }
  return response.json();
}
