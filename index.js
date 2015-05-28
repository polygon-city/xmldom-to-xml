var _ = require("lodash");
var XMLSerializer = require("xmldom").XMLSerializer;
var xmlSerializer = new XMLSerializer();

var xmldom2xml = function(xmlDOM) {
  // TODO: Find a better node collection test than looking for nodeName
  if (!xmlDOM.nodeName) {
    var results = [];

    _.each(xmlDOM, function(node) {
      results.push(xmlSerializer.serializeToString(node));
    });

    return results;
  } else {
    return xmlSerializer.serializeToString(xmlDOM);
  }
};

module.exports = xmldom2xml;
