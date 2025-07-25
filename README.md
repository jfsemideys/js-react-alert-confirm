![React Alert & Confirm Hook](https://raw.githubusercontent.com/jfsemideys/js-react-alert-confirm/main/docs/banner.png)

# js-react-alert-confirm

A lightweight React hook that provides `alert()` and `confirm()` behavior using JSX-based dialogs — without needing a provider or global context.

## ✨ Features

- Drop-in replacement for `window.alert()` and `window.confirm()` using `await`
- No `<Provider>` or wrapper needed
- Automatically renders modals into the DOM
- Styled and responsive by default
- Fully TypeScript compatible

---

## 📦 Installation

```bash
npm install js-react-alert-confirm
```

🚀 Usage
You can call it from any component without setup:

```
import { useJsReactAlertConfirm } from 'js-react-alert-confirm';

function ExampleComponent() {
  const { jsReactAlert, jsReactConfirm } = useJsReactAlertConfirm();

  const handleClick = async () => {
    await jsReactAlert.Alert({ message: 'This is a custom alert!' });

    const result = await jsReactConfirm.Confirm({ message: 'Are you sure?' });
    if (result === 'Yes') {
      console.log('User clicked Yes!');
    }
  };

  return <button onClick={handleClick}>Show Alert & Confirm</button>;
}
```

🧠 API

jsReactAlert.Alert(options): Promise<void>
Shows an alert dialog with a message and optional title.

Returns a Promise that resolves when "OK" is clicked.

```
await jsReactAlert.Alert({
  title: 'Notice',
  message: 'This is a simple alert dialog.'
});
jsReactConfirm.Confirm(options): Promise<'Yes' | 'No'>
Shows a confirm dialog with Yes/No buttons.

Returns 'Yes' or 'No'.

const result = await jsReactConfirm.Confirm({
  title: 'Confirmation',
  message: 'Do you want to continue?'
});

```

💡 Why Use This?
No context or <Provider> wrapper required

Promise-based dialogs using JSX

Globally usable in any React component

Customizable UI

📜 License
MIT

🙋‍♂️ Author
Created by Jose Semidey

```

```
