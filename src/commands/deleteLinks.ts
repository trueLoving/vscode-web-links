import * as vscode from "vscode";
import { WebLink } from "../webLinks";


/**
 * 删除链接
 * @param webLink 链接实体
 */
export function deleteLink(webLink: WebLink) {

    vscode.window.showInformationMessage(webLink.toString());

}