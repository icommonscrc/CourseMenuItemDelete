javascript:
var finalDeleteButton = document.evaluate("//a[@class = 'genericButton' and contains(text(), 'Delete')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
finalDeleteButton.click();
