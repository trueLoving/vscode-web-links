// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// open doc action function
import { showDocLinks } from "./openDocLinks";


import { DocumentDataProvider, Document } from "./documenLinks";


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.commands.registerCommand("extension.ss.openDocs", () => {
		showDocLinks();
	});

	const documentDataProvider = new DocumentDataProvider();
	vscode.window.registerTreeDataProvider("documentLinks", documentDataProvider);

	vscode.commands.registerCommand("documentLinks.open", (document: Document) => {
		if (document) {
			vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(document.url));
		} else {
			vscode.window.showInformationMessage("test commands");
		}
	});

}



// this method is called when your extension is deactivated
export function deactivate() { }
