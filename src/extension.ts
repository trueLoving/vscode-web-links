// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// open doc action function
import { showDocLinks } from "./openDocLinks";


import { DocumentDataProvider } from "./documenLinks";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


	let disposable = vscode.commands.registerCommand("extension.ss.openDocs", () => {
		showDocLinks();
	})

	context.subscriptions.push(disposable);

	const documentDataProvider = new DocumentDataProvider(vscode.workspace.rootPath);
	vscode.window.registerTreeDataProvider("urlLists", documentDataProvider);

}



// this method is called when your extension is deactivated
export function deactivate() { }
