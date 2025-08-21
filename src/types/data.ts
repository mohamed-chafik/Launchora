export interface launch {
  rocket: string;
  status: string;
  launch_data: string;
  image: string;
  thumb: string;
  agency: string;
  coutry: string;
  total_launches: number;
  reusable: boolean;
  stages: number;
  cost: number;
  localisation: string;

}
export interface Rocket_config {
  length: number;
  thrust: number;
}
export interface mission {
  name: string;
  description: string;
  destination: string;
  
}
