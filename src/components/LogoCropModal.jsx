import React from "react";

const markup = "<div id=\"crm\"><div><b>Company logo crop</b> <span style=\"font-size:12px;color:#666\">— image par drag karke area chuniye</span>\n<div id=\"crw\" style=\"overflow:auto;max-width:88vw;max-height:58vh;margin:8px 0;background:repeating-conic-gradient(#ddd 0 25%,#fff 0 50%) 0 0/16px 16px\"><canvas id=\"cc\" style=\"display:block;cursor:crosshair;touch-action:none\"></canvas></div>\nZoom <input type=\"range\" id=\"cz\" min=\"50\" max=\"300\" value=\"100\" oninput=\"drawC()\">\n<button class=\"s\" onclick=\"autoTrim()\">Auto-trim white/transparent</button><button class=\"s\" onclick=\"cropAll()\">Full image</button><button class=\"g\" onclick=\"cropOK()\">Use logo</button><button class=\"s\" onclick=\"cropX()\">Cancel</button></div></div>\n";

export default function LogoCropModal() {
  return <div className="legacy-fragment" dangerouslySetInnerHTML={{ __html: markup }} />;
}
