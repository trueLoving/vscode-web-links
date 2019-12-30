import * as vscode from "vscode";


export class DocumentDataProvider implements vscode.TreeDataProvider<Document>{

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


    private getData(data: Array<Object>): Array<Document> {

        let documentLinks = new Array<Document>();

        for (let i = 0; i < data.length; i++) {
            // let document = new Document(data[i].label, data[i].url);
            let document = <Document><unknown>data[i];
            documentLinks.push(document);
        }

        return documentLinks;

    }

}



export class Document extends vscode.TreeItem {


    public url: string;

    constructor(label: string, url: string) {
        super(label);
        this.url = url;
    }

    get tooltip(): string {
        return `${this.label}-${this.url}`;
    }

    get description(): string {
        return this.label;
    }

    toString(): string {
        return "label is " + this.label + "; url is " + this.url;
    }

}