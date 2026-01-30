interface toastMessage{
  message: string
  toast: boolean
}

export default function Toast ({message, toast}: toastMessage) {
  return (
    <>
      <div className={`w-auto rounded-sm bg-(--color-toast-bg) shadow-xl shadow-[#000000] h-12 flex justify-start text-center items-center pl-4 fixed z-20 bottom-5 ${toast ? 'opacity-100 translate-y-0 visible' : 'opacity-0 pointer-events-none translate-y-5 invisible'} text-white transition-all duration-500 ease-in-out pr-40`}>{message}</div>
    </>
  );
}
