// Нельзя создавать экземпляр данного класса
import { v4 as makeUUID } from 'uuid';
import { EventBus } from './event-bus';
import { EventProps } from '../modules/form/form.component';

export enum Events {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render',
    FLOW_CAR = 'flow: component-after-render',
}

export class BaseBlock<I = {}> {
  _element: HTMLElement | null = null;

  get element(): HTMLElement | null {
    return this._element;
  }

  props: {[key: string]: any};

  eventBus: EventBus;

  events: EventProps;

  id: string;

  children: BaseBlock;

  constructor(propsAndChildren: I | null) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;
    this.id = makeUUID();

    const allProps = { ...props, id: this.id };

    this.props = this._makePropsProxy(allProps);
    this.eventBus = eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Events.INIT);
  }

  private _getChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (
        (Array.isArray(value) && key !== 'links')
                || value instanceof BaseBlock
      ) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(template: any, props: any) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]: any[]) => {
      if (Array.isArray(child)) {
        child.forEach((value) => {
          Object.entries(value).forEach(([childKey, childValue]) => {
            const childBlock = childValue as BaseBlock;

            if (!propsAndStubs[key]) {
              propsAndStubs[key] = [];
            }

            childBlock.element?.setAttribute('data-id', childBlock.id);

            propsAndStubs[key].push({
              [childKey]: `${childBlock.element?.outerHTML}`,
            });
          });
        });
      } else {
        child.element.setAttribute('data-id', child.id);
        propsAndStubs[key] = `${child.element.outerHTML}`;
      }
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach((child: BaseBlock) => {
      if (Array.isArray(child)) {
        child.forEach((value) => {
          Object.values(value).forEach((childValue: BaseBlock) => {
            const stub = fragment.content.querySelector(
              `[data-id="${childValue.id}"]`,
            );

            stub?.replaceWith(childValue.getContent());
          });
        });
      } else {
        const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

        stub?.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }

  render(): any {}

  componentAfterRender() {}

  init() {
    this._createResources();
    this.eventBus.emit(Events.FLOW_RENDER);
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus.emit(Events.FLOW_CDM);
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    return oldProps && newProps;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  getContent(): any {
    return this.element;
  }

  show() {
    const content = this.getContent();

    if (content) {
      content.style.display = 'block';
    }
  }

  hide() {
    const content = this.getContent();

    if (content) {
      content.style.display = 'none';
    }
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Events.INIT, this.init.bind(this));
    eventBus.on(Events.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Events.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Events.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Events.FLOW_CAR, this._componentAfterRender.bind(this));
  }

  private _componentAfterRender() {
    this.componentAfterRender();
  }

  private _createResources() {
    this._element = this._createDocumentElement('div');
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus.emit(Events.FLOW_RENDER);
    }
  }

  private _render() {
    const block = this.render();
    const newElement = block.firstChild as HTMLElement;

    this._removeEvents();

    if (this._element) {
      this._element.innerHTML = '';
      this._element.replaceWith(newElement);
      this._element = newElement;

      this._addEvents();
      this.eventBus.emit(Events.FLOW_CAR);
    }
  }

  private _makePropsProxy(props: {[key: string]: any}) {
    return new Proxy(props, {
      set: (target, prop: string, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          this.eventBus.emit(Events.FLOW_CDU);
        }
        return true;
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);

    if (this.id) {
      element.setAttribute('data-id', this.id);
    }

    return element;
  }

  private _addEvents() {
    const { events = {} } = this.props;

    this.events = events;

    const { type } = this.props;
    const element = type === 'text' ? this._element?.firstElementChild : this._element;

    Object.keys(this.events).forEach((eventName) => {
      element?.addEventListener(eventName, this.events[eventName]);
    });
  }

  private _removeEvents() {
    if (this.events) {
      Object.keys(this.events).forEach((eventName) => {
        this._element?.removeEventListener(eventName, this.events[eventName]);
      });

      this.events = {};
    }
  }
}
