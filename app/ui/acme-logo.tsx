import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { vazirmatn } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${vazirmatn.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Logo</p>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
    </div>
  );
}
