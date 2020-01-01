import * as vscode from 'vscode';

// 命令行打开链接
import { showDocLinks } from "./commands/openDocLinks";
// 添加链接
import { addDocumentLinks } from "./commands/addDocLinks";
// 视图数据
import { getLinkTrees, Document } from "./documenLinks";



export function activate() {

	// 本地数据视图注册
	getLinkTrees();

	// 右键打开链接或者以命令形式打开链接
	vscode.commands.registerCommand("documentLinks.open", (document: Document) => {
		document ? vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(document.url))
			: showDocLinks();
	});

	// // 单击打开links
	// vscode.commands.registerCommand("document.clickToOpenDocs", url => vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(url)));
	// 刷新链接
	vscode.commands.registerCommand("documentLinks.refresh", () => getLinkTrees());
	// 添加链接
	vscode.commands.registerCommand("documentLinks.add", () => addDocumentLinks());
	// 根据标签删除链接
	vscode.commands.registerCommand("documentLinks.delete", () => vscode.window.showInformationMessage("delete it!"));
	// 编辑链接
	vscode.commands.registerCommand("documentLinks.edit", () => vscode.window.showInformationMessage("edit it!"));

}



// this method is called when your extension is deactivated
export function deactivate() {

	console.log("deactivate documentLinks");
	vscode.window.showInformationMessage("deactivate documentLinks");

}
