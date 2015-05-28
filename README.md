# XML DOM to XML

Convert XML DOM to a string

## Usage

```javascript
var xmldom2xml = require("xmldom-to-xml");
var xmlDOM = domParser.parseFromString("some-xml-string");
var xml = xmldom2xml(xmlDOM.getElementsByTagName("some-xml-element"));
```
