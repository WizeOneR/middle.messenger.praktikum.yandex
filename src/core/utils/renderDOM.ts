import {BaseBlock} from '../base-block';

export function render(selector: string, block: BaseBlock): Element | null {
    const root = document.querySelector(selector);

    if (root) {
        root.appendChild(block.getContent() as Node);
        block.dispatchComponentDidMount();
    }

    return root;
}
