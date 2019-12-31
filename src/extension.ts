import * as vscode from 'vscode';

// 命令行打开链接
import { showDocLinks } from "./openDocLinks";

// 视图数据
import { DocumentDataProvider, Document } from "./documenLinks";


export function activate() {

	// 命令打开链接
	vscode.commands.registerCommand("extension.ss.openDocs", () => { showDocLinks() });

	// 获取视图数据注册
	const documentDataProvider = new DocumentDataProvider();
	// 注册视图数据
	vscode.window.registerTreeDataProvider("documentLinks", documentDataProvider);

	// 右键打开链接
	vscode.commands.registerCommand("documentLinks.open", (document: Document) => {
		document ? vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(document.url))
			: vscode.window.showInformationMessage("test commands");
	});

	// 双击打开links
	vscode.commands.registerCommand("document.clickToOpenDocs", url => vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(url)));

}



// this method is called when your extension is deactivated
export function deactivate() { }
