import ImgMe from "~/media/me.png?jsx";
import ImgMeUrl from "~/media/me.png";
import { component$ } from "@builder.io/qwik";

export const ME_IMAGE_URL = ImgMeUrl;

export default component$(() => {
  return (
    <div style={{ height: "144px", width: "144px" }}>
      <ImgMe alt="This is Omri Lavi" />
    </div>
  );
});
