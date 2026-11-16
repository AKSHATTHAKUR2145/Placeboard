import React from "react";

const markup = "<div id=\"view\"><div id=\"wrap\"><div id=\"poster\"></div><div id=\"ovl\"></div></div></div>\n";

export default function PosterPreview() {
  return <div className="legacy-fragment" dangerouslySetInnerHTML={{ __html: markup }} />;
}
