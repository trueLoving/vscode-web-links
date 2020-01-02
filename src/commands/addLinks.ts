import * as vscode from "vscode";


/**
 * 添加链接函数事件
 */
export async function addDocumentLinks() {

    let label = await vscode.window.showInputBox({ value: '', placeHolder: 'input label' });

    let url = await vscode.window.showInputBox({ value: '', placeHolder: 'input url' });


    if (label === undefined || url === undefined) {
        vscode.window.showErrorMessage("链接标签或者链接地址不能为空！");
        return;
    }

    vscode.workspace.getConfiguration().webLinks.push({ label: label, url: url });

    vscode.window.showInformationMessage("添加成功，请刷新一下");

}

