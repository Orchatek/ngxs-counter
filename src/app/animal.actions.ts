export namespace Animal {
  export class Add {
    static readonly type = "[Zoo] Add Animal";

    constructor(public name: string) {
    }
  }

  export class Delete {
    static readonly type = "[Delete] Delete Animal";

    constructor(public name: string) {
    }
  }
}
