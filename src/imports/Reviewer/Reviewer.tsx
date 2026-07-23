import { ANG_ANG_VERIFIED_REVIEWER_URL } from "../../app/config/ang-ang-assets";

export default function Reviewer() {
  return (
    <img
      src={ANG_ANG_VERIFIED_REVIEWER_URL}
      alt="Verified Reviewer screen"
      className="block size-full object-contain"
      data-name="Reviewer"
    />
  );
}
