export class PromptOption {
  constructor(public display: string, public item: any, public id: string) {
  }
}

export class PromptQuestion {
  constructor(public key: string, public options: any[], public disabled: boolean, public selected_option: PromptOption = null) {
  }
}

export class PromptSelection {
  constructor(public question: PromptQuestion, public option: any) {
  }
}
