import * as vscode from "vscode";
import * as path from 'path';

class WebLinksDataProvider implements vscode.TreeDataProvider<WebLink>{

    private _onDidChangeTreeData: vscode.EventEmitter<WebLink | undefined> = new vscode.EventEmitter<WebLink | undefined>();
    readonly onDidChangeTreeData: vscode.Event<WebLink | undefined> = this._onDidChangeTreeData.event;

    constructor() { }

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: WebLink): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    getChildren(element?: WebLink): vscode.ProviderResult<WebLink[]> {
        if (element) {
            vscode.window.showInformationMessage(element.toString());
        } else {
            return this.getData(vscode.workspace.getConfiguration().webLinks);
        }
    }

    /**
     * 获取本地配置
     * @param data 本地配置参数
     */
    private getData(data: Array<WebLink>): Array<WebLink> {

        let webLinks = new Array<WebLink>();

        for (let i = 0; i < data.length; i++) {

            let label: string = data[i].label;
            let url: string = data[i].url;
            let webLink = new WebLink(label, url, {
                command: 'webLink.clickToOpenDocs',
                title: '',
                arguments: [url]
            });
            webLinks.push(webLink);

        }

        return webLinks;

    }

}

export class WebLink extends vscode.TreeItem {


    public url: string;


    constructor(label: string, url: string, public readonly command?: vscode.Command) {
        super(label);
        this.url = url;
    }

    get tooltip(): string {
        return `${this.label} : ${this.url}`;
    }

    get description(): string {
        return this.label;
    }

    iconPath = {
        dark: path.join(__filename, '..', '..', 'resources', 'links.svg'),
        light: path.join(__filename, '..', '..', 'resources', 'links.svg')
    }

    toString(): string {
        return "label is " + this.label + "; url is " + this.url;
    }


    contextValue = 'webLink';


}


/**
 * 本地数据视图注册
 */
export function getLinkTrees() {

    // 获取视图数据注册
    const webLinksDataProvider = new WebLinksDataProvider();
    // 注册视图数据
    vscode.window.registerTreeDataProvider("webLinks", webLinksDataProvider);

}