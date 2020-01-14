import * as vscode from "vscode";

import { getLinkTrees,WebLink } from "../webLinks";


/**
 * 删除链接
 * @param webLink 链接实体
 */
export function deleteLink(webLink: WebLink) {

    const webLinks = vscode.workspace.getConfiguration().webLinks;

    let index = -1;

    // 寻找要删除的链接相应的索引
    webLinks.forEach((element: { label: string; url: string; }, i) => {
        if (element.label == webLink.label) {
            index = i;
        }
    });

    if (index == -1) {
        
        // 删除失败
        vscode.window.showErrorMessage("删除失败");
        
    } else {

        // 删除链接
        vscode.workspace.getConfiguration().webLinks.splice(index, 1);
        // 刷新视图层
        getLinkTrees();
        // 显示提示信息
        vscode.window.showInformationMessage("删除成功");

    }

}