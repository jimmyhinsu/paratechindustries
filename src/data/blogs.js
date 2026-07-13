import markingImg from "@/assests/images/lasermarkingmachine.jpg";
import weldingImg from "@/assests/images/handheldfiberlaserweldingmachine.jpeg";
import jewelleryImg from "@/assests/images/jsm.jpeg";

// Legacy image map: maps old filename keys (stored in Supabase) to local imports.
// New uploads from the admin use full Supabase Storage URLs and don't need this map.
export const blogImageMap = {
  "lasermarkingmachine.jpg": markingImg,
  "handheldfiberlaserweldingmachine.jpeg": weldingImg,
  "jsm.jpeg": jewelleryImg
};
