// Import a module
import { Template } from '../modules/template';

interface props {
  excitement: number;
  doOnce: boolean;
  template: Template;
}
go.property('excitement', 100);

export function init(this: props): void {
  this.template = new Template();

  print('Welcome to defold-typescript; A dev environment for Defold that transpiles TypeScript into lua using typescript-to-lua.');
  print('');

  print('Turnkey Defold TypeScript dev environment features:');
  this.doOnce = true;
}

export function update(this: props, _dt: number): void {
  if (this.doOnce) {
    msg.post('#', 'features');
    this.doOnce = false;
  }
}

export function on_message(this: props, message_id: hash, _message: string, _sender: url): void {
  if (message_id === hash('features')) {
    const features = this.template.features();
    for (const feature of features) {
      print(feature);
    }

    print('To get started simply use `yarn run` and get going!');
    msg.post('#', 'usage');
  } else if (message_id === hash('usage')) {
    print('  ✔ Use `yarn run dev` to start a watcher that compiles and emits lua and script when you save');
    print('  ✔ Use `yarn run build` to just compile your ts, sans watcher ');

    print('⌚ Stats!');
    msg.post('#', 'stats');
  } else if (message_id === hash('stats')) {
    print('Collected Garbage Size:', collectgarbage('count') * 1024);
    print(`We ❤ TypeScript and are ${this.excitement}% excited for TypeScript in Defold!`);
  }
}
