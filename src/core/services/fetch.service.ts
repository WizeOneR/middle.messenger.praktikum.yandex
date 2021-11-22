import {Singleton} from './decorators/singleton';

export enum METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

@Singleton
export class Fetch {
    get<T>(url: string, options: {[key: string]: any} = {}): Promise<T> {
        return this.sendRequest(`${url}${this.queryStringify(options.data)}`, {
            method: METHODS.GET,
        });
    }

    put<T>(url: string, options: {[key: string]: any} = {}): Promise<T> {
        return this.sendRequest(`${url}`, {method: METHODS.PUT, data: options.data});
    }

    post<T>(url: string, options: {[key: string]: any} = {}): Promise<T> {
        return this.sendRequest(`${url}`, {method: METHODS.POST, data: options.data});
    }

    delete<T>(url: string, options: {[key: string]: any} = {}): Promise<T> {
        return this.sendRequest(url, {method: METHODS.DELETE, data: options.data});
    }

    private sendRequest<T>(
        url: string,
        options: {[key: string]: string} = {method: METHODS.GET},
    ): Promise<T> {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            xhr.onload = function () {
                resolve(JSON.parse(xhr.responseText));
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            if (!data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    }

    private queryStringify(data: {[key: string]: string | null}): string {
        let params: string[] = [];

        Object.keys(data).forEach(key => {
            if (data[key] !== null && data[key] !== undefined) {
                params.push(`${key}=${data[key]}`);
            }
        });

        return params.length > 0 ? '?' + params.join('&') : '';
    }
}
