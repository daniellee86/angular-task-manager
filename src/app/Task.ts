// Typescript interface is like a model of how something should look; what types the properties should be
export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
