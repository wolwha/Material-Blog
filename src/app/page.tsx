import Container from "@/components/Main/Container";
import EditButton from "@/components/Main/EditButton";

export default function page() {
  return (
    <>
      <div className="h-full rounded-[20px] bg-white justify-center items-start flex">
        <Container />
        <EditButton />
      </div>
    </>
  );
}
