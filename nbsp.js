/*  This JS will put non-breaking spaces after or before any caracter you want.
    In french, we have nbsp before '!' or '?'.
*/

myfilter = function(node){
  if (node.parentNode.className=="french") //filter out DIV and IMG elements
  return NodeFilter.FILTER_ACCEPT
  else
  return NodeFilter.FILTER_SKIP;
}

var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, myfilter, false);

while (walker.nextNode()) {
  //  // Non-breaking spaces after numbers.
  walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(/(\d)\s/gu, '$1\xa0');
  //  // Non-breaking spaces before ';' ':' '!' and '?'.
  walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(/\s([;:!?])/gu, '\xa0$1');
  // // Thin spaces around parentheses
  walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(/([(])/gu, '$1\u2009');
  walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(/([)])/gu, '\u2009$1');
  // // En-spaces around en dashes
  walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(/\s([–])\s/gu, '\u2002$1\u2002');
}



// CELUI LA FONCTIONNE SANS SELECTION DE NOM DE CLASSES

// var tree = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
//
// while (tree.nextNode()) {
//   var textNode = tree.currentNode;
//   // Non-breaking spaces after numbers.
//   textNode.nodeValue = textNode.nodeValue.replace(/(\d)\s/gu, '$1\xa0');
//   // Non-breaking spaces before ';' ':' '!' and '?'.
//   textNode.nodeValue = textNode.nodeValue.replace(/\s([;:!?])/gu, '\xa0$1');
// }
