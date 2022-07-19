let resetKeyboardButton: HTMLButtonElement = document.getElementById("resetKeyboard") as HTMLButtonElement;
let keyboardInput: HTMLInputElement = document.getElementById("keyboardInput") as HTMLInputElement;

resetKeyboardButton.addEventListener("click", () => {
    clearKeyboardInput();
    restartKeyboard();
})

function clearKeyboardInput() {
    keyboardInput.value = "";
}

function restartKeyboard() {
    let buttons = document.querySelectorAll(".keyboardButton");
    for (const btn of buttons) {
        btn.classList.remove("buttonPressed");
    }
}

function __pressButton(input: HTMLInputElement, buttonName: string, searchBy?: string) {
    input.value = `${buttonName.toUpperCase()} ${input.value}`;
    console.log(searchBy);
    let element = document.evaluate(
        `//span[text()='${searchBy ?? buttonName}']`,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    )!.singleNodeValue;
    console.log(element?.parentElement);

    element?.parentElement?.classList.add("buttonPressed");
}

document.addEventListener('keyup', (event) => {
    let name: string = event.key;
    let code: string = event.code;
    let element: HTMLElement = event.target as HTMLElement;
    console.log("Name", name, "Code", code);
    switch (code) {
        case "Escape":
            __pressButton(keyboardInput, "Esc")
            break;
        case "CapsLock":
            __pressButton(keyboardInput, "CapsLock")
            break;
        case "ContextMenu":
            __pressButton(keyboardInput, "CtxMenu");
            break;
        case "ShiftLeft":
            __pressButton(keyboardInput, "ShiftL");
            break;
        case "ShiftRight":
            __pressButton(keyboardInput, "ShiftR");
            break;
        case "ControlLeft":
            __pressButton(keyboardInput, "CtrlL");
            break;
        case "ControlRight":
            __pressButton(keyboardInput, "CtrlR");
            break;
        case "AltRight":
            __pressButton(keyboardInput, "AltR");
            break;
        case "AltLeft":
            __pressButton(keyboardInput, "AltL");
            break;
        case "OSLeft":
            __pressButton(keyboardInput, "Win");
            break;
        case "Space":
            __pressButton(keyboardInput, "Space");
            break;
        case "ArrowUp":
            __pressButton(keyboardInput, "↑");
            break;
        case "ArrowLeft":
            __pressButton(keyboardInput, "←");
            break;
        case "ArrowDown":
            __pressButton(keyboardInput, "↓");
            break;
        case "ArrowRight":
            __pressButton(keyboardInput, "→");
            break;
        case "PrintScreen":
            __pressButton(keyboardInput, name, "Print");
            break;
        case "ScrollLock":
            __pressButton(keyboardInput, name, "Scroll");
            break;
        case "Pause":
            __pressButton(keyboardInput, name, "Pause");
            break;
        case "Backquote":
            __pressButton(keyboardInput, name, "`~");
            break;
        case "Minus":
            __pressButton(keyboardInput, name, "-_");
            break;
        case "Equal":
            __pressButton(keyboardInput, name, "= +");
            break;
        case "Backspace":
            __pressButton(keyboardInput, name, "Backspace");
            break;
        case "Insert":
            __pressButton(keyboardInput, name, "Ins");
            break;
        case "Home":
            __pressButton(keyboardInput, name, "Home");
            break;
        case "PageUp":
            __pressButton(keyboardInput, name, "PgUp");
            break;
        case "Tab":
            __pressButton(keyboardInput, name, "Tab");
            break;
        case "BracketLeft":
            __pressButton(keyboardInput, name, "[ {");
            break;
        case "BracketRight":
            __pressButton(keyboardInput, name, "] }");
            break;
        case "Backslash":
            __pressButton(keyboardInput, name, "\\ |");
            break;
        case "Delete":
            __pressButton(keyboardInput, name, "Del");
            break;
        case "End":
            __pressButton(keyboardInput, name, "End");
            break;
        case "PageDown":
            __pressButton(keyboardInput, name, "PgDn");
            break;
        case "Semicolon":
            __pressButton(keyboardInput, name, ":;");
            break;
        case "Quote":
            document.querySelector("div.keyboardButton:nth-child(65) > span:nth-child(1)")?.parentElement?.classList.add("buttonPressed");
            break;
        case "Enter":
            __pressButton(keyboardInput, name, "Enter");
            break;
            case "Comma":
            __pressButton(keyboardInput, name, "<,");
            break;
            case "Period":
            __pressButton(keyboardInput, name, ">.");
            break;
            case "Slash":
            __pressButton(keyboardInput, name, "?/");
            break;
        default:
            __pressButton(keyboardInput, name.toUpperCase());
            break;
    }
}, false);
document.onkeyup = (e) => false;
document.onkeydown = (e) => false;