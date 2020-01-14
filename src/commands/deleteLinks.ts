import * as vscode from "vscode";
import { WebLink } from "../webLinks";


/**
 * 删除链接
 * @param webLink 链接实体
 */
export function deleteLink(webLink: WebLink) {

    // vscode.window.showInformationMessage(webLink.toString());

    const webLinks = vscode.workspace.getConfiguration().webLinks;

    let index = -1;

    webLinks.forEach((element: { label: string; url: string; }, i) => {
        if (element.label == webLink.label) {
            index = i;
        }
    });

    if (index == -1) {
        vscode.window.showErrorMessage("删除失败");
        return;
    } else {
        vscode.workspace.getConfiguration().webLinks.splice(index, 1);
        vscode.window.showInformationMessage("删除成功，请刷新一下");
    }

}