import React from "react";

const markup = "<div id=\"tb\"></div>\n";

export default function FloatingToolbar() {
  return <div className="legacy-fragment" dangerouslySetInnerHTML={{ __html: markup }} />;
}
