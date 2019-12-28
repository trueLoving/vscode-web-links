import * as vscode from "vscode";


export class DocumentDataProvider implements vscode.TreeDataProvider<Document>{

    private _onDidChangeTreeData: vscode.EventEmitter<Document | undefined> = new vscode.EventEmitter<Document | undefined>();
    readonly onDidChangeTreeData: vscode.Event<Document | undefined> = this._onDidChangeTreeData.event;

    constructor(private workplaceRoot: string) {

    }

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
            let menu = new Array<Document>();
            let document = new Document("test1", "test2");
            menu.push(document);
            menu.push(document);
            return menu;
        }
    }

}



export class Document extends vscode.TreeItem {

    public label: string;

    public url: string;

    constructor(label: string, url: string) {
        super(label);
        this.label = label;
        this.url = url;
    }

    toString(): string {
        return "label is " + this.label + "; url is " + this.url;
    }

    get tooltip(): string {
        return `${this.label}-${this.url}`;
    }

    get description(): string {
        return this.label;
    }

    
}