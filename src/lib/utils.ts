export function NextLaunch(index: number){
    if (index < 10) {
    index = index++
  
    return index;
  }

  return index;
}
// launches.ts
export interface Launch {
  id: string;
  url: string;
  name: string;
}
export async function FetchLaunch(url: string, index: number): Promise<Launch[]>{
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
