import Container from "@/components/Main/Container";
import EditButton from "@/components/Main/EditButton";
// import { cookies } from "next/headers";
// import {createClient} from '@supabase/supabase-js'

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
