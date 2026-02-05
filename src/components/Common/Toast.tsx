interface toastMessage {
  message: string;
  toast: boolean;
}

export default function Toast({ message, toast }: toastMessage) {
  return (
    <>
      <div
        className={`fixed bottom-5 z-20 flex h-12 w-auto items-center justify-start rounded-sm bg-(--color-toast-bg) pl-4 text-center shadow-xl shadow-[#000000] ${toast ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-5 opacity-0'} pr-40 text-white transition-all duration-500 ease-in-out`}
      >
        {message}
      </div>
    </>
  );
}
