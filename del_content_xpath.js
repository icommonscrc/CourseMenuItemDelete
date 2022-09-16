javascript:
var deleteContentButton = document.evaluate("//div[@class = 'container  clearfix']/div[2]/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
deleteContentButton.click();
