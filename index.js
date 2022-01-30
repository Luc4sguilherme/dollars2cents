class Converter {
  constructor() {
    this.input = document.querySelector("#number-input");
    this.quarter = document.querySelector("#quarter");
    this.dime = document.querySelector("#dime");
    this.nickel = document.querySelector("#nickel");
    this.penny = document.querySelector("#penny");

    this.pennyValue = 1;
    this.nickelValue = 5;
    this.dimeValue = 10;
    this.quarterValue = 25;
  }

  init() {
    this.configureInputEvent();
  }

  insertValuesInToHTML(value) {
    const { quarter, dime, nickel, penny } = this.dollarToCents(value);

    this.quarter.innerText = quarter;
    this.dime.innerText = dime;
    this.nickel.innerText = nickel;
    this.penny.innerText = penny;
  }

  dollarToCents(value) {
    let balanceInCents = Math.round(value * 100);

    const quarter = Math.floor(balanceInCents / this.quarterValue);
    balanceInCents = balanceInCents % this.quarterValue;

    const dime = Math.floor(balanceInCents / this.dimeValue);
    balanceInCents = balanceInCents % this.dimeValue;

    const nickel = Math.floor(balanceInCents / this.nickelValue);
    balanceInCents = balanceInCents % this.nickelValue;

    const penny = Math.floor(balanceInCents / this.pennyValue);

    return {
      quarter,
      dime,
      nickel,
      penny,
    };
  }

  configureInputEvent() {
    this.input.addEventListener("input", (event) => {
      this.insertValuesInToHTML(event.target.value);
    });
  }
}

const converter = new Converter();

converter.init();
