export default class Resolution {
  public static Small: Resolution = new Resolution(960, 576);
  public static Big: Resolution = new Resolution(1920, 1080);

  public static All: Resolution[] = [this.Small, this.Big];

  constructor(readonly width: number, readonly height: number) { }

  public toString(): string {
    return `${this.width}x${this.height}`;
  }
  public switch(): void {
    cy.viewport(this.width, this.height);
  }
}
