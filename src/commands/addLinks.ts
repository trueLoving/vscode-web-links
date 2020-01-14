import * as vscode from "vscode";

import { getLinkTrees } from "../webLinks";

/**
 * 添加链接函数事件
 */
export async function addDocumentLinks() {

    // 输入链接的标签
    let label = await vscode.window.showInputBox({ value: '', placeHolder: 'input label' });
    // 输入链接的地址
    let url = await vscode.window.showInputBox({ value: '', placeHolder: 'input url' });

    // 判断用户输入是否合法，起码不能为空
    if (label === undefined || url === undefined) {
        vscode.window.showErrorMessage("链接标签或者链接地址不能为空！");
        return;
    }

    // 添加链接
    vscode.workspace.getConfiguration().webLinks.push({ label: label, url: url });
    // 视图更新
    getLinkTrees();
    // 显示提示信息
    vscode.window.showInformationMessage("添加成功");

}

