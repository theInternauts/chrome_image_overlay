/****
TODO:
1. check for an existing <img> tag and replace it with the newly generated tag
2. need checkbox to auto-append on reload
3. need fields and/or robust UI to tweak positioning settings after the append
4. need way to keep setting persistent between reloads (local storage?, writable config file?)
5. ideally setts on a perpage basis can be maintained (match url)
6. need to choose a file and upload/save it for persisence.
7. only show page_action if the current url matches the manifest permissions sets
8. image positioning hotkeys: Fn + Cmd + (arrows)
9. need to detect the height and width of the image and be sure it's displayed fully expanded
10. need to set opacity.  Need a hotkey for this
11. need hot key option to move in 10px increments and 1 pixel increments
12. clicking the page_action icon toggels the plugin on/off.  Need Hotkey for this, too.
13. will need a test suite before releasing/publicizing open source

total hotkeys: 12
image_shift_up (1px increment)
image_shift_down (1px increment)
image_shift_left (1px increment)
image_shift_right (1px increment)

image_shift_up (10px increment)
image_shift_down (10px increment)
image_shift_left (10px increment)
image_shift_right (10px increment)

image_opactiy_up (0.1% increment)
image_opacity_down (0.1% increment)
plugin_toggle_on
plugin_toggle_off

*****/

var image_underlay = image_underlay || {

	utilCreateFragment: function (elementTag, nodeId, nodeClass, nodeStyle, nodeSrc){
		//currently this only supports setting an ID attribute and/or a single class attribute
		var HTMLfragment = document.createDocumentFragment();
		HTMLfragment.appendChild(document.createElement(elementTag))

		if(nodeClass){
			var attrClass = document.createAttribute("class")
			attrClass.value = nodeClass
			HTMLfragment.childNodes[0].setAttributeNode(attrClass)
		}

		if(nodeId){
			var attrId = document.createAttribute("id")
			attrId.value = nodeId
			HTMLfragment.childNodes[0].setAttributeNode(attrId)
		}

		if(nodeStyle){
			var attrStyle = document.createAttribute("style")
			attrStyle.value = nodeStyle
			HTMLfragment.childNodes[0].setAttributeNode(attrStyle)
		}

		if(nodeSrc){
			var attrSrc = document.createAttribute("src")
			attrSrc.value = nodeSrc
			HTMLfragment.childNodes[0].setAttributeNode(attrSrc)
		}

		return HTMLfragment
	},

	build: function(elementTag, options){
		//currently this only supports setting an ID attribute and/or a single class attribute
		elm = document.createElement(elementTag);

		var keys = Object.keys(options);

		keys.forEach(this._assignAttributes);

		var HTMLfragment = document.createDocumentFragment();
		return HTMLfragment.appendChild(elm);
	},

	_assignAttributes: function(value, index, collection){
		var attr = document.createAttribute(value)
		attr.value = options[value];
		elm.setAttributeNode(attr);
		// console.log("["+ value +"] = "+ options[value]);
	}
}


// var imageSource = "https://asset1.basecamp.com/1895814/projects/6585446/attachments/102867978/6dc4b5ef81f10ebebf2d9528c0e1fbb00010/original/hotelindex20140814.jpg";
var imageSource = chrome.extension.getURL("images/hotelindex20140814.jpg");

var options = {
	"id": 'image_underlay_img',
	"class": 'image_underlay',
	"src": imageSource
}
// var node = image_underlay.utilCreateFragment('img', 'image_underlay_img', 'image_underlay', 'position:absolute;z-index:-10;top:0px;left:20px;outline:5px solid red;', imageSource );
var node = image_underlay.build('img', options);
console.log("appending: ", node);
document.body.style.background = 'none';
document.body.appendChild(node);
