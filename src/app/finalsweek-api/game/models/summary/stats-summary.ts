export class StatsSummary {
  public popularity: number;
  public trouble: number;
  public torment: number;
  public grades: number;

  constructor(data: any) {
    this.popularity = data.popularity;
    this.trouble = data.trouble;
    this.torment = data.torment;
    this.grades = data.grades;
  }
}
