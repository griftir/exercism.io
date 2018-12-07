export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
  }

  kind() {
    let kind = '';
    // Check all sides are greater than 0
    if (this.sideOne <= 0 || this.sideTwo <= 0 || this.sideThree <= 0) {
      throw new Error('all Sides must be greater than 0');
    }
    // Determine is equilateral
    if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
      kind = 'equilateral';
    }
    // Determine if isosceles
    if ((this.sideOne === this.sideTwo
      || this.sideTwo === this.sideThree || this.sideOne === this.sideThree)
    && ((this.sideOne + this.sideTwo + this.sideThree) % 3 !== 0)) {
      kind = 'isosceles';
    }
    // Determine if scalene
    if (this.sideOne !== this.sideTwo && this.sideTwo !== this.sideThree
      && this.sideOne !== this.sideThree) {
      kind = 'scalene';
    }
    // Determine if Degenerate
    if ((this.sideOne + this.sideTwo < this.sideThree)
    || (this.sideTwo + this.sideThree < this.sideOne)
    || (this.sideOne + this.sideThree < this.sideOne)) {
      throw new Error('This triangle is a degenerate');
    }

    return kind;
  }
}
