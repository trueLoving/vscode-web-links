import * as vscode from "vscode";


/**
 * 添加链接函数事件
 */
export async function addDocumentLinks() {

    let label = await vscode.window.showInputBox({ value: '', placeHolder: 'input label' });

    let url = await vscode.window.showInputBox({ value: '', placeHolder: 'input url' });

    vscode.workspace.getConfiguration().documentLinks.push({ label: label, url: url });

    vscode.window.showInformationMessage("添加成功，请刷新一下");

}

