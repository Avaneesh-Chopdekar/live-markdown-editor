import DOMPurify from "dompurify";
import { marked } from "marked";

const editor = document.querySelector("textarea");
const rendered = document.querySelector("#rendered") as HTMLDivElement;
editor!!.addEventListener("keyup", () => {
  rendered!!.innerHTML = DOMPurify.sanitize(
    marked.parse(`${editor?.value}`, {
      mangle: false,
      headerIds: false,
    })
  );
});
