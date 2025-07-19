import SuccessPage from "@/components/parts/SuccessModal";

export default function Success() {
  return (
    <SuccessPage
      message="Your form has been successfully submitted!"
      continueTo="/home"
    />
  );
}
