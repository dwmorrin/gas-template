/* global google */

console.log("Hello Apps Script");

google.script.run
  .withSuccessHandler(onSuccess)
  .withFailureHandler(onFailure)
  .getSheetValues();

function onSuccess(values: string[][]): void {
  console.log(values);
}

function onFailure(): void {
  console.log("Call for sheet values failed");
}
