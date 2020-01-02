import * as vscode from "vscode";
import * as path from 'path';

class DocumentDataProvider implements vscode.TreeDataProvider<Document>{

    private _onDidChangeTreeData: vscode.EventEmitter<Document | undefined> = new vscode.EventEmitter<Document | undefined>();
    readonly onDidChangeTreeData: vscode.Event<Document | undefined> = this._onDidChangeTreeData.event;

    constructor() { }

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: Document): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    getChildren(element?: Document): vscode.ProviderResult<Document[]> {
        if (element) {
            vscode.window.showInformationMessage(element.toString());
        } else {
            return this.getData(vscode.workspace.getConfiguration().documentLinks);
        }
    }

    /**
     * 获取本地配置
     * @param data 本地配置参数
     */
    private getData(data: Array<Document>): Array<Document> {

        let documentLinks = new Array<Document>();

        for (let i = 0; i < data.length; i++) {

            let label: string = data[i].label;
            let url: string = data[i].url;
            let document = new Document(label, url, {
                command: 'document.clickToOpenDocs',
                title: '',
                arguments: [url]
            });
            documentLinks.push(document);

        }

        return documentLinks;

    }

}

export class Document extends vscode.TreeItem {


    public url: string;


    constructor(label: string, url: string, public readonly command?: vscode.Command) {
        super(label);
        this.url = url;
    }

    get tooltip(): string {
        return `${this.label}-${this.url}`;
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

}

/**
 * 本地数据视图注册
 */
export function getLinkTrees() {

    // 获取视图数据注册
    const documentDataProvider = new DocumentDataProvider();
    // 注册视图数据
    vscode.window.registerTreeDataProvider("documentLinks", documentDataProvider);

}