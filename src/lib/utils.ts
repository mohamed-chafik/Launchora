export function NextLaunch(index: number){
    if (index < 10) {
    index = index++
  
    return index;
  }

  return index;
}
// launches.ts (fixed)
export interface Launch {
  id: string;
  url: string;
  name: string; // Changed from number to string
  image?: {
    image_url: string;
  };
  // Add other properties that you expect from the API
}

export interface LaunchesResponse {
  results: Launch[];
  // Add other properties from the API response if needed
}

export async function FetchLaunch(url: string): Promise<LaunchesResponse> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
