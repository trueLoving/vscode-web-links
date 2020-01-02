import * as vscode from 'vscode';


// 视图数据
import { getLinkTrees, WebLink } from "./webLinks";
// 命令行打开链接
import { showWebLinks } from "./commands/openLinks";
// 添加链接
import { addDocumentLinks } from "./commands/addLinks";




export function activate() {

	// 本地数据视图注册
	getLinkTrees();

	// 右键打开链接或者以命令形式打开链接
	vscode.commands.registerCommand("webLinks.open", (webLink: WebLink) => {
		webLink ? vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(webLink.url))
			: showWebLinks();
	});

	// // 单击打开links
	// vscode.commands.registerCommand("document.clickToOpenDocs", url => vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(url)));
	// 刷新链接
	vscode.commands.registerCommand("webLinks.refresh", () => getLinkTrees());
	// 添加链接
	vscode.commands.registerCommand("webLinks.add", () => addDocumentLinks());
	// 根据标签删除链接
	vscode.commands.registerCommand("webLinks.delete", () => vscode.window.showInformationMessage("delete it!"));
	// 编辑链接
	vscode.commands.registerCommand("webLinks.edit", () => vscode.window.showInformationMessage("edit it!"));

}



// this method is called when your extension is deactivated
export function deactivate() {

	console.log("deactivate webLinks");

	vscode.window.showInformationMessage("deactivate webLinks");

}
