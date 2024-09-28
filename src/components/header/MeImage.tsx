import ImgMe from "~/media/me.png?jsx";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div style={{ height: "144px", width: "144px" }}>
      <ImgMe />
    </div>
  );
});
