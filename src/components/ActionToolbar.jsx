import React from "react";

const markup = "<div id=\"ab\"><div class=\"gp\"><button id=\"bu\" onclick=\"undo()\" title=\"Ctrl+Z\">&#8630; Undo</button><button id=\"br\" onclick=\"redo()\" title=\"Ctrl+Y / Cmd+Shift+Z\">&#8631; Redo</button></div>\n<div class=\"gp\"><button class=\"el s\" onclick=\"layer(1)\">&#9650; Bring forward</button><button class=\"el s\" onclick=\"layer(-1)\">&#9660; Send back</button></div>\n<div class=\"gp\"><button class=\"el s\" onclick=\"centerAx('x')\">&#8596; Center X</button><button class=\"el s\" onclick=\"centerAx('y')\">&#8597; Center Y</button></div>\n<div class=\"gp\" style=\"border:0\"><button class=\"el s\" onclick=\"dupAny()\">Duplicate</button><button class=\"el s\" onclick=\"resetAny()\">Reset pos</button><button class=\"el s\" onclick=\"delDeco()\">Delete</button></div></div>\n";

export default function ActionToolbar() {
  return <div className="legacy-fragment" dangerouslySetInnerHTML={{ __html: markup }} />;
}
