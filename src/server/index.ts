/* global globalThis */

// import * as sheets from "./Spreadsheet";
import { getMySheet } from "./Spreadsheet";

// assign anything to be exposed to globalThis to force rollup to include it
// @ts-ignore
globalThis.doGet = doGet;
// @ts-ignore
globalThis.getSheetValues = getSheetValues;

// main entry point
function doGet(): GoogleAppsScript.HTML.HtmlOutput {
  return HtmlService.createHtmlOutputFromFile("index");
}

// exposed function client can call through google.script.run.getSheetValues()
function getSheetValues(): string[][] {
  return getMySheet().getDataRange().getDisplayValues();
}
