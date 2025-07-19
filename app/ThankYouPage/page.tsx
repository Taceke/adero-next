import SuccessModal from "@/components/parts/SuccessModal";

export default function ThankYouPage() {
  return (
    <>
      <SuccessModal
        message="Your submission has been received!"
        continueTo="/home"
      />
    </>
  );
}
